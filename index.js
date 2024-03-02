hamburger = {
    menuIcon: document.querySelector("#myHamburger"),
    opened:false,
    secretMenu:document.querySelector('.mobile-nav'),
    desktopNav:document.querySelector('body > header:nth-child(1) > nav:nth-child(3)')
}


hamburger.menuState = function(e){
    console.log(e.target.closest('#myHamburger'))
    
    if(e.target.closest('#myHamburger') && !hamburger.opened ){
        e.target.closest('#myHamburger').classList.add('is-active')
        hamburger.secretMenu.classList.add('is-active')
    }
    if(e.target.closest('#myHamburger') && hamburger.opened ){
        e.target.closest('#myHamburger').classList.remove('is-active')
        hamburger.secretMenu.classList.remove('is-active')
    }
    hamburger.opened = !hamburger.opened 
}

document.addEventListener('click', hamburger.menuState)


// function a(s, t, y){
//   switch (s) {
//     case "+":
//         result = t + y;
//         break;
//     case "-":
//         result = t - y;
//         break;
//     case "*":
//         result = t * y;
//         break;
//     case "/":
//         result = t / y;
//         break;
// 			}
// }
// console.time('switch')
// a('+', 5, 3);
// console.timeEnd('switch')



// function a(num1, num2, op){
//     let result;
//     const operators = {
//   '+': (a, b) => a + b,
//   '-': (a, b) => a - b,
//   '/': (a, b) => a / b,
//   '*': (a, b) => a * b,
// };
//     result = operators[op](parseFloat(num1), parseFloat(num2))
//     console.log(result)
//     return result
// }
// console.time('object')
// a('888','999','*')
console.timeEnd('object')
