const trendingElementId = document.getElementById("trending-carousel")
const watchAgainElementId = document.getElementById("watch-again-carousel")

const slideInjection = function () {
  for (let i = 0; i < 11; i++) {
    const div = document.createElement("div")
    const img = document.createElement("img")
    div.classList.add("col")
    img.classList.add("w-100")
    img.setAttribute("src", `./assets/img/thumbnails/media${i}.jpg`)
    div.appendChild(img)
    trendingElementId.appendChild(div)
  }

  //
  //
  //

  for (let i = 11; i < 22; i++) {
    const div = document.createElement("div")
    const img = document.createElement("img")
    div.classList.add("col")
    img.classList.add("w-100")
    img.setAttribute("src", `./assets/img/thumbnails/media${i}.jpg`)
    div.appendChild(img)
    watchAgainElementId.appendChild(div)
  }
}
slideInjection()

const scrollByNumber = 560

const rightMovement = function (event) {
  if (event === 0) {
    trendingElementId.scrollBy(scrollByNumber, 0)
  } else if (event === 1) {
    watchAgainElementId.scrollBy(scrollByNumber, 0)
  }
}
const leftMovement = function (event) {
  if (event === 0) {
    trendingElementId.scrollBy(-scrollByNumber, 0)
  } else if (event === 1) {
    watchAgainElementId.scrollBy(-scrollByNumber, 0)
  }
}
