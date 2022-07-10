const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(largeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(largeArray);
let resultsInsert = perf.stop();

// All times
// extraLargeArray: insert: 864.6824ms, append: 3.12ms
// tinyArray: insert: 36.7us, append: 144.3
// smallArray: insert: 48.4us, append: 126.6us
// mediumArray: insert: 195.7us, append: 222.1us
// largeArray: insert: 9.0286ms, append: 653.8

//Paragraph
// From what I can tell from the times I was getting was that each time I changed the array with the tiny array it responded the fastest with the best time and the more I kept going up with the different arrays the time kept getting a little bit slower and when it got back to the large array the insert came back to being a milliseconds insted of how before they were coming back in microseconds.

//extra credit
// What I found when I searched up why do larger function take longer to run in javascript and I got back "The client-side JavaScript functions must not run too long otherwise they will tie up the event loop and the web browser will become unresponsive to the user input."



console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
