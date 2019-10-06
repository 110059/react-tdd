import { add } from './maths';

describe("test maths", ()=> {
  it("test add", () => {
    expect(add(11, 22)).toEqual(33);
  })
})
