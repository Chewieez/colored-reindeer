// Create a generator function to return (yield) a different color out of the 
// reindeerColors array each time the function is called.
const reindeerColorGenerator = function* () {
    const reindeerColors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]
    
    // setup a counter to use as the index value with the array
    let i = 0;
    // run a loop while the counter is less than the length of the array of colors
    while (i < reindeerColors.length) {
        let currentColor = reindeerColors[i];
        // each time this generator function is called, this line will output the
        // currentColor in the array
        yield currentColor;
        // after this function is called the next time, the function will
        // continue to run the code following the yield statement and the 
        // counter will increment by 1. 
        i++;
    }
}

// assign a new generator function instance to a variable
const reindeerColorFactory = reindeerColorGenerator()

// create a factory function to use to create each colored reindeer. Include 
// a generator function call to apply a distinct color to each reindeer. 
const reindeerBuilder = function(name) {
    // null needs to be used to make sure the newly created coloredReindeer object
    // is not an empty object, nested inside a prototype object. If null is not used,
    // you need to use a longer command to access the data, such as aColoredReindeer.name.value
    return Object.create(null, {
        "name": {
            enumerable: true,
            value: name,
        },
        "color": {
            enumerable: true,
            // use the variable that you assigned the generator function to earlier
            value: reindeerColorFactory.next().value,
        }
   })
}

// create a new coloredReindeer using the factory function
const coloredReindeerBuilder = function () {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]
    const coloredReindeersArray = [];
    
    // Write a for loop that looks at each reindeer
    for (let i = 0; i < reindeer.length; i++) {
        let currentReindeer = reindeer[i];
    
        // Invoke factory function to create reindeer object
        const coloredCurrentReindeer = reindeerBuilder(currentReindeer);
        

        // Put new reindeer object in coloredReindeer array
        coloredReindeersArray.push(coloredCurrentReindeer);
        
    }
    
    // Return coloredReindeer array
    return coloredReindeersArray;
}

