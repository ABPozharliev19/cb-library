export const ADMIN_URL = process.env.PAYLOAD_PUBLIC_SERVER_HOST + "/admin";
export const API_URL = process.env.PAYLOAD_PUBLIC_SERVER_HOST + "/api";

export const COLLECTION_URL = ADMIN_URL + "/collections";

export const AUTH_ENDPOINT = "/oauth2/authorize";
export const CALLBACK_ENDPOINT = "/oauth2/callback";
export const OAUTH_AUTH_URL = process.env.PAYLOAD_PUBLIC_SERVER_HOST + AUTH_ENDPOINT;
export const OAUTH_CALLBACK_URL = process.env.PAYLOAD_PUBLIC_SERVER_HOST + CALLBACK_ENDPOINT;

export const BOOK_API_URL = "https://www.googleapis.com/books/v1/volumes/";

export const USERS_COLLECTION = "users";

export const BOOKS_INDEX = "books";