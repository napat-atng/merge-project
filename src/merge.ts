function reverseArray(arr: number[]): number[] {
    const result: number[] = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}
function mergeTwoSorted(a: number[], b: number[]): number[] {
    const result: number[] = [];
    let i = 0;
    let j = 0;
    while (i < a.length && j < b.length) {
        if (a[i] <= b[j]) {
            result.push(a[i]);
            i++;
        } else {
            result.push(b[j]);
            j++;
        }
    }
    while (i < a.length) {
        result.push(a[i]);
        i++;
    }
    while (j < b.length) {
        result.push(b[j]);
        j++;
    }
    return result;
}
export function merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
): number[] {
    const c2Ascending = reverseArray(collection_2);
    const merged = mergeTwoSorted(collection_1, c2Ascending);
    return mergeTwoSorted(merged, collection_3);
}