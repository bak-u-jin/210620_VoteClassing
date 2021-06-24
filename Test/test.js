import SetTimeBtn from "../Components/Create/SetTimeBtn";
let temp;

describe("simple test", () => {
  beforeEach(() => {
  });
  
  afterEach(() => {
    temp = 0;
  });
  
  test("1 is 1", () => {
      console.log("alert work");
    }
    const testResult = SetTimeBtn();
    expect(testResult).toBe(-1);
  });
});
