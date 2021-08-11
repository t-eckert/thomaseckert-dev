from lib.auth import check_password, create_token, is_token_valid
from lib.config import JWT_SECRET, SALT, VALID_TIME
from time import time

import hashlib
import jwt


def test_check_password_with_valid():
    # Precheck
    assert SALT is not None

    # Given
    password = "This is a test password"

    hashed_pass = hashlib.pbkdf2_hmac(
        "sha256", password.encode("utf-8"), bytes(SALT, "utf-8"), 100000
    )

    # When
    actual = check_password(password, hashed_pass)

    # Then
    assert actual


def test_check_password_with_invalid():
    # Precheck
    assert SALT is not None

    # Given
    incorrect_password = "This is a bad password"
    actual_password = "This is a test password"

    hashed_pass = hashlib.pbkdf2_hmac(
        "sha256", actual_password.encode("utf-8"), bytes(SALT, "utf-8"), 100000
    )

    # When
    actual = check_password(incorrect_password, hashed_pass)

    # Then
    assert not actual


def test_create_token():
    # Given
    expected = int(time()) + VALID_TIME

    # When
    token = create_token()
    body = jwt.decode(token, JWT_SECRET, algorithms="HS256")
    actual = body["exp"]

    # Then
    assert abs(expected - actual) < 10


def test_is_token_valid_with_bad_signature():
    # Given
    token = jwt.encode({"exp": int(time()) + 3600}, "asdfasdfasdf", algorithm="HS256")

    # When
    actual = is_token_valid(token)

    # Then
    assert not actual


def test_is_token_valid_with_expired():
    # Given
    token = jwt.encode({"exp": 12}, JWT_SECRET, algorithm="HS256")

    # When
    actual = is_token_valid(token)

    # Then
    assert not actual


def test_is_token_valid_with_no_expiration():
    # Given
    token = jwt.encode({}, JWT_SECRET, algorithm="HS256")

    # When
    actual = is_token_valid(token)

    # Then
    assert not actual


def test_create_token_and_is_token_valid_integration():
    # When
    token = create_token()
    actual = is_token_valid(str(token))

    # Then
    assert actual
