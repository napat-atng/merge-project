import { merge } from "../src/merge";

describe("merge()", () => {
    test("basic case: merges three collections correctly", () => {
        const c1 = [1, 3, 5];       // ascending
        const c2 = [6, 4, 2];       // descending
        const c3 = [7, 8, 9];       // ascending
        expect(merge(c1, c2, c3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    test("handles empty arrays", () => {
        expect(merge([], [], [])).toEqual([]);
        expect(merge([1, 2], [], [])).toEqual([1, 2]);
        expect(merge([], [3, 1], [])).toEqual([1, 3]);
        expect(merge([], [], [4, 5])).toEqual([4, 5]);
    });
    test("handles single-element arrays", () => {
        expect(merge([1], [2], [3])).toEqual([1, 2, 3]);
    });
    test("handles duplicate values across collections", () => {
        const c1 = [1, 2, 3];
        const c2 = [3, 2, 1];       // descending → reversed: [1, 2, 3]
        const c3 = [2, 4, 6];
        expect(merge(c1, c2, c3)).toEqual([1, 1, 2, 2, 2, 3, 3, 4, 6]);
    });
    test("handles negative numbers", () => {
        const c1 = [-5, -3, 0];
        const c2 = [4, 2, -1];      // descending
        const c3 = [1, 6, 10];
        expect(merge(c1, c2, c3)).toEqual([-5, -3, -1, 0, 1, 2, 4, 6, 10]);
    });
    test("handles arrays of different lengths", () => {
        const c1 = [1];
        const c2 = [100, 50, 10, 5];  // descending
        const c3 = [3, 7, 20, 30, 60];
        expect(merge(c1, c2, c3)).toEqual([1, 3, 5, 7, 10, 20, 30, 50, 60, 100]);
    });
    test("handles all same values", () => {
        const c1 = [5, 5, 5];
        const c2 = [5, 5];
        const c3 = [5];
        expect(merge(c1, c2, c3)).toEqual([5, 5, 5, 5, 5, 5]);
    });
});