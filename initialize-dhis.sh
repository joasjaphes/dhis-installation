docker-compose down
docker-compose up --build -d
docker exec zess-db psql -U dhis -c "CREATE DATABASE zess"
docker container start zess-dhis