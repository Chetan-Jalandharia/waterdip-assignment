
from pymongo import MongoClient

def db_connection():
    client = MongoClient("mongodb://localhost:27017/")
    db = client["taskdb"] 
    return db
