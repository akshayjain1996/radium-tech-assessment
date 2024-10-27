from fastapi import APIRouter, HTTPException
from app.models.user import User, UserCreate, UserResponse
from app.schemas.user import UserCreate, UserUpdate
from beanie import PydanticObjectId
from typing import List

router = APIRouter()

@router.get("/users", response_model=List[User])
async def get_users():
    return await User.find_all().to_list()

@router.get("/users/{user_id}", response_model=User)
async def get_user(user_id: str):
    user = await User.find_one(User.id == user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.post("/users", response_model=UserResponse, status_code=200)
async def create_user(user: UserCreate):
    new_user = User(
        name=user.name,
        date_of_birth=user.date_of_birth,
    )
    await new_user.insert()
    return UserResponse(
        id=str(new_user.id),
        name=new_user.name,
        date_of_birth=new_user.date_of_birth,
        created_on=new_user.created_on
    )

@router.put("/users/{user_id}", response_model=User)
async def update_user(user_id: str, user_update: UserUpdate):
    user = await User.find_one(User.id == user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    user_data = user_update.dict(exclude_unset=True)
    await user.update({"$set": user_data})
    return user

@router.delete("/users/{user_id}", response_model=dict)
async def delete_user(user_id: str):
    user = await User.find_one(User.id == user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    await user.delete()
    return {"message": "User deleted successfully"}