/**
 * 
 * @param {string} text - The text you want typewriter effect for
 * @param {number} at - pass as zero, this is used internally to eventually return from the method
 * @param {string} element - The element, whose text will be modified to fit in the typewriter effect
 */
function typewriter(text, at, element) {
    if (at == text.length) {
        return
    }

    document.getElementById(element).innerHTML += text.charAt(at)

    setTimeout(typewriter, 100, text, at + 1, element)
}

function hiClicked() {
    let textToBeTypeWrited = "Hey guys, I am Saurabh Mishra and this is supposed to be my portfolio."
    let elementToBeTypeWrited = "typed"

    let element = document.getElementById(elementToBeTypeWrited)

    if (element.innerHTML !== textToBeTypeWrited) {
        this.typewriter(textToBeTypeWrited, 0, elementToBeTypeWrited)
    }
}

