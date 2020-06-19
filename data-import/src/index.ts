import { MongoClient as mongodb } from "mongodb";

import { dropAndCreateCollection } from "./drop-and-create-collection";
import { getCsvPaths } from "./get-csv-paths";
import { parseCSV } from "./parse-csv";

const MONGO_DB = process.env.MONGO_DB;
const MONGO_HOST = process.env.MONGO_HOST || "localhost";
const MONGO_PORT = process.env.MONGO_PORT || "27017";

(async () => {
  let client: mongodb | undefined;

  try {
    if (!MONGO_DB) {
      throw Error("'MONGO_DB' must be supplied.");
    }

    // Get all of the absolute paths csv files in the ./data/csv directory.
    const paths = await getCsvPaths("./data/csv");

    // Parse the csvs into json objects
    const collections = await Promise.all(paths.map(parseCSV));

    // Create mongo client
    if (process.env.NODE_ENV === "production") {
      client = await mongodb.connect(`${process.env.MONGODB_URI}`, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
    } else {
      client = await mongodb.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}`, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
    }

    // Drop all matching collections and recreate them with data from csv files
    console.time("Duration");

    await Promise.all(
      collections.map((collection) =>
        dropAndCreateCollection(client!.db(MONGO_DB), collection),
      ),
    ).then(() => console.timeEnd("Duration"));

    console.info("\nSuccessfully imported data.");
  } catch (error) {
    console.error("\nFailed to import all data.", error);
  } finally {
    client?.close();
  }
})();
