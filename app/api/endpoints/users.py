from fastapi import APIRouter, HTTPException
from typing import Dict, Any
from datetime import datetime

router = APIRouter()

# Dummy user data (replace with database query)
users = {
    1: {
        'id': 1,
        'name': 'John Doe',
        'email': 'john.doe@example.com',
        'created_at': datetime.now()
    },
    2: {
        'id': 2,
        'name': 'Jane Smith',
        'email': 'jane.smith@example.com',
        'created_at': datetime.now()
    }
}


@router.get("/{user_id}/profile")
async def get_user_profile(user_id: int) -> Dict[str, Any]:
    """Get user profile by ID.

    Args:
        user_id (int): The ID of the user.

    Returns:
        Dict[str, Any]: User profile data.

    Raises:
        HTTPException: 404 if user is not found.
    """
    user = users.get(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user
