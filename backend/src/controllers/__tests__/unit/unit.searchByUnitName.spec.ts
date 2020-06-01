import {
  clearDatabase,
  closeDatabase,
  connect,
} from "../../../../tests/dbhandler";
import { tuskarrUnit } from "../../../../tests/unit";
import Unit from "../../../models/Unit";
import { searchByUnitName } from "../../units";

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

  const mockRequest = (name: string) => {
    const req: any = {
      params: {
        name,
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

  it("should return the tuskarr unit when params.name is 'tuskarr'", async () => {
    const req = mockRequest("tuSkArR");
    const res = mockResponse();

    await searchByUnitName(req, res, mockNext);

    expect(res.json).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it("should return an error if an invalid unit name is entered", async () => {
    const req = mockRequest("not-a-unit");
    const res = mockResponse();

    await searchByUnitName(req, res, mockNext);

    expect(res.json).toHaveBeenCalledWith({
      error: "Unable to find unit named not-a-unit",
    });
    expect(res.status).toHaveBeenCalledWith(404);
  });
});
