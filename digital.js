let oldDate = new Date();

var months =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let hours = oldDate.getHours();
let mins = oldDate.getMinutes();
let secs = oldDate.getSeconds();
let year = oldDate.getFullYear();
let month = months[oldDate.getMonth()];
let day = oldDate.getDate();


document.getElementById('date').innerHTML= `${year} : ${month} :${day}`
document.getElementById('input').value = `${hours} : ${mins} :${secs}`
setInterval( function(){
    let newD = new Date();
    document.getElementById('input').value = newD.toLocaleTimeString()
}, 1000);