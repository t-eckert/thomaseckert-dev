from azure.functions import HttpRequest, HttpResponse
from lib.auth import check_password, create_token
from lib.config import HASHED_PASS


def main(request: HttpRequest) -> HttpResponse:
    
    password = request.params.get("password")
    if not password:
        return HttpResponse("Forbidden", status_code=403)

    is_password_correct = check_password(password, HASHED_PASS)

    if not is_password_correct:
        return HttpResponse("Forbidden", status_code=403)
    else:
        token = create_token()
        return HttpResponse("Ok", status_code=200, headers={"Authorization": f"bearer {token}"})
