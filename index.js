/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

document.addEventListener("DOMContentLoaded", function () {
  let convertBtn = document.querySelector(".btn");
  let unitInputEl = document.querySelector("#unit-input");
  let lengthEl = document.querySelector("#converted-length");
  let volumeEl = document.querySelector("#converted-volume");
  let massEl = document.querySelector("#converted-mass");

  unitInputEl.value = "";
  unitInputEl.addEventListener("input", function () {
    let unit = unitInputEl.value;
    if (unit.trim === "") {
      convertBtn.disabled = true;
    } else {
      convertBtn.disabled = false;
    }
  });

  convertBtn.addEventListener("click", function (unit) {
    unit = parseInt(unitInputEl.value);
    console.log(typeof unit);
    console.log(unit);
    let lengthInMeters = (unit / 3.281).toFixed(3);
    let lengthInFeet = (unit * 3.281).toFixed(3);
    lengthEl.innerHTML = `${unit} meters = ${lengthInFeet} feet | ${unit} feet = ${lengthInMeters} meters `;
    let volumeInGallons = (unit * 0.264).toFixed(3);
    let volumeInLiters = (unit / 0.264).toFixed(3);
    volumeEl.innerHTML = `${unit} liters = ${volumeInGallons} gallons | ${unit} gallons = ${volumeInLiters} liters`;
    let massInKgs = (unit / 2.204).toFixed(3);
    let massInPounds = (unit * 2.204).toFixed(3);
    massEl.innerHTML = `${unit} kilos = ${massInPounds} pounds | ${unit} pounds = ${massInKgs} kilos`;
  });
});
