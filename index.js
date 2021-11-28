var distance = 0;
var startAltitude = 0;
var endAltitude = 0;
var altitude = 0;
var way = 0;
var wayType = 0;
var wayQuality = 0;

document.getElementById('b_name').addEventListener('click', function() {
    let pName = document.getElementById('p_name').value;
    document.getElementById('sum_check').textContent = pName;
});

document.getElementById('b_distance').addEventListener('click', function() {
    distance = parseFloat(document.getElementById('p_distance').value);
    let pDistance = document.getElementById('p_distance').value;
    document.getElementById('sum_distance').textContent = 'Dystans: ' + pDistance + ' km';
});

document.getElementById('b_alt_s').addEventListener('click', function() {
    startAltitude = parseInt(document.getElementById('p_alt_s').value);
    let pStartAltitude = document.getElementById('p_alt_s').value;
    document.getElementById('sum_alt_s').textContent = 'Wysokość początkowa: ' + pStartAltitude + ' m n.p.m.';
});

document.getElementById('b_alt_e').addEventListener('click', function() {
    endAltitude = parseInt(document.getElementById('p_alt_e').value);
    let pEndAltitude = document.getElementById('p_alt_e').value;
    document.getElementById('sum_alt_e').textContent = 'Wysokość końcowa: ' + pEndAltitude + ' m n.p.m.';
});

document.getElementById('b_way').addEventListener('click', function() {
    let pWay= document.getElementById('p_way').value;
    switch (pWay) {
        case 'Prosta':
            way = 2;
            break;
        case 'Z zakrętami':
            way = 1.5;
            break;
        case 'Kręta':
            way = 1;
            break;
    }
    document.getElementById('sum_way').textContent = 'Rodzaj drogi: ' + pWay;
});

document.getElementById('b_waytype').addEventListener('click', function() {
    let pWayType= document.getElementById('p_waytype').value;
    switch (pWayType) {
        case 'Asfalt':
            wayType = 1;
            break;
        case 'Utwardzony żwir':
            wayType = 1.5;
            break;
        case 'Żwir':
            wayType = 2.5;
            break;
        case 'Bruk':
            wayType = 2;
            break;
        case 'Trawa':
            wayType = 2.5;
            break;
        case 'Piasek':
            wayType = 3;
            break;
    }
    document.getElementById('sum_waytype').textContent = 'Typ nawierzchni: ' + pWayType;
});