from pydantic import BaseModel, Field
from datetime import date, datetime
from typing import Optional

class UserBase(BaseModel):
    name: str = Field(..., example="Jane Doe")
    date_of_birth: date = Field(..., example="1990-01-01")

class UserCreate(UserBase):
    pass

class UserUpdate(BaseModel):
    name: Optional[str] = Field(None, example="Jane Doe")
    date_of_birth: Optional[date] = Field(None, example="1990-01-01")

class UserInDB(UserBase):
    id: int = Field(..., example=100)
    created_on: datetime = Field(..., example="2024-09-01T14:00:00Z")

    class Config:
        orm_mode = True

class User(UserInDB):
    pass