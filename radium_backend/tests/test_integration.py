import pytest
from httpx import AsyncClient

@pytest.mark.asyncio
async def test_user_crud():
    async with AsyncClient(base_url="http://localhost:8000") as client:
        # Create a user
        create_response = await client.post("/users", json={
            "name": "Jane Doe",
            "date_of_birth": "1990-01-01"
        })
        assert create_response.status_code == 200
        created_user = create_response.json()
        assert created_user["name"] == "Jane Doe"
        assert "id" in created_user
        user_id = created_user["id"]

        # Get the created user
        get_response = await client.get(f"/users/{user_id}")
        assert get_response.status_code == 200
        # check name and dob
        assert get_response.json()["name"] == "Jane Doe"
        assert get_response.json()["date_of_birth"] == "1990-01-01"


        # Update the user
        update_response = await client.put(f"/users/{user_id}", json={
            "name": "Jane Smith",
            "date_of_birth": "1990-01-02"
        })
        assert update_response.status_code == 200
        updated_user = update_response.json()
        assert updated_user["name"] == "Jane Smith"
        assert updated_user["date_of_birth"] == "1990-01-02"

        # Get all users
        get_all_response = await client.get("/users")
        assert get_all_response.status_code == 200
        users = get_all_response.json()
        assert isinstance(users, list)
        assert any(user["_id"] == user_id for user in users)

        # Delete the user
        delete_response = await client.delete(f"/users/{user_id}")
        assert delete_response.status_code == 200

        # Verify user is deleted
        get_deleted_response = await client.get(f"/users/{user_id}")
        assert get_deleted_response.status_code == 404