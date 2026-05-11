const model = document.querySelector(".model");
const previews = document.querySelector(".gallery img");
const original = document.querySelector(".full img");
const imgText = document.querySelector(".caption");

previews.forEach(preview => {
   preview.addEventListener("click", () => {
       model.classList.add("open")
   })
})