// This webpage is intended to practice the usage of Event Listeners. This is not intended to represent desired functionality. Simply, I am learning how each event listener functions. 

const body = document.querySelector("body")
body.addEventListener("keydown", event => event.target.style.backgroundColor = "slateGrey")
// Activity for the body tag above

const navigation = document.querySelector(".main-navigation")
navigation.addEventListener("mousedown", event => { event.target.style.backgroundColor ="yellow"})
navigation.addEventListener("mouseup", event => {event.target.style.backgroundColor = "green"})

const links = document.querySelectorAll("a")
console.log(links);
links[0].addEventListener("mouseover", event => {event.target.style.color = "orangeRed"
event.preventDefault()})
links[1].addEventListener("mouseover", event => {event.target.style.transform = "rotate(30deg)"
event.preventDefault()})
links[2].addEventListener("mouseover", event => {event.target.style.transform = "rotate(45deg)" 
event.preventDefault()})
links[3].addEventListener("mouseover", event => {event.target.style.transform = "rotate(50deg)"
event.preventDefault()})

// Activity for anchor tags and navigation above

const intro = document.querySelector(".intro")
intro.addEventListener("mousemove",event => event.target.style.backgroundColor = "yellow")
// Event for introduction (Content under Bus image)

const content = document.querySelector(".content-section")
content.addEventListener("mousemove",event => event.target.style.backgroundColor = "red")
// Section with subheading "Let's Go!"

const inverseContent = document.querySelector(".inverse-content")
inverseContent.addEventListener("mousemove",event => event.target.style.backgroundColor = "pink")
// Section with subheading "Adventure Awaits!"

const contentDestination = document.querySelector(".content-destination")
contentDestination.addEventListener("mousemove",event => event.target.style.backgroundColor = "orange")
// Section with subheading "Pick Your Destination"



const images = document.querySelectorAll("img")
images[0].addEventListener("mousedown", event => event.target.style.transform = "scaleX(.5)")
images[1].addEventListener("mousedown", event => event.target.style.transform = "scaleX(.7)")
images[2].addEventListener("mousedown", event => event.target.style.transform = "scaleY(.7)")
images[3].addEventListener("mousedown", event => event.target.style.transform = "scaleX(.8)")
// Image enhancements above 



const subheadings = document.querySelectorAll("h2")
subheadings[0].addEventListener("dblclick",event => {
    event.target.style.transform = "scaleY(1.7)"
    event.stopImmediatePropagation()
    event.target.style.color = "red"
    event.target.style.fontSize = "4rem"
})
subheadings[1].addEventListener("dblclick",event => {
    event.target.style.transform = "scaleY(1.4)"
    event.target.style.color = "blue"
    event.target.style.fontSize = "6rem"
})
subheadings[2].addEventListener("dblclick",event => {
    event.target.style.transform = "scaleY(2.4)"
    event.target.style.color = "slateGrey"
    event.target.style.fontSize = "2rem"
})
subheadings[3].addEventListener("dblclick",event => {
    event.target.style.transform = "scaleY(2.8)"
    event.target.style.color = "green"
    event.target.style.fontSize = "3rem"
})
// Changes to Subheadings above


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

// All Changes to Buttons above