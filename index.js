let countries = {
  paris: "France",
  london: "United Kingdom",
  newYork: "USA",
  newDelhi: "India",
};
let capitalEl = document.getElementById("capital");

function changecapital() {
  let country = document.getElementById("country");
  country.innerHTML = capitalEl.value;
}
capitalEl.addEventListener("change", changecapital);
