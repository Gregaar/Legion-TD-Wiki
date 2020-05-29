import { Db } from "mongodb";

import { CollectionJSON } from "./parse-csv";

/**
 * This function will:
 *
 * 1. Attempt to drop any collection that matches the collection to be inserted.
 * 2. Create the collection
 * 3. Insert the json data parsed from csv
 */
export const dropAndCreateCollection = async (
  db: Db,
  collectionJson: CollectionJSON,
): Promise<void> => {
  await db
    .dropCollection(collectionJson.name)
    .catch(() =>
      console.debug(`Collection '${collectionJson.name}' doesn't exist.`),
    );

  const collection = await db.createCollection(collectionJson.name);
  await collection.insertMany(collectionJson.json);

  console.debug(
    `Imported ${collectionJson.json.length} documents into collection '${collectionJson.name}'`,
  );
};
