docker-compose down
docker-compose up --build -d
docker exec jostano-db psql -U dhis postgres -c "DROP DATABASE jostano"
docker exec jostano-db psql -U dhis postgres -c "CREATE DATABASE jostano"
docker container start jostano-dhis