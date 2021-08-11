from azure.functions import HttpRequest, HttpResponse
from lib.writings import get_writings_meta
from lib.config import DB_CONN

import logging
import json


def main(request: HttpRequest) -> HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    writings_meta = json.dumps([writing_meta.to_json() for writing_meta in get_writings_meta()])

    return HttpResponse(writings_meta, status_code=200)

