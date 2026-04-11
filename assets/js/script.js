const trendingElementId = document.getElementById("trending-carousel")
const watchAgainElementId = document.getElementById("watch-again-carousel")
const newReleasesElementId = document.getElementById("new-releases-carousel")

// trendingElementId.addEventListener("scroll", function (event) {
//   console.log(event.currentTarget.scrollLeft)
// })

const slideInjection = function () {
  for (let i = 0; i < 11; i++) {
    const div = document.createElement("div")
    const img = document.createElement("img")
    div.classList.add("col", "p-0")
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
    div.classList.add("col", "p-0")
    img.classList.add("w-100")
    img.setAttribute("src", `./assets/img/thumbnails/media${i}.jpg`)
    div.appendChild(img)
    watchAgainElementId.appendChild(div)
  }
  //
  //
  //
  for (let i = 23; i < 34; i++) {
    const div = document.createElement("div")
    const img = document.createElement("img")
    div.classList.add("col", "p-0")
    img.classList.add("w-100")
    img.setAttribute("src", `./assets/img/thumbnails/media${i}.jpg`)
    div.appendChild(img)
    newReleasesElementId.appendChild(div)
  }
}
slideInjection()

// xs md 576px
// xs md 576px

// row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-5

const scrollByNumber = 585

const rightMovement = function (event) {
  if (event === 0) {
    trendingElementId.scrollBy(trendingElementId.offsetWidth, 0)
  } else if (event === 1) {
    watchAgainElementId.scrollBy(watchAgainElementId.offsetWidth, 0)
  } else {
    newReleasesElementId.scrollBy(watchAgainElementId.offsetWidth, 0)
  }
}
const leftMovement = function (event) {
  if (event === 0) {
    trendingElementId.scrollBy(-trendingElementId.offsetWidth, 0)
  } else if (event === 1) {
    watchAgainElementId.scrollBy(-watchAgainElementId.offsetWidth, 0)
  } else {
    newReleasesElementId.scrollBy(-watchAgainElementId.offsetWidth, 0)
  }
}
