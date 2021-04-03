docker-compose down
docker-compose up --build
docker exec zess-db psql -U dhis -c "CREATE DATABASE zess"