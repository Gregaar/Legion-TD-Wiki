import {
  clearDatabase,
  closeDatabase,
  connect,
} from "../../../../tests/dbhandler";
import { tuskarrUnit } from "../../../../tests/unit";
import Unit from "../../../models/Unit";
import { searchByUnitGoldCostRange } from "../../units";

describe("search by unit name", () => {
  beforeAll(async () => {
    await connect();
  });

  beforeEach(async () => {
    const testUnit = new Unit(tuskarrUnit);
    await testUnit.save();
  });

  afterEach(async () => {
    await clearDatabase();
  });

  afterAll(async () => {
    await closeDatabase();
  });

  const mockRequest = (minGold: string, maxGold: string, builder?: string) => {
    const req: any = {
      query: {
        minGold,
        maxGold,
        builder,
      },
    };
    return req;
  };

  const mockResponse = () => {
    const res: any = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  const mockNext = jest.fn();

  it("should return units within the gold range specified", async () => {
    const req = mockRequest("0", "100", "any");
    const res = mockResponse();

    await searchByUnitGoldCostRange(req, res, mockNext);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalled();
  });

  it("should return units within the gold range and builder specified", async () => {
    const req = mockRequest("5", "20", "artic");
    const res = mockResponse();

    await searchByUnitGoldCostRange(req, res, mockNext);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalled();
  });

  it("should return an error if no units are found within the gold range", async () => {
    const req = mockRequest("0", "1", "any");
    const res = mockResponse();

    await searchByUnitGoldCostRange(req, res, mockNext);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      error: "Unable to find any units with gold cost between 0 - 1 gold.",
    });
  });

  it("should return an error if no units are found within the gold range for a specified builder", async () => {
    const req = mockRequest("0", "1", "artic");
    const res = mockResponse();

    await searchByUnitGoldCostRange(req, res, mockNext);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      error:
        "Unable to find any units with gold cost between 0 - 1 gold for the artic builder.",
    });
  });

  it("should return an error any query requirements are missing", async () => {
    const req = mockRequest("0", "1");
    const res = mockResponse();

    await searchByUnitGoldCostRange(req, res, mockNext);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      error: "Unable to find any units with gold cost between 0 - 1 gold.",
    });
  });
});
