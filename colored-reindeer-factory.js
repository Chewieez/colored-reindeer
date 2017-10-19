const reindeerColorGenerator = function* () {
    const reindeerColors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]
    
    let i = 0;
    while (i < reindeerColors.length) {
        let currentColor = reindeerColors[i];
        yield currentColor;
        i++;
    }
}

const reindeerColorFactory = reindeerColorGenerator()

const reindeerBuilder = function(name) {
    return Object.create(null, {
        "name": {
            enumerable: true,
            value: name,
        },
        "color": {
            enumerable: true,
            value: reindeerColorFactory.next().value,
        }
   })
}


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
    console.log(coloredReindeersArray)
    return coloredReindeersArray;
}

