import Unit from "../../../../models/legion/Unit";
import {
  clearDatabase,
  closeDatabase,
  connect,
} from "../../../../test-setup/dbhandler";
import { tuskarrUnit } from "../../../../test-setup/unit";
import { searchByUnitGoldCost } from "../../units";

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

  const mockRequest = (gold: string) => {
    const req: any = {
      params: {
        gold,
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

  it("should return units costing the exact amount of gold specified", async () => {
    const req = mockRequest("20");
    const res = mockResponse();

    await searchByUnitGoldCost(req, res, mockNext);

    expect(res.status).toHaveBeenLastCalledWith(200);
    expect(res.json).toHaveBeenCalled();
  });

  it("should return an error if the amount is less than 10 or more than 450", async () => {
    const req = mockRequest("5");
    const res = mockResponse();

    await searchByUnitGoldCost(req, res, mockNext);

    expect(res.status).toHaveBeenLastCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      error: "Unable to find any units that cost 5 gold.",
    });
  });

  it("should return an error if a unit cannot be found with the specified amount", async () => {
    const req = mockRequest("11");
    const res = mockResponse();

    await searchByUnitGoldCost(req, res, mockNext);

    expect(res.status).toHaveBeenLastCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      error: "Unable to find any units that cost 11 gold.",
    });
  });
});
