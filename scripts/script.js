const quantidade = document.getElementById("quantidade")
const min = document.getElementById("minimo")
const max = document.getElementById("maximo")
const sort = document.getElementById("sortear")
const checkbox = document.querySelector(".switch input")

sort.addEventListener("click", (event) => {
    event.preventDefault();

    let minValeu = min.value
    let maxValue = max.value
    let quantValue = quantidade.value

    const numbers = []

    let i = 0
    while (i < quantValue) {
        let result = sortRandom(minValeu, maxValue)

        if (checkbox.checked) {

            while (number = numbers.includes(result)) {
                result = sortRandom(minValeu, maxValue)
            }

            numbers.push(result)

        } else {
            numbers.push(result)
        }
        i++
    }

    console.log(numbers)

})

function sortRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


