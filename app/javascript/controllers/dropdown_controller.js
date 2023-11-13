import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dropdown"
export default class extends Controller {
  static targets = ["dropdownContent", "openButton", "closeButton", "active"]
  static values = { open: Boolean }
  static classes = ["opened"]

  connect() {
    if (this.openValue) {
      this.openDropdown()
    } else {
      this.closeDropdown()
    }
    // this.dropdownContentTarget.hidden = true
    // this.closeButtonTarget.hidden = true
    // console.log("hello")
  }

  toggleDropdown() {
    if (this.dropdownContentTarget.hidden == true) {
      this.openDropdown()
    } else {
      this.closeDropdown()
    }
  }

  openDropdown() {
    this.dropdownContentTarget.hidden = false
    try {
    this.openButtonTarget.hidden = true
    this.closeButtonTarget.hidden = false } catch {}
    try {
      // this.activeTarget.classList.add("bg-zinc-400")
      this.activeTarget.classList.add(this.openedClass)
    } catch {}
  }

  closeDropdown() {
    this.dropdownContentTarget.hidden = true
    try {
    this.openButtonTarget.hidden = false
    this.closeButtonTarget.hidden = true } catch {}
    try {
      // this.activeTarget.classList.remove("bg-zinc-400")
      this.activeTarget.classList.remove(this.openedClass)
    } catch {}
  }

}


{/* <div data-dropdown-target="activated" data-action="mouseenter->dropdown#toggleDropdown mouseleave->dropdown#toggleDropdown" data-controller="dropdown" data-dropdown-open-value="false">
  <%= link_to "Deuxieme projet", project_2_path %>
  <div data-dropdown-target="dropdownContent" class="open-dropdown">
    <p>description 2</p>
  </div>
</div> */}


{/* <div data-controller="dropdown" data-dropdown-open-value="false" data-dropdown-opened-class="bg-slate-300">
  <button data-dropdown-target="activated" data-action="click->dropdown#toggleDropdown">
    click to toggle
  </button>

  <div data-dropdown-target="dropdownContent" class="bg-red-500 fixed p-4 rounded-md">
    <h1>HIDDEN_CONTENT</h1>
    regular html
  </div>
</div> */}

{/* <div data-controller="dropdown" data-dropdown-open-value="false" data-dropdown-opened-class="bg-slate-300">
  <div role="button" data-dropdown-target="openButton" data-action="click->dropdown#openDropdown">open ⬇️</div>
  <span role="button" data-dropdown-target="closeButton" data-action="click->dropdown#closeDropdown">close ⬆️</span >

  <div data-dropdown-target="dropdownContent" class="bg-red-500 fixed p-4 rounded-md">
    <h1>HIDDEN_CONTENT</h1>
  </div>
</div> */}
