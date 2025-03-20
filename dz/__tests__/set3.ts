import { averageSpeed } from "../f2";

test ("average", () => {
    expect(averageSpeed(30, 60)).toBe(40);
});