const start1 = 5;
const end1 = 5;
const expected1 = [5];

const start2 = 5;
const end2 = 6;
const expected2 = [5, 6];

const start3 = 10;
const end3 = 3;
const expected3 = [10, 11, 12, 1, 2, 3];

const start4 = 12;
const end4 = 12;
const expected4 = [12];

const start5 = 12;
const end5 = 2;
const expected5 = [12, 1, 2];

const start6 = -1;
const end6 = 4;
const expected6 = [];

const start7 = -1;
const end7 = 15;
const expected7 = [];

const start8 = 5;
const end8 = 15;
const expected8 = [];

/**
 * Gets all the months for the given inclusive range.
 * @param {number} start Start month.
 * @param {number} end End month.
 * @returns {number[]} Start to end month range inclusive.
 */
function monthRange(start, end) {
    // build array with all legal values
    const range = [];
    for(let i=1; i<=12; i++){
        range.push(i);
    }
    
    // if illegal value found, return empty array
    if(!range.includes(start) || !range.includes(end)){
        return [];
    }
    
    // add months one at a time; stop when we hit end (this loop won't add end)
    let i = start, output = [];
    while(i !== end){
        output.push(i);
        if(++i > 12) i = 1;
    }
    output.push(end); // the loop didn't add end, so push it here
    return output;
}

console.log(monthRange(start3,end3))