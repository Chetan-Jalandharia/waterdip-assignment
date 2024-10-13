from fastapi import APIRouter, HTTPException, status, Body
from bson import ObjectId,errors
from config.db import get_db_connection
from schemas.schema import TaskSchema, UpdateTaskSchema, TaskBulkCreate
from typing import List,Union
from fastapi.responses import JSONResponse

router = APIRouter()

db = get_db_connection()
task_collection = db["tasks"]

# Helper function to convert ObjectId to string
def object_id_str(obj):
    obj["_id"] = str(obj["_id"])
    return obj

# Create a new task/bulk tasks
@router.post("/", response_model=Union[List[dict], dict], status_code=status.HTTP_201_CREATED)
def create_task(task_data: Union[TaskSchema, TaskBulkCreate] = Body(...)):
    if isinstance(task_data, TaskSchema):
        # Handle single task creation
        task_dict = task_data.dict()
        try:
            result = task_collection.insert_one(task_dict)
            return {"id": str(result.inserted_id)}
        except Exception as e:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))
    
    elif isinstance(task_data, TaskBulkCreate):
        # Handle bulk task creation
        tasks_list = []
        try:
            for task in task_data.tasks:
                task_dict = task.dict()
                result = task_collection.insert_one(task_dict)
                tasks_list.append({"id": str(result.inserted_id)})
            return {"tasks": tasks_list}
        except Exception as e:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))
        
    raise HTTPException(status_code=status.HTTP_422_UNPROCESSABLE_ENTITY, detail="Invalid input data")


# List all tasks
@router.get("/", response_model=dict)
def list_tasks():
    tasks = list(task_collection.find({}))
    tasks = list(map(object_id_str, tasks))
    return {"tasks": tasks}

# Get a specific task by ID
@router.get("/{task_id}", response_model=dict)
def get_task(task_id: str):
    # Check if the provided task_id is a valid ObjectId
    if not ObjectId.is_valid(task_id):
        return JSONResponse(status_code=404, content={"message": "Invalid task ID format"})

    task = task_collection.find_one({"_id": ObjectId(task_id)})

    if not task:
        return JSONResponse(status_code=404, content={"message": "Task not found"})

    task = object_id_str(task)
    return task

# Update a specific task by ID
@router.put("/{task_id}", status_code=status.HTTP_204_NO_CONTENT)
def update_task(task_id: str, task_update: UpdateTaskSchema):
    try:
        object_id = ObjectId(task_id)
    except errors.InvalidId:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Invalid task ID format")
    
    update_data = task_update.dict(exclude_unset=True)

    result = task_collection.update_one({"_id": object_id}, {"$set": update_data})

    if result.matched_count == 0:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="There is no task at that id")
    
    return None

# Delete a specific task by ID
@router.delete("/{task_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_task(task_id: str):
    try:
        object_id = ObjectId(task_id)
    except errors.InvalidId:
        raise HTTPException(status_code=status.HTTP_204_NO_CONTENT, detail="Invalid task ID format")

    task = task_collection.find_one({"_id": object_id})
    
    if task:
        task_collection.delete_one({"_id": object_id})
    return None


# Bulk delete tasks
@router.delete("/", status_code=status.HTTP_204_NO_CONTENT)
def bulk_delete_tasks(tasks: dict = Body(...)): 
    task_ids = [task['id'] for task in tasks['tasks']]  # Extract the list of IDs from the request body

    object_ids = []
    for task_id in task_ids:
        try:
            object_ids.append(ObjectId(task_id))
        except:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f"Invalid task ID format: {task_id}")
  
    result = task_collection.delete_many({"_id": {"$in": object_ids}})
    
    if result.deleted_count == 0:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No tasks found with the provided IDs")
    
    return