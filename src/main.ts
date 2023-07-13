import "./style.css"
import { whoLikesIt } from "./whoLikesIt.ts"

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="wrapper">
      <a href="https://www.codewars.com/kata/5266876b8f4bf2da9b000362" target="_blank">
        Who likes it?
      </a>
      
      <input />
      
      <p id="result">
  </div>
`

const input = document.querySelector<HTMLInputElement>("input")!
const result = document.querySelector<HTMLParagraphElement>("#result")!

input.addEventListener("change", () => {
  const value = input.value

  if (value === "") {
    result.innerText = ""
    return
  }

  result.innerText = `👍 ${whoLikesIt(value.split(","))}`
})


