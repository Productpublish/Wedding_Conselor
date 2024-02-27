const scriptURL = 'https://script.google.com/macros/s/AKfycbxls2kQdhbVNR26qNMrTnhQTwcp0nhBAJG2m3A1DrVkIrjEkPo9-GO3ZCmUbYPpXZLgug/exec'
const form = document.forms['submit-to-google-sheet']
const btnkirim = document.querySelector('.kirim');

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
        form.reset();
        console.log('Success!', response)})
    .catch(error => console.error('Error!', error.message))
})
