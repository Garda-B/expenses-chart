fetch("data.json")
.then(response => response.json())
.then(response => {
console.log(response);

const amounts = response.map((day) => day.amount)
const date = new Date
const today = date.getDay()

for (let i =0 ; i<7; i++)
{document.getElementsByClassName("days")[i].setAttribute("style", `height: ${amounts[i]/10}em`)
document.getElementsByClassName("figureofday")[i].innerHTML = `$${amounts[i]}`
document.getElementsByClassName("days")[today-1].classList.add("today")}
            })