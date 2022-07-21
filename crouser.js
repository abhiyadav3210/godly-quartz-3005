let imagelinks = ["https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658245112/jczdjyod9b8gdujqvbym.jpg", "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658245274/qeg3izrxrngmn1rnhiju.jpg", "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658244913/mloerh9s6w3vjaqfqddv.jpg", "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658244749/flc5yf33kcubwtirrfyd.jpg"]

let leftbtn = document.querySelector("#leftbtn");
let rightbtn = document.querySelector("#rightbtn");
let cimagestate = 0;
let crauser = document.querySelector("#crauser")
rightbtn.addEventListener("click", function() {
    cimagestate++;
    if (cimagestate === imagelinks.length) {
        cimagestate = 0;
    }

    crauser.src = imagelinks[cimagestate]

})

leftbtn.addEventListener("click", function() {
    cimagestate--;
    if (cimagestate < 0) {
        cimagestate = imagelinks.length - 1
    }

    crauser.src = imagelinks[cimagestate]

})