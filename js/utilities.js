/**
 * Common shared functions here
 */

// function getInputFieldValueById() {
//   console.log('will get values by id');
//   const addMoney = document.getElementById('input-add-money').value;
//   return addMoney;
// }

function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  return inputValue;
}