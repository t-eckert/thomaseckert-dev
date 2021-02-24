import os
import pytest


@pytest.fixture(scope="session", autouse=True)
def set_env():
    # Automatically set the TE_MODE environment variable to test before running tests

    os.environ["TE_MODE"] = "test"
