const clock = document.querySelector("h2#clock");

function sayHello() {
  clock.innerText = new Date().toLocaleTimeString();
}
sayHello();
setInterval(sayHello, 1000);
