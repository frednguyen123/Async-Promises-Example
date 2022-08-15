
console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
    
    /**
     * three promises happen inside the async function therefore we can use await
     * this function runs asynchronously, therefore we wait for each promise to finish
     * before moving on to the next part inside this function that runs outside of the
     * synchronous event loop.
     */

    const promiseWifeBringingTicks = new Promise ((resolve, reject) => {
        setTimeout(() => resolve('ticket', 3000))});

    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

    const addButter = new Promise((resolve, reject) => resolve(`butter`));

    // waits for this promise to finish before continuing (takes 3 seconds to get tickets)
    // store in variable, use await in async function 
    let ticket = await promiseWifeBringingTicks;

    // print statements only happen when previous await is done executing
    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    
     // waits for this promise to finish before continuing
    let popcorn = await getPopcorn;

    // print statements only happen when previous await is done executing
    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: I need butter in my popcorn' );

     // waits for this promise to finish before continuing
    let butter = await addButter;

    // print statements only happen when previous await is done executing
    console.log(`husband: i got some ${butter} on popcorn`);
    console.log(`husband: anything else darling?`);
    console.log(`wife: lets go, we are getting late`);
    console.log(`husband: thank you for the reminder`);

    return ticket;
};

/**
 * calls the async function but needs a .then, returns statement with ticket variable
 * this function runs asynchronously therefore the rest of the code can continue to run while
 * we get data from this function, then printing it when we're done.
 */
preMovie().then((m) => console.log(`person3: shows${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');
