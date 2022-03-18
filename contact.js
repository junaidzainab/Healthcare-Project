let input = document.querySelector("#name")
let email = document.querySelector("#email")
let txt = document.querySelector("#text")
let btn = document.querySelector('#btn')
let mydata = {}

btn.addEventListener('click', (e) => {
    e.preventDefault()
    let nam = input.value;
    let ema = email.value;
    let mes = txt.value;
    if (nam === '' && ema === '' && mes === '') {
        alert("Kindly Enter Something")
    } else {
        mydata.Name = nam;
        mydata.Email = ema;
        mydata.Message = mes;
        // console.log(mydata)
        sessionStorage.setItem('mylist', JSON.stringify(mydata));
        alert(`Hello ${nam}, your message has been submitted, we will get back to you shortly. Thank you`)
        
    }
})