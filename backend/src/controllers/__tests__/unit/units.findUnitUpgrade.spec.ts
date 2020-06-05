import {
  clearDatabase,
  closeDatabase,
  connect,
} from "../../../../tests/dbhandler";
import { tuskarrSpearmanUnit, tuskarrUnit } from "../../../../tests/unit";
import Unit from "../../../models/Unit";
import { findUnitUpgrade } from "../../units";

describe("search by unit name", () => {
  beforeAll(async () => {
    await connect();
  });

  beforeEach(async () => {
    const baseUnit = new Unit(tuskarrUnit);
    const upgradedUnit = new Unit(tuskarrSpearmanUnit);
    await baseUnit.save();
    await upgradedUnit.save();
  });

  afterEach(async () => {
    await clearDatabase();
  });

  afterAll(async () => {
    await closeDatabase();
  });

  const mockRequest = (unit: string) => {
    const req: any = {
      params: {
        unit,
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

  it("should return the upgraded unit from the base unit", async () => {
    const req = mockRequest("tuskarr");
    const res = mockResponse();

    await findUnitUpgrade(req, res, mockNext);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalled();
  });

  it("should return an error if the unit cannot be upgraded", async () => {
    const req = mockRequest("tuskarr spearman");
    const res = mockResponse();

    await findUnitUpgrade(req, res, mockNext);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      error: "Could not find tuskarr spearman's upgraded unit.",
    });
  });
});
