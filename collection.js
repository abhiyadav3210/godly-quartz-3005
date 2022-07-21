let div1 = document.createElement("div")
let div2 = document.createElement("div")
let div3 = document.createElement("div")
let div4 = document.createElement("div")

let img1 = document.createElement("img")
img1.src = "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658337097/bug9usedhjrgoor94vta.jpg"
let heading1 = document.createElement("h1")
heading1.innerText = "10 Cool & Clever Finds"
let para1 = document.createElement("p")
para1.innerText = "Check out these innovative steals"

let img2 = document.createElement("img")
img2.src = "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658337249/lkwj5kt668yhy2npunxi.jpg"
let heading2 = document.createElement("h1")
heading2.innerText = "Team Favorites"
let para2 = document.createElement("p")
para2.innerText = "Check out these innovative steals"

let img3 = document.createElement("img")
img3.src = "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1655332492/xmwmdtjfvyy2mbbre4qo.png"
let heading3 = document.createElement("h1")
heading3.innerText = "Spend Under $100"
let para3 = document.createElement("p")
para3.innerText = "Check out these innovative steals"

let img4 = document.createElement("img")
img4.src = "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1655928312/i0uzp26kdwgeum2inbli.png"
let heading4 = document.createElement("h1")
heading4.innerText = "LGBTQIA+ Creators"
let para4 = document.createElement("p")
para4.innerText = "Check out these innovative steals"


div1.append(img1, heading1, para1)
div2.append(img2, heading2, para2)
div3.append(img3, heading3, para3)
div4.append(img4, heading4, para4)
document.querySelector("#collection").append(div1, div2, div3, div4)