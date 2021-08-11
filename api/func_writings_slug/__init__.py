from azure.functions import HttpResponse, HttpRequest
from lib.writings import get_writing


def main(request: HttpRequest) -> HttpResponse:
    """Handles requests to /writings/{slug}. Fetches the writing matching the given slug."""

    slug = request.route_params["slug"]

    writing = get_writing(slug)

    if writing:
        return HttpResponse(slug)
    return HttpResponse("Not found", status_code=404)
    


