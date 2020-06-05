import Unit from "../../../../models/legion/Unit";
import {
  clearDatabase,
  closeDatabase,
  connect,
} from "../../../../test-setup/dbhandler";
import { tuskarrUnit } from "../../../../test-setup/unit";
import { searchByUnitTier } from "../../units";

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

  const mockRequest = (tier: string) => {
    const req: any = {
      params: {
        tier,
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

  it("should return all units from the tier specified", async () => {
    const req = mockRequest("1");
    const res = mockResponse();

    await searchByUnitTier(req, res, mockNext);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalled();
  });

  it("should return an error if the tier is less than 1 or more than 6", async () => {
    const req = mockRequest("10");
    const res = mockResponse();

    await searchByUnitTier(req, res, mockNext);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      error:
        "Unable to find any units with tier 10. Tiers are numbered 1 through 6.",
    });
  });
});
