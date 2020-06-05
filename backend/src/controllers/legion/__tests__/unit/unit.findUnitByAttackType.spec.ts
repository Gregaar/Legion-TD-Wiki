import Unit from "../../../../models/legion/Unit";
import {
  clearDatabase,
  closeDatabase,
  connect,
} from "../../../../test-setup/dbhandler";
import { tuskarrSpearmanUnit, tuskarrUnit } from "../../../../test-setup/unit";
import { findUnitByAttackType } from "../../units";

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

  const mockRequest = (attackType: string, builder?: string) => {
    const req: any = {
      query: {
        attackType,
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

  it("should return units with the specified attack type", async () => {
    const req = mockRequest("normal", "any");
    const res = mockResponse();

    await findUnitByAttackType(req, res, mockNext);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalled();
  });

  it("should return units with the specified attack type and builder", async () => {
    const req = mockRequest("normal", "artic");
    const res = mockResponse();

    await findUnitByAttackType(req, res, mockNext);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalled();
  });
});
