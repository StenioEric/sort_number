const quantidade = document.getElementById("quantidade")
const min = document.getElementById("minimo")
const max = document.getElementById("maximo")
const sort = document.getElementById("sortear")
const sortAgain = document.getElementById("sortear-novamente")
const checkbox = document.querySelector(".switch input")
const resultNumbers = document.querySelector(".result-numbers")
const contentForm = document.querySelector(".content-form")
const resultSection = document.querySelector(".result-section")
const btn1 = document.querySelector(".btn-1")
const btn2 = document.querySelector(".btn-2")
const form = document.getElementById("form")


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

    showResult(numbers)

    console.log(numbers)

})

sortAgain.addEventListener("click", (event) => {
    event.preventDefault();

    resetPage()


})

function sortRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showResult(numbers) {

    resultNumbers.innerHTML = "";

    numbers.forEach((number) => {

        contentForm.classList.add("hide")
        
        resultSection.classList.remove("hide")

        btn1.classList.add("hide")
        btn1.classList.remove("btn-1")

        btn2.classList.remove("hide")

        const numberItem = document.createElement("div")
        numberItem.classList.add("result-number")

        const item = document.createElement("p")
        item.textContent = number
        
        numberItem.appendChild(item)
        resultNumbers.appendChild(numberItem)
    });

}

function resetPage() {

    contentForm.classList.remove("hide")
    resultSection.classList.add("hide")

    const numberItems = document.querySelectorAll(".result-number")
    numberItems.forEach((item) => {
        item.remove()
    })

    btn1.classList.remove("hide")
    btn1.classList.add("btn-1")
    btn2.classList.add("hide")


}



