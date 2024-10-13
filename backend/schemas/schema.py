
from pydantic import BaseModel
from typing import List

class TaskSchema(BaseModel):
    title: str
    is_completed: bool = False

class UpdateTaskSchema(BaseModel):
    title: str = None
    is_completed: bool = None

class TaskBulkCreate(BaseModel):
    tasks: List[TaskSchema]