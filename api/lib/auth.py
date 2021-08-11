from lib.config import JWT_SECRET, SALT, VALID_TIME
from time import time

import hashlib
import jwt


def check_password(password: str, hashed_password: bytes) -> bool:

    if not SALT:
        raise ValueError("No salt found")

    given_pass = hashlib.pbkdf2_hmac(
        "sha256",
        password.encode("utf-8"),  # Convert the password to bytes
        bytes(SALT, "utf-8"),
        100000,
    )

    print(given_pass)
    print(hashed_password)

    return given_pass == hashed_password


def create_token() -> bytes:

    if not JWT_SECRET:
        raise ValueError("JWT_SECRET not found")

    expiration = int(time()) + VALID_TIME

    return jwt.encode({"exp": expiration}, JWT_SECRET, algorithm="HS256")


def is_token_valid(token: str) -> bool:
    if not JWT_SECRET:
        return False

    try:
        body = jwt.decode(token, JWT_SECRET, algorithms="HS256")
    except:
        return False

    return body.get("exp") is not None
