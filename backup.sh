if [ ! -d "./backup" ]; then
    echo 'Create Backup Folder'
    mkdir backups
fi
docker exec jostano-db pg_dump -U dhis -d zess > ./backups/$(echo backup-`date +%Y-%m-%d_%H:%M`.sql)