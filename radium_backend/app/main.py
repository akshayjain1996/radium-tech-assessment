from fastapi import FastAPI
from beanie import init_beanie
from app.models.user import User
from app.api.users import router as users_router
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio


MONGODB_URL = os.getenv("MONGODB_URL", "mongodb://mongo:27017/radium_db")
app = FastAPI()


async def connect_to_mongo():
    for i in range(5):  # Try 5 times
        try:
            client = AsyncIOMotorClient(MONGODB_URL)
            await client.server_info()  # This will raise an exception if it can't connect
            return client
        except Exception as e:
            print(f"Failed to connect to MongoDB, retrying in 5 seconds... (Attempt {i+1}/5)")
            await asyncio.sleep(5)
    raise Exception("Failed to connect to MongoDB after 5 attempts")

@app.on_event("startup")
async def startup_event():
    client = await connect_to_mongo()
    await init_beanie(database=client.db_name, document_models=[User])

app.include_router(users_router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)