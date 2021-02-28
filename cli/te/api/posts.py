from requests import Response
from te.config import URL

import requests


def get_posts(slug: str = None) -> Response:

    if not slug:
        response = requests.get(URL + "/posts")
    else:
        response = requests.get(URL + "/posts/" + slug)
        response.body = [response.json()]

    return response