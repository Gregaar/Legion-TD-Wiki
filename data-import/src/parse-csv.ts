import csvtojson from "csvtojson";
import { createReadStream } from "fs";
import path from "path";

export const parseCSV = async (csvPath: string): Promise<CollectionJSON> =>
  new Promise((resolve, reject) => {
    // This is the filename WITHOUT the file extension.
    const collectionName = path.basename(csvPath, path.extname(csvPath));

    try {
      csvtojson({
        nullObject: true,
        checkType: true,
      })
        .fromStream(createReadStream(csvPath))
        .then((json) => {
          resolve({ name: collectionName, json });
        });
    } catch (error) {
      reject(error);
    }
  });

export type CollectionJSON = { name: string; json: unknown[] };
