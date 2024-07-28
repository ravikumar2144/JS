// const t = setTimeout(run, 5000);
// function run(){
//     document.getElementById("demo").innerHTML="Hello";
// }

var a = 5;
setInterval(() => {
  document.getElementById("demo").innerHTML = --a + " sec more";
}, 1000);
const t = setTimeout(() => {
  document.getElementById("timeleft").innerHTML = "Time Over!!!";
}, 5000);

function stop() {
  document.getElementById("timeleft").innerHTML = "Completed";
  clearTimeout(t);
}
