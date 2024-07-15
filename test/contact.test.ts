import supertest from "supertest";
import { web } from "../src/application/web";
import { ContactTest, UserTest } from "./test.util";

describe("POST /api/contacts", () => {
  beforeEach(async () => {
    await UserTest.create();
  });

  afterEach(async () => {
    await ContactTest.deleteAll();
    await UserTest.delete();
  });

  it("should create new contact", async () => {
    const response = await supertest(web);
  });
});
