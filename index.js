var distance = 0;
var startAltitude = 0;
var endAltitude = 0;
var altitude = 0;
var slope = 0;
var way = 0;
var wayType = 0;
var wayQuality = 0;
var weather = 0;
var wind = 0;

document.getElementById('b_clean').addEventListener('click', function() {
    document.getElementById('p_name').value = '';
    document.getElementById('p_distance').value = '';
    document.getElementById('p_alt_s').value = '';
    document.getElementById('p_alt_e').value = '';
    document.getElementById('p_way').value = 'prosta';
    document.getElementById('p_waytype').value = 'asfalt';
    document.getElementById('p_qual').checked = false;
    document.getElementById('p_weather').value = 'słonecznie';
    document.getElementById('p_wind').value = 'przedni';
});

document.getElementById('b_move').addEventListener('click', function() {
    let pName = document.getElementById('p_name').value;
    document.getElementById('sum_check').textContent = pName;
    distance = parseFloat(document.getElementById('p_distance').value);
    let pDistance = document.getElementById('p_distance').value;
    document.getElementById('sum_distance').textContent = 'Dystans: ' + pDistance + ' km';
    startAltitude = parseInt(document.getElementById('p_alt_s').value);
    let pStartAltitude = document.getElementById('p_alt_s').value;
    document.getElementById('sum_alt_s').textContent = 'Wysokość początkowa: ' + pStartAltitude + ' m n.p.m.';
    endAltitude = parseInt(document.getElementById('p_alt_e').value);
    let pEndAltitude = document.getElementById('p_alt_e').value;
    document.getElementById('sum_alt_e').textContent = 'Wysokość końcowa: ' + pEndAltitude + ' m n.p.m.';
    altitude = endAltitude - startAltitude;
    let pAltitude = endAltitude - startAltitude;
    document.getElementById('sum_alt').textContent = 'Przewyższenie: ' + pAltitude + ' m';
    slope = altitude / (distance * 1000);
    let pSlope = Math.round((altitude / (distance * 1000)) * 100);
    document.getElementById('sum_slope').textContent = 'Średnie nachylenie: ' + pSlope + '%';
    let pWay = document.getElementById('p_way').value;
    switch (pWay) {
        case 'prosta':
            way = 2;
            break;
        case 'z zakrętami':
            way = 1.5;
            break;
        case 'kręta':
            way = 1;
            break;
    }
    document.getElementById('sum_way').textContent = 'Rodzaj drogi: ' + pWay;
    let pWayType= document.getElementById('p_waytype').value;
    switch (pWayType) {
        case 'asfalt':
            wayType = 1;
            break;
        case 'utwardzony żwir':
            wayType = 1.5;
            break;
        case 'żwir':
            wayType = 2.5;
            break;
        case 'bruk':
            wayType = 2;
            break;
        case 'trawa':
            wayType = 2.5;
            break;
        case 'piasek':
            wayType = 3;
            break;
    }
    document.getElementById('sum_waytype').textContent = 'Typ nawierzchni: ' + pWayType;
    let pWayQuality = document.getElementById('p_qual').checked;
    if (pWayQuality === true) {
        wayQuality = 1;
        document.getElementById('sum_wayqual').textContent = 'Stan nawierzchni: dobry';
    } else {
        wayQuality = 1.5;
        document.getElementById('sum_wayqual').textContent = 'Stan nawierzchni: zły';
    }
    let pWeather= document.getElementById('p_weather').value;
    switch (pWeather) {
        case 'słonecznie':
            weather = 2;
            break;
        case 'pełne słońce':
            weather = 2.5;
            break;
        case 'pełne słońce z upałem':
            weather = 3;
            break;
        case 'pochmurno':
            weather = 1;
            break;
        case 'deszcz lub burza':
            weather = 1.5;
            break;
    }
    document.getElementById('sum_weather').textContent = 'Pogoda: ' + pWeather;
        let pWind= document.getElementById('p_wind').value;
    switch (pWind) {
        case 'przedni':
            wind = 1.5;
            break;
        case 'boczny':
            wind = 1.25;
            break;
        case 'tylny':
            wind = 0.9;
            break;
        case 'brak':
            wind = 1;
            break;
    }
    document.getElementById('sum_wind').textContent = 'Wiatr: ' + pWind;
});

document.getElementById('b_check').addEventListener('click', function() {
    var difficultyPoints = Math.round(difficulty());
    document.getElementById('diff-res').textContent = difficultyPoints + ' punktów';
});

/**
 * Ta funkcja liczy stopień trudności podjazdu
 * 
 * Używane dane:
 * @distance - dystans podjazdu (w km)
 * @startAltitude - wysokość początkowa (w m n.p.m.)
 * @endAltitude - wysokość końcowa (w m n.p.m.)
 * @altitude - przewyższenie (w m) (liczone automatycznie na podstawie wysokości początkowej i końcowej)
 * @slope - średnie nachylenie (w %) (liczone automatycznie)
 * @way - typ drogi (prosta, z zakrętami lub kręta)
 * @wayType - nawierzchnia (asfalt, utwardzony żwir, żwir, bruk, trawa lub piasek)
 * @wayQuality - jakość drogi (dobra lub zła)
 * @weather - stan pogody
 * @wind - kierunek wiatru
 */
function difficulty() {
    altitude = endAltitude - startAltitude;
    var difficulty = altitude * distance;
    var ing1 = way * wayType * wayQuality; 
    difficulty *= ing1;
    var ing2 = weather * wind;
    difficulty *= ing2;
    difficulty += difficulty * slope;
    return difficulty;
}