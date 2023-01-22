let inputText = document.getElementById("inputText");
let btnOne = document.getElementById("btnOne");
let btnTwo = document.getElementById("btnTwo");
let btnThree = document.getElementById("btnThree");
let btnFour = document.getElementById("btnFour");
let imgContainer = document.getElementById("imgContainer");

// Text
let firstText = document.getElementById("firstText");
let secondText = document.getElementById("secondText");
let thirdText = document.getElementById("thirdText");
let forthText = document.getElementById("forthText");

imgContainer.innerHTML =
  '<img class="rounded-xl md:rounded-3xl w-full md:max-w-[700px] lg:min-w-[1024px]" src="/assest/img/payroll.webp" alt="">';

btnOne.addEventListener("click", () => {
  btnOne.classList.add("bg-white/10");
  btnTwo.classList.remove("bg-white/10");
  btnThree.classList.remove("bg-white/10");
  btnFour.classList.remove("bg-white/10");
  imgContainer.innerHTML =
    '<img class="rounded-xl md:rounded-3xl w-full md:max-w-[700px] lg:min-w-[1024px]" src="/assest/img/payroll.webp" alt="">';
});
btnTwo.addEventListener("click", () => {
  btnOne.classList.remove("bg-white/10");
  btnTwo.classList.add("bg-white/10");
  btnThree.classList.remove("bg-white/10");
  btnFour.classList.remove("bg-white/10");
  imgContainer.innerHTML =
    '<img class="rounded-xl md:rounded-3xl w-full md:max-w-[700px] lg:min-w-[1024px]" src="/assest/img/second.webp" alt="">';
});
btnThree.addEventListener("click", () => {
  btnOne.classList.remove("bg-white/10");
  btnTwo.classList.remove("bg-white/10");
  btnThree.classList.add("bg-white/10");
  btnFour.classList.remove("bg-white/10");
  imgContainer.innerHTML =
    '<img class="rounded-xl md:rounded-3xl w-full md:max-w-[700px] lg:min-w-[1024px]" src="/assest/img/third.webp" alt="">';
});
btnFour.addEventListener("click", () => {
  btnOne.classList.remove("bg-white/10");
  btnTwo.classList.remove("bg-white/10");
  btnThree.classList.remove("bg-white/10");
  btnFour.classList.add("bg-white/10");
  imgContainer.innerHTML =
    '<img class="rounded-xl md:rounded-3xl w-full md:max-w-[700px] lg:min-w-[1024px]" src="/assest/img/forth.webp" alt="">';
});

// third-page

let thirdPageImgContainer = document.getElementById("thirdPageImgContainer");
let reporting = document.getElementById("reporting");
let inventory = document.getElementById("inventory");
let contacts = document.getElementById("contacts");
let reportIcon = document.getElementById("reportIcon");
let inventoryIcon = document.getElementById("inventoryIcon");
let contactIcon = document.getElementById("contactIcon");
let reportText = document.getElementById("reportText");
let inventoryText = document.getElementById("inventoryText");
let contactText = document.getElementById("contactText");

thirdPageImgContainer.innerHTML =
  '<img class="rounded-2xl" src="/assest/img/apple/profit-loss.png" alt="">';

reporting.addEventListener("click", () => {
  thirdPageImgContainer.innerHTML =
    '<img class="rounded-2xl" src="/assest/img/apple/profit-loss.png" alt="">';
  reportIcon.classList.add("bg-blue-500");
  reportIcon.classList.remove("bg-slate-500");
  inventoryIcon.classList.remove("bg-blue-500");
  contactIcon.classList.remove("bg-blue-500");
  inventoryIcon.classList.add("bg-slate-500");
  contactIcon.classList.add("bg-slate-500");

  // text
  reportText.classList.remove("text-slate-700");
  reportText.classList.add("text-blue-500");
  inventoryText.classList.remove("text-blue-500");
  contactText.classList.remove("text-blue-500");
  inventoryText.classList.add("text-slate-700");
  contactText.classList.remove("text-slate-500");
});
inventory.addEventListener("click", () => {
  thirdPageImgContainer.innerHTML =
    '<img class="rounded-2xl" src="/assest/img/apple/inventory.png" alt="">';
  inventoryIcon.classList.add("bg-blue-500");
  inventoryIcon.classList.remove("bg-slate-500");
  reportIcon.classList.remove("bg-blue-500");
  contactIcon.classList.remove("bg-blue-500");
  reportIcon.classList.add("bg-slate-500");
  contactIcon.classList.add("bg-slate-500");

  // text
  inventoryText.classList.remove("text-slate-700");
  inventoryText.classList.add("text-blue-500");
  reportText.classList.remove("text-blue-500");
  contactText.classList.remove("text-blue-500");
  reportText.classList.add("text-slate-700");
  contactText.classList.remove("text-slate-500");
});

contacts.addEventListener("click", () => {
  thirdPageImgContainer.innerHTML =
    '<img class="rounded-2xl" src="/assest/img/apple/contacts.png" alt="">';
  contactIcon.classList.add("bg-blue-500");
  contactIcon.classList.remove("bg-slate-500");
  reportIcon.classList.remove("bg-blue-500");
  inventoryIcon.classList.remove("bg-blue-500");
  reportIcon.classList.add("bg-slate-500");
  inventoryIcon.classList.add("bg-slate-500");

  // text
  contactText.classList.remove("text-slate-700");
  contactText.classList.add("text-blue-500");
  reportText.classList.remove("text-blue-500");
  inventoryText.classList.remove("text-blue-500");
  reportText.classList.add("text-slate-700");
  inventoryText.classList.remove("text-slate-500");
});



