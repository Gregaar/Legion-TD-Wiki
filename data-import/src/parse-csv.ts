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
        .then((jsonArray) => {
          const parsedJsonArray = jsonArray.map((json) => {
            Object.entries(json).forEach(([key, value]) => {
              if (typeof value !== "string") return;
              if (!value.includes(";")) return;

              // Split on the ';' character and filter out any falsey values
              json[key] = value.split(";").filter(Boolean);
            });

            return json;
          });

          resolve({ name: collectionName, json: parsedJsonArray });
        });
    } catch (error) {
      reject(error);
    }
  });

export type CollectionJSON = { name: string; json: unknown[] };
