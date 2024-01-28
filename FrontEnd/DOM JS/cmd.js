// /////////        getElementById           /////////////////////

// document.getElementById(mainImg);  // mainImg behave like variable
// document.getElementById("mainImg");

// let imgObj = document.getElementById("mainImg");  // Object return

// console.dir(imgObj)    // object will be on console
// console.dir(document.getElementById("mainImg"));   // same

// imgObj.src

// imgObj.tagName

// imgObj.src="assets/creation_1.png"

// // ........................
// console.dir("description")  // value

// console.dir(document.getElementById("description"));

// /////////        getElementByClassName           /////////////////////

// document.getElementsByClassName("oldImg");  // HTMLCollection return jiske ander har ek index per element store hai
// document.getElementsByClassName("oldImg")[1];
// document.getElementsByClassName("asdf");  // return empty collection


// /////////        getElementByTagName           /////////////////////

// document.getElementsByTagName("p");
// document.getElementsByTagName("p")][1].innerText = "abc";

// see in app.js

 
// ///////////////         DOM mainpulation       /////////////////////////// 

// Enhi ko DOM Manipulation bolte hai kyuki hamne HTML element ko manipute karna start kar diya hai

// let para = document.querySelector('p');  
// para  // value     
// console.dir(para)  // print para obj  // all property come

// para.innerText;  // print value
// para.textContent;
// para.innerHTML;

// para.innerText="abc";
// para.innerText="Hi I am peter parkder";
// para.innerText="Hi I am <b>peter parkder</b>";   // innerText understand all thing "text"
// para.innerHTML="Hi I am <b>peter parkder</b>";  // in this case "tag" actualy recognize by HTML

// let heading = document.querySelector('h1');      
// heading  // value      

// heading.innerHTML = "<u>Spider Man</u>"; //both are same but here we have write "Spider Man"
// heading.innerHTML = `<u>${heading.innerText}</u>`;  //use backtickes  // we can as a variable  // here we are passing "variable" to underline "tag"


// ///////////////         Mainpulating Attributes       ///////////////////////////

// let img = documnet.querySelector('img'); 
// img.getAttribute('id');  
// img.setAttribute('id', 'spidermanImg');     //change id           
// img  
// img.setAttribute('src',"assets/creation_3.jpeg");    // changing source

// img.getAttribute('class');  // give null
// img.setAttribute('class','images'); // set class
// img.getAttribute('class');  //abh image object ko ek class mil gayi hai  // print class


// ///////////////         Mainpulating style       ///////////////////////////
// using style property

// let img = document.querySelector('img');  
// console.dir(img); 
// img.style 

// let heading = document.querySelector('h1'); 
// heading.style; 
// heading.style.color='green'; 
// hading.style.backgroundColor = 'yellow';

// see in app.js also


// let box = document.querySelector('.box');
// box.style;    // only access inline  // can not see style of external css and can not change


// ///////////////         Mainpulating style       ///////////////////////////
// using classList

// let img = document.queryselector('img'); 
// img.classList; 
// let heading = document.queryselector('h1'); 
// heading.classList; 
// heading.classList.add("green"); 
// heading.classList.add("underline");  // for adding multiple class we classList
// heading.classList;
// heading.classList.remove('green')
// heading.setAttribute('class','green');  // all value of old classes reset to a single class value "green" //  underline class ki value remove ho gayi // that's why we not use setAttribut // setAttribute me ek time me ek hi class ke value ho sakti hai

// heading.classList;
// heading.classList.contains("underline");
// heading.classList.contains("green");

// heading.classList;
// heading.classList.toggle("green");
// heading.classList;
// heading.classList.toggle("green");
// heading.classList;


// ///////////////         Navigation       ///////////////////////////

// let h4 = document.queryselector('h4'); 
// h4.parentElement 
// h4.children 
// let box = document.querySelector('box'); 
// box.children; 
// box.childeElementCount;  

// let img = document.queryselector('img'); 
// img.previousElementSibling;
// img.previousElementSibling.style;
// img.previousElementSibling.style.color = "green";


// ///////////////         Adding Element       ///////////////////////////

let newp = document.createElement('p'); 
// console.dir(newP); 
// newP.innerText="Hi I am a new p"; 
// console.dir(newP);

// let body = documen.querySelector('body'); 
// body.appendChild(newP); 
// let box = document.querySelector('.box'); 
// box.appendChild(newP);  // it will be single element, not any become copy // newP ek single element hai that's why it insert only at one place  // now "newP" will remove from body and append in "box"
