docker-compose down
docker-compose up --build
docker docker exec db psql -U dhis -c "CREATE DATABASE zess"