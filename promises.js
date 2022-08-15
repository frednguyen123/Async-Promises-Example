/**
 * Example using promises that are nested, since they are nested
 * we have to wait for one promise to resolve before another promise 
 * is executed. This results in confusing and harder to read code.
 * Person 1, 2, 4, 5 run synchronously on the event loop, but person 4
 * runs asynchronously so that it doesn't interupt the line to the movies
 * (aka the event loop).
 */

console.log('person1: shows ticket');
console.log('person2: shows ticket');

// First Promise takes 3 seconds for wife to bring tickets
const promiseWifeBringingTicks = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('ticket');
    }, 3000)
});

// Second Promise gets the popcorn
// This resolves after wife brings tickets.
const getPopcorn = promiseWifeBringingTicks.then((t) => {
    console.log('wife: i have the tickets');
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve, reject) => resolve(`${t} popcorn`));
});

// Third Promise gets the butter for popcorn
// This resolves after getting popcorn
const getButter = getPopcorn.then((t) => {
    console.log('husband: i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: I need butter in my popcorn' );
    return new Promise((resolve, reject) => resolve (`${t} butter`));
});

// Calls the function expression which is a promise
// Step 1: getButter expression needs getPopcorn before .then
// Step 2: getPopcorn expression needs promiseWifeBringingTicks before .then
// Step 3: promiseWifeBringingTicks executes promise and takes 3 seconds to resolve get tickets
// Step 4: getPopcorn can now execute .then which resolves getting the popcorn
// Step 5: getButter can now execute .then which resolves getting the butter
// Step 6: getButter resolving results in results printed to console

getButter.then((t) => console.log(t))

console.log('person4: shows ticket');
console.log('person5: shows ticket');