let count = 0
let counter = document.getElementById("counter")
let entries = document.getElementById("entries")



function increment() {
    count += 1
    counter.textContent = count
}
function save() {
    
    entries.textContent += count + " - "
    console.log(count) 
    counter.textContent = 0
}