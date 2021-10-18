

test("when promts are completed a new Team should be initiated", () => {
    const t = new Team();
    expect(typeof t).toBe("object");
  });