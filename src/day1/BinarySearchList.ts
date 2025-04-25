export default function bs_list(haystack: number[], needle: number): boolean {
    let start = 0;
    let end = haystack.length;

    do {
        const mid = Math.floor(start + (end - start) / 2);
        // array with 50 elements
        // (0 + (50 - 0 ) / 2) = 25
        const v = haystack[mid];

        if (v === needle) {
            return true;
        } else if (v > needle) {
            end = mid;
        } else {
            start = mid + 1;
        }
    } while (start < end);

    return false;
}
