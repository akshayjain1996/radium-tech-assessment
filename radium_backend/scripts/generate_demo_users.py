import httpx
from datetime import datetime, timedelta
import random
import asyncio

# API base URL
API_BASE_URL = "http://localhost:8000"

# Sample names
first_names = ["John", "Jane", "Michael", "Emily", "David", "Sarah", "Robert", "Lisa", "William", "Emma"]
last_names = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez"]

def generate_random_date(start_date, end_date):
    time_between_dates = end_date - start_date
    days_between_dates = time_between_dates.days
    random_number_of_days = random.randrange(days_between_dates)
    return start_date + timedelta(days=random_number_of_days)

async def create_demo_user(session):
    full_name = f"{random.choice(first_names)} {random.choice(last_names)}"
    date_of_birth = generate_random_date(datetime(1950, 1, 1), datetime(2000, 12, 31))

    user_data = {
        "name": full_name,
        "date_of_birth": date_of_birth.strftime("%Y-%m-%d")
    }

    try:
        response = await session.post(f"{API_BASE_URL}/users", json=user_data)
        response.raise_for_status()
        print(f"Created user: {full_name}")
        return response.json()
    except httpx.HTTPStatusError as e:
        print(f"HTTP error occurred while creating user {full_name}: {e}")
    except Exception as e:
        print(f"An error occurred while creating user {full_name}: {e}")

async def create_demo_users(num_users=20):
    async with httpx.AsyncClient() as session:
        tasks = [create_demo_user(session) for _ in range(num_users)]
        results = await asyncio.gather(*tasks)
        successful_creations = [result for result in results if result is not None]
        print(f"Successfully created {len(successful_creations)} out of {num_users} demo users.")

async def main():
    await create_demo_users()

if __name__ == "__main__":
    asyncio.run(main())