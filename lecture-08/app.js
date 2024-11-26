// DOM 

// 

// const root = document.querySelector('.rootElement');

// queryselctor will return single element
// const root = document.querySelector('.rootElement') // it will grab first element which have class name rootElement
// console.log(root);

// querySelctorAll 
// const root = document.querySelectorAll('.rootElement') // it will grab first element which have class name rootElement
// it will return all the elemnent in collection which have same class 

// html forms collection selection

// const form = document.forms['testForm']

// // console.log( form);
// let formSinleElement = []
// for (let i = 0; i <= form.length; i++) {
//     formSinleElement.push(form[i])
// }

// formSinleElement.forEach((elem) => {
//    if(elem==undefined){
//     return
//    }
//    console.log(elem.value);
// })

// getting form data using queryselector


// let form  = document.forms['form']

// let formElement = undefined;
// for(let i = 0; i <= form.length; i++){

//     formElement = form[i]
//     if(formElement==undefined){
//         continue
//     }
//     console.log(formElement.value);
// }


// let userName = document.querySelector('#userName')
// let color  = document.querySelector('#color')
// console.log(userName.value);
// console.log(color.value);



// document 

// if(document.location.pathname=='/lecture-08/'){
//     setTimeout(() => {
//         document.location.href = "/lecture-08/about.html"
//     }, 1000);
// }

// we have seen widnow object 
// console.log(window);

// we have seen document object 

// console.log(document)

// console.log(document.location.protocol);
// console.log(document.location.host);

// if(document.location.protocol=='http:'){
//     setTimeout(() => {
//         document.location.href = "https://epicmarketo.com"
//     }, 2000);
// }else{
//     alert('Its a secqure website')
// }

// how to set attributes on any element

// const root = document.querySelector('#root')

// root.setAttribute('class', 'rootElement')
// 
// console.log(root);


// setting attribute for image

// const image = document.querySelector('#image')
// image.src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// image.style.width = '300px'


// print date and time in js


// const root = document.querySelector('#root')
// root.innerText = Date()

// form validation

// selecting form

// let form = document.forms['form']
// let root = document.querySelector('#root')
// function validateForm (e) {
//     e.preventDefault()
//     let password = form['password'].value;
//     let userName = form['userName'].value.trim()
//     if(userName === "" && password === ""){
//         // alert('Required Filed');
//         root.innerHTML = "<p>Required Field </p>"
//         root.style.color = 'red';
//     }else{
//        root.innerHTML = `<p> ${userName} and Password is ${password}  </p>`;
//     }
// }

// const submit = document.querySelector('#submit')


// DOM Events





// type conversion


// json

// regurlar expression

// js Modules



// async



// bom

// api

// ajax