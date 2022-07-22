 let popularsection = [
     "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/hsuak6etlkjhpxog1e1u",
     "https://c0.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/vzowbkoxoq4hn6uaniyw", "https://c0.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/m9frz16vbuzaarduoxcw", "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/n4o1ewux6zcyq8vxzj8t",
     "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/xbe8fhfxafsvjxvw6ydo", "https://c0.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/fxahub4xktndsdoyuquk", "https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/rys8oirdhzlclfakjgmz", "https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/b2wudzlxsazgdegzceak", "https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/svqivngvxps24ezvynuk", "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/uoeabopd85h4hfd1g42p", "https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/utzz6lufmq8ygokfvh8e", "https://c0.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/wqxyxxwvoohw8myiu0pd", "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/sxmefwhoyvwym61r2cgk",
 ]
 let popleftbtn = document.querySelector("#popleftbtn");
 let poprightbtn = document.querySelector("#poprightbtn");
 let imagestate = 0;
 let popimage1 = document.querySelector("#popimg1")
 let popimage2 = document.querySelector("#popimg2")
 let popimage3 = document.querySelector("#popimg3")
 let popimage4 = document.querySelector("#popimg4")

 poprightbtn.addEventListener("click", function() {
     imagestate++;

     if (imagestate === popularsection.length) {
         imagestate = 0;
     }
     popimage1.src = popularsection[imagestate]
     imagestate++;
     if (imagestate === popularsection.length) {
         imagestate = 0;
     }
     popimage2.src = popularsection[imagestate]
     imagestate++;
     if (imagestate === popularsection.length) {
         imagestate = 0;
     }
     popimage3.src = popularsection[imagestate]
     imagestate++;
     if (imagestate === popularsection.length) {
         imagestate = 0;
     }
     popimage4.src = popularsection[imagestate]

 })
 popleftbtn.addEventListener("click", function() {
     imagestate--;
     if (imagestate < 0) {
         imagestate = imagelinks.length - 1
     }

     popimage1.src = popularsection[imagestate]
     imagestate--;
     if (imagestate < 0) {
         imagestate = imagelinks.length - 2
     }
     popimage2.src = popularsection[imagestate]
     imagestate--;
     if (imagestate < 0) {
         imagestate = imagelinks.length - 3
     }
     popimage3.src = popularsection[imagestate]
     imagestate--;
     if (imagestate < 0) {
         imagestate = imagelinks.length - 4
     }
     popimage4.src = popularsection[imagestate]
 })