import { promises as fs } from "fs";
import path from "path";

export const getCsvPaths = async (csvDir: string): Promise<string[]> => {
  const files = await fs.readdir(path.resolve(csvDir));

  return files.filter(isCSV).map(toAbsolutePath(csvDir)).sort();
};

const isCSV = (fileName: string) => path.extname(fileName) === ".csv";

const toAbsolutePath = (dir: string) => (fileName: string) =>
  path.resolve(dir, fileName);
