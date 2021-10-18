const Team = require("../lib/Team");

test("Can instantiate Team instance", () => {
  const t = new Team();
  expect(typeof t).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const name = "Thank You Mr Miner"
})