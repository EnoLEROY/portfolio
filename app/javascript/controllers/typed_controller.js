import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"; // You need to import this to use new Typed()

// pour importation
// pin "typed.js", to: "https://ga.jspm.io/npm:typed.js@2.0.16/dist/typed.module.js"

export default class extends Controller {
  static values = {
    text: String,
    loop: Boolean
  }

  connect() {
    console.log(this.textValue)
    console.log(this.loopValue)
    console.log(typeof this.loopValue)

    const decompStrings = this.textValue.split('|')
    new Typed(this.element, {
      strings: decompStrings,
      smartBackspace: true,
      loop: this.loopValue,
      backDelay: 700,
      backSpeed: 30,
      typeSpeed: 30,
      showCursor: false,
      smartBackspace: true
    });
  }
}
