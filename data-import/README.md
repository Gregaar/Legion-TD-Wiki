# Data import

This project imports data from CSVs into mongodb.

## Import workflow

1. Find all `.csv` files in `./data/csv`
2. Asynchronously read all csvs and parse them to json objects
3. Drop all collections that match a name of a csv file (excluding the .csv extension)
4. Create a collection that matches the name of the csv file (excluding the .csv extension)
5. Inserts all of the objects

## Running an import

By default, an import will try to run against `localhost:27017`.

To trigger a default import:

```bash
MONGO_DB='some-database-name' npm run import
```

To trigger an import on a named mongo instance:

```bash
MONGO_HOST='some-host-name' MONGO_PORT='99999' MONGO_DB='some-database-name' npm run import
```

## Developing locally

You can have nodemon rerun migrations automatically whilst making changes by running `MONGO_DB='my-db' npm run watch`.

