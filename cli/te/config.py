from pathlib import Path
from typing import Optional

import os

mode: Optional[str] = os.getenv("TE_MODE")

if mode == "production":
    URL: str = "https://thomaseckert.dev/api"
    ROOT_DIR: Path = Path("/home/t_eck/writing")
else:  # Test mode
    URL: str = ""
    ROOT_DIR: Path = Path("/home/t_eck/code/thomaseckert-dev/cli/tests/test-dir/")
