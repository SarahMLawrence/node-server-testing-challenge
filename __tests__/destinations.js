const supertest = require("supertest");
const server = require("../server");

const db = require("../data/config");

//jest hook
beforeEach(async () => {
  // run the seeds programatically before each test to start fresh
  await db.seed.run();
});
afterAll(async () => {
  // close the db connection so the test process doesn't hang or give a warning
  await db.destroy();
});

describe("integration destination testing ", () => {
  it("GET /destinations", async () => {
    const res = await supertest(server).get("/destinations");
    expect(res.statusCode).toBe(200);
    expect(res.type).toBe("application/json");
    // expect(res.body.length).toBeGreaterThanorEqual(4);
    expect(res.body[1].name).toBe("Vienna");
  });
});
