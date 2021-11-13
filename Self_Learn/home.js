console.log('Hello');
//alert('Hello');
//var age= prompt('How is your age ?');
//document.getElementById('01').innerHTML = 'Hello !' + age;
var num=5;
console.log(num*3);

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if(window.pageYOffset > sticky) {
    header.classList.add("sticky");
  }else {
    header.classList.remove("sticky");
  }
}