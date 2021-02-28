from requests import Response
from te.config import URL

import requests


def authenticate(password: str) -> Response:

    response = requests.post(URL + "/login", data=password)

    return response