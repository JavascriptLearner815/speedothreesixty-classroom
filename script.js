// Base classroom website URL
const BASE_URL = "https://javascriptlearner815.github.io/speedothreesixty-classroom/"

// Array of footer links
const FOOTER_LINKS = [
  ["https://classroom.google.com/c/MjAxNjU0ODAyNjY2?cjc=visrdmf", "Join our classroom!"],
  ["https://stackoverflow.com/users/13900902/speedothreesixty", "View information about/contact information about the developer, SpeedoThreeSixty!"],
  ["https://github.com/JavascriptLearner815/speedothreesixty-classroom", "View this resource page's code on GitHub!"],
]

// Number of footer links so far
let footerLinkCount = 0

// Create a class for the backpack element
class Backpack extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super()
    
    // Write element functionality here
    
    // Create a shadow root
    this.attachShadow(
      {
        mode: "open"
      }
    ) // Sets and returns "this.shadowRoot"
    
    // Create the foundation element
    const wrapper = document.createElement("span")
    wrapper.setAttribute("class", "wrapper")
    
    // Create link to backpack's contents from defined link attribute or default link to homepage
    const backpackReference = wrapper.appendChild(document.createElement("a"))
    backpackReference.setAttribute("href", this.hasAttribute("refer") ? this.getAttribute("refer") : "https://javascriptlearner815.github.io/speedothreesixty-classroom/")
    backpackReference.textContent = this.hasAttribute("text-refer") ? this.getAttribute("text-refer") : "??? Backpack"
    
    // Create some CSS to apply to the shadow DOM
    const style = document.createElement("style")
    style.textContent = `
      .wrapper {
        position: relative;
      }

      a {
        font-family: Arial, Helvetica, sans-serif;
        color: darkslateblue;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
      a:active {
        color: darkorchid;
      }
    `
    
    // Attach the created elements to the shadow DOM
    this.shadowRoot.append(style, wrapper)
  }
}

// Define the new element
customElements.define("backpack", Backpack)

// Create a class for header links
class HeaderLink {
  constructor(afterBase, name) {
    const newElement = document.createElement("a")
    newElement.href = `${BASE_URL}${afterBase}`
    newElement.innerText = name
    this.elem = newElement
  }
}

// Add header links
const links = document.querySelector("header nav")
links.appendChild(new HeaderLink("", "Home").elem)
links.appendChild(new HeaderLink("language/", "Language Lessons").elem)
links.appendChild(new HeaderLink("audio/", "Audio Recordings").elem)
links.appendChild(new HeaderLink("copyright/", "Copyright").elem)
links.appendChild(new HeaderLink("tests/", "Tests").elem)
links.appendChild(new HeaderLink("games/", "Games").elem)

// Create a class for footer links
class FooterLink {
  constructor(index) {
    const newContainerElement = document.createElement("p")
    let link = FOOTER_LINKS[index][0]
    let text = FOOTER_LINKS[index][1]
    newContainerElement.innerHTML = `<a id="footerlink${++footerLinkCount}" href="${link}" target="_blank">${text}</a>`
    this.elem = newContainerElement
  }
}

// Add footer links
const links2 = document.querySelector("footer nav")
links2.appendChild(new FooterLink(0).elem)
links2.appendChild(new FooterLink(1).elem)
links2.appendChild(new FooterLink(2).elem)
