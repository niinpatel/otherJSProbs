/**
 * Returns the number of zeros in 0 to n.
 * @returns {number}
 */
function numberOfZeros(n) {

    let zeros = 1;

    let j;
    for (let i = 1; i <= n; i++) {

        j = i;
        while (j !== 0) {
            if (j % 10 === 0) {
                zeros++;
            }
            j = Math.floor(j / 10);
        }

    }

    return zeros;

}

console.log(numberOfZeros(100));  // returns 9

console.log(numberOfZeros(200));  // returns 32

console.log(numberOfZeros(1000)); // returns 189