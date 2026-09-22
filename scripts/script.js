const quantidade = document.getElementById("quantidade")
const min = document.getElementById("minimo")
const max = document.getElementById("maximo")
const sort = document.getElementById("sortear")

sort.addEventListener("click" , (event) => {
    event.preventDefault();

    let minValeu = min.value 
    let maxValue = max.value
    let quantValue = quantidade.value
    
    const numbers = []
    
    let i = 0
    while (i < quantValue) {
        let result = sortRandom(minValeu, maxValue)
        console.log(result)
        i++
        numbers.push(result)
    }
    
    console.log(numbers)


    
    

})

function sortRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


