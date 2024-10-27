from beanie import Document
from pydantic import BaseModel, Field
from datetime import date, datetime
import uuid

class User(Document):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), alias="_id")
    name: str
    date_of_birth: date
    created_on: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        allow_population_by_field_name = True

class UserCreate(BaseModel):
    name: str
    date_of_birth: date

class UserResponse(BaseModel):
    id: str
    name: str
    date_of_birth: date
    created_on: datetime