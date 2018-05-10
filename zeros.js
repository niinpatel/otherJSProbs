/**
 * Returns the number of zeros between 0 and 100.
 * @returns {number}
 */
function zerosOneToHundred() {

    let zeros = 1;

    for(let i = 1; i <= 100; i++){
        if(i%100 === 0){
            zeros += 2;
        }
        else if(i%10 === 0){
            zeros++;
        }
    }

    return zeros;

}

console.log(zerosOneToHundred());