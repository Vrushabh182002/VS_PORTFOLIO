let tablinks = document.getElementsByClassName('links');
let tabcontents = document.getElementsByClassName('contents');

function opentab(tabname){
    for(tl of tablinks){
        tl.classList.remove("active-link")
    }
    for(tc of tabcontents){
        tc.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var menu = document.getElementById("slide");

function openmenu(){
    menu.style.right="0px";
}
function closemenu(){
    menu.style.right="-200px";
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzbiBUaoX-LeaRDHLvn2unwMEGHILhCOC0nETjf_34cMbH1G9xVx2dGtdIFcCpabOS8JQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const send = document.getElementById("recieve");
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        send.innerHTML = "Message Submitted Successfully."
        setTimeout(function(){
            send.innerHTML = ""
        },2000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })