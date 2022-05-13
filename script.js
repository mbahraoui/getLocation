
let map = L.map('map').setView([31.1728205, -7.3362482], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

document.getElementById('myButton').onclick=()=>{
    navigator.geolocation.getCurrentPosition((pos)=>{
        let crd=pos.coords;
        L.marker([crd.latitude,crd.longitude]).addTo(map)
        .bindPopup('You are here')
        .openPopup();
    })
}

