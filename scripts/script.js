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

    // Aqui os valores são mantidos como string para que possa ser realizada a primeira validação. Caso contrário seria 0 e sempre iria pular a primeira validação.
    const minValue = min.value
    const maxValue = max.value
    const quantValue = quantidade.value

    const numbers = []

    if (quantValue === "" || minValue === "" || maxValue === "") {

        alert("Preencha todos os campos!")

    } else {

        // Aqui os valores são passados para número
        const minNumber = Number(minValue)
        const maxNumber = Number(maxValue)
        const quantNumber = Number(quantValue)

        if (quantNumber <= 0 || maxNumber <= minNumber) {

            alert("Preencha os dados do campo corretamente!")

        } else if (checkbox.checked && quantNumber > (maxNumber - minNumber + 1)) {

            alert("A quantidade de números não pode ser maior que o intervalo!")

        } else {

            let i = 0

            while (i < quantNumber) {

                let result = sortRandom(minNumber, maxNumber)

                if (checkbox.checked) {

                    while (numbers.includes(result)) {
                        result = sortRandom(minNumber, maxNumber)
                    }

                }

                numbers.push(result)

                i++
            }

            showResult(numbers)
        }
    }
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

    form.reset()
}