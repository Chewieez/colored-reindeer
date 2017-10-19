function printColoredReindeers() {
let coloredReindeerEl = document.getElementById("colored-reindeer");
let arrayOfColoredReindeers = coloredReindeerBuilder();

for (let i = 0; i < arrayOfColoredReindeers.length; i++) {
    let aColoredReindeer = arrayOfColoredReindeers[i];
    
    coloredReindeerEl.innerHTML += `
        <section style='color: ${aColoredReindeer.color.value}'>${aColoredReindeer.name.value}</section>
    `
}

}

printColoredReindeers();