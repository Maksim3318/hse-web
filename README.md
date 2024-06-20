## Quick start

### Dependencies

You'll need:
- `docker`
- `docker-compose`

### Running

1. Create `.env` file with django superuser credentials. Example:

    ```
    DJANGO_SUPERUSER_USERNAME=admin
    DJANGO_SUPERUSER_EMAIL="admin@example.com"
    DJANGO_SUPERUSER_PASSWORD=admin
    ```

2. Run

    ```sh
    docker compose up --build -d
    ```

3. Go to `http://localhost`
