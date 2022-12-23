console.clear();
var clicked=null;

var btns=document.getElementsByClassName('rate');
Array.from(btns).forEach(btn => {
    btn.addEventListener('click', (event) => {
    clicked = btn.id;
    if (document.querySelector("button.selected")){
        document.querySelector("button.selected").classList.remove('selected');
    }
    document.getElementById(clicked).classList.add('selected');
  });
})

var onSubmit=document.querySelector('.submit');
onSubmit.addEventListener('click',  (event) => {
    if (clicked){
    document.getElementById("ratingstate").className = document.getElementById("ratingstate").className.replace('rating_show','rating_hide');
    document.getElementById("thankingstate").className =document.getElementById("thankingstate").className.replace('thankyou_hide','thankyou_show');
    document.getElementById('ratinginfo').innerHTML = "<span>You selected " + clicked.toString() + " out of 5";
    }
}, clicked)