const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');
const p = document.querySelector('.nowhere');

navigator.geolocation.watchPosition(data => {
    
    data.coords.speed ? speed.textContent = data.coords.speed : speed.textContent = 0.00;
     
    data.coords.speed ? arrow.style.transform = `rotate(${data.coords.heading}deg)` : p.style.visibility = 'visible';
    
}, err => {
    console.log(err);
});

