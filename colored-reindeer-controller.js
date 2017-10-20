// create a function to print the info about each colored Reindeer
// to the DOM using a loop and a DOM element.innerhtml
// Nest code in a function to not polute the global scope with variables

function printColoredReindeers() {
    // Get control of a DOM element and assign to a variable
    let coloredReindeerEl = document.getElementById("colored-reindeer");

    // Assign the output of the factory function to a variable, which will be an array
    let arrayOfColoredReindeers = coloredReindeerBuilder();

        // Loop through array and access content from each ColoredReindeer object
        // and post it to DOM via .innerHTML
        for (let i = 0; i < arrayOfColoredReindeers.length; i++) {
            // Assign the current Colored Reindeer in the array to a variable
            let aColoredReindeer = arrayOfColoredReindeers[i];
            // Access content from current reindeer and post to DOM via .innerHTML
            coloredReindeerEl.innerHTML += `
                <section style='color: ${aColoredReindeer.color}'>${aColoredReindeer.name}</section>
            `
        }

}

// run function to print colored reindeers to DOM
printColoredReindeers();