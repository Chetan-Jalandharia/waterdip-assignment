
# Waterdip AI Backend Assignment

This is a FastAPI-based backend project for managing tasks with MongoDB as the database. The project includes task creation, retrieval, updating, deletion, and bulk operations.

## Table of Contents
- [Project Setup](#project-setup)
- [API Documentation](#api-documentation)
  - [Task Creation (Single and Bulk)](#task-creation-single-and-bulk)
  - [Task Retrieval](#task-retrieval)
  - [Task Update](#task-update)
  - [Task Deletion](#task-deletion)
  - [Bulk Task Deletion](#bulk-task-deletion)
- [Input/Output Formats](#inputoutput-formats)

---

## Project Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Chetan-Jalandharia/waterdip-assignment
cd backend
```

### 2. Set up a Virtual Environment
```bash
# On Windows
python -m venv env
env\Scripts\activate

# On macOS/Linux
python3 -m venv env
source env/bin/activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 5. Start the FastAPI Server
```bash
uvicorn main:app --reload
```
The server will be available at `http://127.0.0.1:8000`.


## API Documentation

### Task Creation (Single and Bulk)

- **Endpoint**: `POST /v1/tasks/`
- **Description**: Create a single task or multiple tasks in bulk.
- **Input (Single Task)**:
    ```json
    {
      "title": "Task Title",
      "is_completed": false
    }
    ```
- **Input (Bulk Task)**:
    ```json
    {
      "tasks": [
        {"title": "Task 1", "is_completed": false},
        {"title": "Task 2", "is_completed": true}
      ]
    }
    ```
- **Output**:
    ```json
    {
      "id": "task_id"
    }
    ```
    or
    ```json
    {
      "tasks": [{"id": "task1_id"}, {"id": "task2_id"}]
    }
    ```

### Task Retrieval

- **Endpoint**: `GET /v1/tasks/`
- **Description**: Retrieve all tasks.
- **Output**:
    ```json
    [
      {
        "id": "task_id",
        "title": "Task Title",
        "is_completed": false
      }
    ]
    ```

### Task Update

- **Endpoint**: `PUT /v1/tasks/{task_id}`
- **Description**: Update an existing task.
- **Input**:
    ```json
    {
      "title": "Updated Task Title",
      "is_completed": true
    }
    ```
- **Output**:
    ```json
    {
      "id": "task_id",
      "title": "Updated Task Title",
      "is_completed": true
    }
    ```

### Task Deletion

- **Endpoint**: `DELETE /v1/tasks/{task_id}`
- **Description**: Delete a task by its ID.
- **Output**:
    ```NO CONTENT
    ```

### Bulk Task Deletion

- **Endpoint**: `DELETE /v1/tasks/`
- **Description**: Delete multiple tasks.
- **Input**:
    ```json
    {
      "task_ids": ["task1_id", "task2_id"]
    }
    ```
- **Output**:
    ```NO CONTENT
    ```

## Input/Output Formats
- **Input**: JSON
- **Output**: JSON


## Postman Collection

There is a Postman JSON file included in this project, which contains API requests for the application. You can import this file into Postman to easily test the API endpoints. The Postman collection is located at:

```
 backend/Waterdip Backend.postman_collection.json

```

This collection includes various API requests to demonstrate how to interact with the backend and test the functionality of the endpoints.
