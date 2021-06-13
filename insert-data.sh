docker container stop jostano-dhis
docker exec jostano-db psql -U dhis jostano < /db-backups/initial_db.sql
# docker exec -it jostano-db bash
# cd db-backups
# psql -U dhis jostano < initial_db.sql
docker container start jostano-dhis
exit