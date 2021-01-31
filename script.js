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
