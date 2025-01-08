"use strict";




const newsEmail = document.getElementById('newsEmail');


function Subscribe() {
    if (!newsEmail.value){
        Swal.fire({
            title: "Oops!",
            text: "You Need to Enter An Email",
            icon: "error"
          });
    } else {
        Swal.fire({
            title: "Subscribed!",
            text: "We Have Received Your Email",
            icon: "success"
          });
    }
}

const fullname = document.getElementById('name')
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const city = document.getElementById('city');
const message = document.getElementById('message');

function Submit() {
    if(!fullname.value || !email.value || !phone.value || !city.value || !message.value){
        Swal.fire({
            title: "Message Received!",
            text: "We Will Get Back You As Soon As Possible!",
            icon: "success"
          });
    }else {
        Swal.fire({
            title: "Oops!",
            text: "You Need to Fill All Fields",
            icon: "error"
          });
    }
  }
  