/**
 * How to get a number from an input field
 * 1. create a variable
 * 2. right side document.getElementById('id')
 * 3. .value
 * 4. parseFloat()
 */

document.getElementById('btn-add-money').addEventListener('click', function(event) {
  event.preventDefault();

  // getInputFieldValueById();
  // const addMoney = getInputFieldValueById();
  // console.log('add money value: ', addMoney);

  const addMoney = getInputFieldValueById('input-add-money');
  const pinNumber = getInputFieldValueById('input-pin-number');
  console.log('add money with parameter: ', addMoney, pinNumber);
})