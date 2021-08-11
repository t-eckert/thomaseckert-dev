from dotenv import load_dotenv
from pathlib import Path
from typing import Union

import os

# Load environment variables from a file at `../.env`
env_path = Path(__file__).parent.parent / ".env"
load_dotenv(env_path)




FUNC_ENV = os.getenv("FUNC_ENV")
VALID_TIME = 3600
JWT_SECRET = os.environ["JWT_SECRET"]
HASHED_PASS = os.environb[b"HASHED_PASS"].decode("unicode-escape").encode("latin-1")
SALT = os.environ["SALT"]

if FUNC_ENV == "production":
    DB_CONN = os.getenv("DB_CONN")
elif FUNC_ENV == "development":
    DB_CONN = "mongodb://mongoadmin:secret@localhost:27889/?authSource=admin"
else:  # Test
    DB_CONN = "mongodb://mongoadmin:secret@localhost:27888/?authSource=admin"
