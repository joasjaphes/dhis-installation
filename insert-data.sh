docker container stop zess-dhis
docker exec zess-db bash
cd db-backups
psql -U dhis zess < zess.sql
docker container start zess-dhis -d