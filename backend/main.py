
from fastapi import FastAPI
from routes.route import router as task_router

app = FastAPI()

app.include_router(task_router, prefix="/v1/tasks")

