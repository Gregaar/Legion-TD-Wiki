import Unit from "../../../../models/legion/Unit";
import {
  clearDatabase,
  closeDatabase,
  connect,
} from "../../../../test-setup/dbhandler";
import { tuskarrUnit } from "../../../../test-setup/unit";
import { searchByUnitBuilder } from "../../units";

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

  const mockRequest = (builder: string) => {
    const req: any = {
      params: {
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

  it("should return all units created by the builder specified", async () => {
    const req = mockRequest("ArTIC");
    const res = mockResponse();

    await searchByUnitBuilder(req, res, mockNext);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalled();
  });

  it("should return an error if an invalid builder name is entered", async () => {
    const req = mockRequest("not-a-builder");
    const res = mockResponse();

    await searchByUnitBuilder(req, res, mockNext);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      error: "Unable to find units from the not-a-builder builder",
    });
  });
});
