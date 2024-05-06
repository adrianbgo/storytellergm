import { findInputError } from "./formValidation";

describe("findInputError", () => {
  it("throws error with errors present", () => {
    expect(
      findInputError({ test: { message: "Test Error", type: "test" } }, "test")
    ).toStrictEqual({ error: { message: "Test Error", type: "test" } });
  });
});
