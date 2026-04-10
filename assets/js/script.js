const carouselElementId = document.getElementById("personal-carousel")

const slideInjection = function () {
  for (let i = 0; i < 11; i++) {
    const div = document.createElement("div")
    const img = document.createElement("img")
    div.classList.add("col")
    img.classList.add("w-100")
    img.setAttribute("src", `./assets/img/thumbnails/media${i}.jpg`)
    div.appendChild(img)
    carouselElementId.appendChild(div)
  }
}
slideInjection()

const scrollByNumber = 560

const rightMovement = function () {
  carouselElementId.scrollBy(scrollByNumber, 0)
}
const leftMovement = function () {
  carouselElementId.scrollBy(-scrollByNumber, 0)
}
