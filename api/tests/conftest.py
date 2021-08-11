import os
import pytest
import sys

sys.path.append("../")

from lib.config import DB_CONN

# Set environment variable for testing
@pytest.fixture(scope="session", autouse=True)
def set_environment_variables():
    os.environ["FUNC_ENV"] = "test"


# Set environment variable for testing
@pytest.fixture(scope="session", autouse=True)
def assert_test_db():
    assert DB_CONN == "mongodb://mongoadmin:secret@localhost:27888/?authSource=admin"
