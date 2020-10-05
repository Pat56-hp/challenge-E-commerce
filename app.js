var i = 0;
var images = ['image/banner01.jpg', 'image/banner07.jpg', 'image/banner03.jpg', 'image/banner08.jpg'];
var times = 2000;

var product_cart1 =  document.getElementById('product-cart1');
var check_button1 = document.getElementById('check-button1');
var product_cart2 =  document.getElementById('product-cart2');
var check_button2 = document.getElementById('check-button2');
var product_cart3 =  document.getElementById('product-cart3');
var check_button3 = document.getElementById('check-button3');
var product_cart4 =  document.getElementById('product-cart4');
var check_button4 = document.getElementById('check-button4');
var product_cart5 =  document.getElementById('product-cart5');
var check_button5 = document.getElementById('check-button5');
var product_cart6 =  document.getElementById('product-cart6');
var check_button6 = document.getElementById('check-button6');

product_cart1.addEventListener('mouseover', afficheButton1);
product_cart2.addEventListener('mouseover', afficheButton2);
product_cart3.addEventListener('mouseover', afficheButton3);
product_cart4.addEventListener('mouseover', afficheButton4);
product_cart5.addEventListener('mouseover', afficheButton5);
product_cart6.addEventListener('mouseover', afficheButton6);

function afficheButton1()
{
    check_button1.style.display = 'block';
}
function afficheButton2()
{
    check_button2.style.display = 'block';
}
function afficheButton3()
{
    check_button3.style.display = 'block';
}
function afficheButton4()
{
    check_button4.style.display = 'block';
}
function afficheButton5()
{
    check_button5.style.display = 'block';
}
function afficheButton6()
{
    check_button6.style.display = 'block';
}
product_cart1.addEventListener('mouseout', cacheButton1);
product_cart2.addEventListener('mouseout', cacheButton2);
product_cart3.addEventListener('mouseout', cacheButton3);
product_cart4.addEventListener('mouseout', cacheButton4);
product_cart5.addEventListener('mouseout', cacheButton5);
product_cart6.addEventListener('mouseout', cacheButton6);
function cacheButton1(){
    check_button1.style.display = 'none';
}
function cacheButton2(){
    check_button2.style.display = 'none';
}
function cacheButton3(){
    check_button3.style.display = 'none';
}
function cacheButton4(){
    check_button4.style.display = 'none';
}
function cacheButton5(){
    check_button5.style.display = 'none';
}
function cacheButton6(){
    check_button6.style.display = 'none';
}

function changeImage(){

    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    }
    else{
        i = 0;
    }
    setTimeout("changeImage()", times);
}


window.onload = changeImage;

