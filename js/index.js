// Your code goes here
// game plan : change color of links when hovered; 
// transform the size of text when hovered over ( Paragraphs and some images)
// Add color in sign me up buttons when clicked
//

const links = document.querySelectorAll("a")
console.log(links);
links[0].addEventListener("mouseover", event => event.target.style.color = "orangeRed")
links[1].addEventListener("mouseover", event => event.target.style.transform = "rotate(25deg)")
links[2].addEventListener("mouseover", event => event.target.style.transform = "rotate(45deg)")
links[3].addEventListener("mouseover", event => event.target.style.transform = "rotate(50deg)")





const changeToRed = event => { event.target.style.color = "red"}
const changeToPink = event => {event.target.style.color = "pink"}
const changeToOrangeRed = event => {event.target.style.color = "orangeRed"} 
const buttons = document.querySelectorAll(".btn")
buttons[0].addEventListener("click",changeToRed)
buttons[1].addEventListener("click", changeToPink)
buttons[2].addEventListener("click", changeToOrangeRed)

buttons[0].addEventListener("mouseover", event => event.target.style.backgroundColor = "linen")
buttons[1].addEventListener("mouseover", event => event.target.style.backgroundColor = "slateGrey")
buttons[2].addEventListener("mouseover", event => event.target.style.backgroundColor = "lavenderBlush")

