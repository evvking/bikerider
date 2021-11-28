var n_name = 'Podjazd';
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
    n_name = document.getElementById('p_name').value;
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

/**
 * Ta funkcja wyświetla stopień trudnosci podjazdu
 * 
 * Kategorie:
 * A1: 0 - 199p
 * A1+: 200 - 399p
 * A2: 400 - 599p
 * A2+: 600 - 799p
 * B1: 800 - 999p
 * B1+: 1000 - 1199p
 * B2: 1200 - 1399p
 * B2+: 1400 - 1599p
 * C1: 1600 - 1799p
 * C1+: 1800 - 1999p
 * C2: 2000 - 2199p
 * C2+: 2200 - 2399p
 * D1: 2400 - 2599p
 * D1+: 2600 - 2799p
 * D2: 2800 - 2999p
 * E: 3000p+
 */
document.getElementById('b_check').addEventListener('click', function() {
    var difficultyPoints = Math.round(difficulty());
    document.getElementById('diff-res').textContent = difficultyPoints + ' punktów';
    var category = '0';

    if (difficultyPoints < 200) {
        category = 'A1';
    } else if (difficultyPoints < 400) {
        category = 'A1+';
    } else if (difficultyPoints < 600) {
        category = 'A2';
    } else if (difficultyPoints < 800) {
        category = 'A2+';
    } else if (difficultyPoints < 1000) {
        category = 'B1';
    } else if (difficultyPoints < 1200) {
        category = 'B1+';
    } else if (difficultyPoints < 1400) {
        category = 'B2';
    } else if (difficultyPoints < 1600) {
        category = 'B2+';
    } else if (difficultyPoints < 1800) {
        category = 'C1';
    } else if (difficultyPoints < 2000) {
        category = 'C1+';
    } else if (difficultyPoints < 2200) {
        category = 'C2';
    } else if (difficultyPoints < 2400) {
        category = 'C2+';
    } else if (difficultyPoints < 2600) {
        category = 'D1';
    } else if (difficultyPoints < 2800) {
        category = 'D1+';
    } else if (difficultyPoints < 3000) {
        category = 'D2';
    } else {
        category = 'E';
    }

    switch (category) {
        case 'A1':
            document.getElementById('diff-cat').textContent = 'Kategoria: A1';
            document.getElementById('diff-des').textContent = 'Bardzo łatwy';
            let descriptionA1 = 'Podjazd bardzo łatwy. Nie wymaga żadnego przygotowania przed wjazdem. Odpowiedni dla wszystkich poziomów zaawansowania.';
            document.getElementById('diff-mes').textContent = descriptionA1;
            document.getElementById('div-result').style.backgroundColor = '#2091c9';
            break;
        case 'A1+':
            document.getElementById('diff-cat').textContent = 'Kategoria: A1+';
            document.getElementById('diff-des').textContent = 'Bardzo łatwy (trudniejszy)';
            let descriptionA1s = 'Podjazd bardzo łatwy, ale nieco trudniejszy. Zalecana jest lekka rozgrzewka przed wjazdem. Odpowiedni dla wszystkich poziomów zaawansowania.';
            document.getElementById('diff-mes').textContent = descriptionA1s;
            document.getElementById('div-result').style.backgroundColor = '#20c996';
            break;
        case 'A2':
            document.getElementById('diff-cat').textContent = 'Kategoria: A2';
            document.getElementById('diff-des').textContent = 'Łatwy';
            let descriptionA2 = 'Podjazd łatwy. Zalecana jest rozgrzewka przed wjazdem. Zalecane minimalne doświadczenie.';
            document.getElementById('diff-mes').textContent = descriptionA2;
            document.getElementById('div-result').style.backgroundColor = '#20c93f';
            break;
        case 'A2+':
            document.getElementById('diff-cat').textContent = 'Kategoria: A2+';
            document.getElementById('diff-des').textContent = 'Łatwy (trudniejszy)';
            let descriptionA2s = 'Podjazd łatwy, ale nieco trudniejszy. Zalecana jest rozgrzewka przed wjazdem. Zalecane minimalnie większe doświadczenie.';
            document.getElementById('diff-mes').textContent = descriptionA2s;
            document.getElementById('div-result').style.backgroundColor = '#88c920';
            break;
        case 'B1':
            document.getElementById('diff-cat').textContent = 'Kategoria: B1';
            document.getElementById('diff-des').textContent = 'Średnio łatwy';
            let descriptionB1 = 'Podjazd o zwiększonym stopniu trudności. Zalecana jest solidna rozgrzewka przed wjazdem. Zalecane co najmniej 2-letnie doświadczenie.';
            document.getElementById('diff-mes').textContent = descriptionB1;
            document.getElementById('div-result').style.backgroundColor = '#d9ff00';
            break;
        case 'B1+':
            document.getElementById('diff-cat').textContent = 'Kategoria: B1+';
            document.getElementById('diff-des').textContent = 'Średnio łatwy (trudniejszy)';
            let descriptionB1s = 'Podjazd o zwiększonym stopniu trudności, dodatkowo utrudniony. Zalecana jest solidna rozgrzewka przed wjazdem. Zalecane co najmniej dobre doświadczenie.';
            document.getElementById('diff-mes').textContent = descriptionB1s;
            document.getElementById('div-result').style.backgroundColor = '#c4d61c';
            break;
        case 'B2':
            document.getElementById('diff-cat').textContent = 'Kategoria: B2';
            document.getElementById('diff-des').textContent = 'Średnio trudny';
            let descriptionB2 = 'Podjazd o bardzo zwiększonym stopniu trudności. Zalecana jest bardzo solidna rozgrzewka przed wjazdem. Zalecane co najmniej dobre doświadczenie.';
            document.getElementById('diff-mes').textContent = descriptionB2;
            document.getElementById('div-result').style.backgroundColor = '#d6ba1c';
            break;
        case 'B2+':
            document.getElementById('diff-cat').textContent = 'Kategoria: B2+';
            document.getElementById('diff-des').textContent = 'Średnio trudny (trudniejszy)';
            let descriptionB2s = 'Podjazd o bardzo zwiększonym stopniu trudności, dodatkowo utrudniony. Zalecana jest bardzo solidna rozgrzewka przed wjazdem. Zalecane co najmniej bardzo dobre doświadczenie.';
            document.getElementById('diff-mes').textContent = descriptionB2s;
            document.getElementById('div-result').style.backgroundColor = '#d69e1c';
            break;
        case 'C1':
            document.getElementById('diff-cat').textContent = 'Kategoria: C1';
            document.getElementById('diff-des').textContent = 'Trudny';
            let descriptionC1 = 'Podjazd trudny. Zalecane jest zaliczenie kilku średnio trudnych podjazdów przed wjazdem. Zalecane co najmniej bardzo dobre doświadczenie.';
            document.getElementById('diff-mes').textContent = descriptionC1;
            document.getElementById('div-result').style.backgroundColor = '#ff5500';
            break;
        case 'C1+':
            document.getElementById('diff-cat').textContent = 'Kategoria: C1+';
            document.getElementById('diff-des').textContent = 'Trudny (zaawansowany)';
            let descriptionC1s = 'Podjazd trudny, z dodatkowymi trudnościami. Zalecane jest zaliczenie kilku średnio trudnych podjazdów o poziomie co najmniej B1+ przed wjazdem. Zalecane co najmniej 5-letnie doświadczenie.';
            document.getElementById('diff-mes').textContent = descriptionC1s;
            document.getElementById('div-result').style.backgroundColor = '#ff0000';
            break;
        case 'C2':
            document.getElementById('diff-cat').textContent = 'Kategoria: C2';
            document.getElementById('diff-des').textContent = 'Bardzo trudny';
            let descriptionC2 = 'Podjazd bardzo trudny. Zalecane jest zaliczenie kilku trudnych podjazdów o poziomie co najmniej C1 przed wjazdem. Zalecane co najmniej 5-letnie doświadczenie.';
            document.getElementById('diff-mes').textContent = descriptionC2;
            document.getElementById('div-result').style.backgroundColor = '#ba0000';
            break;
        case 'C2+':
            document.getElementById('diff-cat').textContent = 'Kategoria: C2+';
            document.getElementById('diff-des').textContent = 'Bardzo trudny (zaawansowany)';
            let descriptionC2s = 'Podjazd bardzo trudny, z dodatkowymi trudnościami. Zalecane jest zaliczenie kilku trudnych podjazdów o poziomie co najmniej C1+ przed wjazdem. Zalecane co najmniej 8-letnie doświadczenie.';
            document.getElementById('diff-mes').textContent = descriptionC2s;
            document.getElementById('div-result').style.backgroundColor = '#920000';
            break;
        case 'D1':
            document.getElementById('diff-cat').textContent = 'Kategoria: D1';
            document.getElementById('diff-des').textContent = 'Ekstremalnie trudny';
            let descriptionD1 = 'Podjazd ekstremalnie trudny. Zalecane jest zaliczenie kilku bardzo trudnych podjazdów o poziomie co najmniej C2 przed wjazdem. Zalecane co najmniej 8-letnie doświadczenie.';
            document.getElementById('diff-mes').textContent = descriptionD1;
            document.getElementById('div-result').style.backgroundColor = '#750000';
            break;
        case 'D1+':
            document.getElementById('diff-cat').textContent = 'Kategoria: D1+';
            document.getElementById('diff-des').textContent = 'Ekstremalnie trudny (zaawansowany)';
            let descriptionD1s = 'Podjazd ekstremalnie trudny, z dodatkowymi trudnościami. Zalecane jest zaliczenie kilku bardzo trudnych podjazdów o poziomie co najmniej C2+ przed wjazdem. Zalecane co najmniej 10-letnie doświadczenie. Oprócz tego, wymagana jest perfekcyjna kondycja aerobowa i anaerobowa, a także niesamowicie wydajne serce.';
            document.getElementById('diff-mes').textContent = descriptionD1s;
            document.getElementById('div-result').style.backgroundColor = '#570000';
            break;
        case 'D2':
            document.getElementById('diff-cat').textContent = 'Kategoria: D2';
            document.getElementById('diff-des').textContent = 'Ekstremalny';
            let descriptionD2 = 'Podjazd ekstremalny. Wjazd zalecany wyłącznie dla zawodowców. Zalecane jest zaliczenie kilku ekstremalnie trudnych podjazdów o poziomie co najmniej D1 przed wjazdem. Zalecane co najmniej 20-letnie doświadczenie. Oprócz tego, wymagana jest niezwykle perfekcyjna kondycja aerobowa i anaerobowa, a także perfekcyjnie wydajne serce, przygotowane na gigantyczny wysiłek.';
            document.getElementById('diff-mes').textContent = descriptionD2;
            document.getElementById('div-result').style.backgroundColor = '#570000';
            break;
        case 'E':
            document.getElementById('diff-cat').textContent = 'Kategoria: E';
            document.getElementById('diff-des').textContent = 'Zabójczy';
            let descriptionE = 'Podjazd zabójczy. Wjeżdzając na podjazd ryzykuje się życiem. Zalecane zastanowienie się, czy na pewno warto. Niezbędne ogromne doświadczenie i wytrzymałość. Oprócz tego, wymagana jest niezwykle perfekcyjna kondycja aerobowa i anaerobowa, a także perfekcyjnie wydajne serce, przygotowane na gigantyczny wysiłek, który może okazać się zabójczy!';
            document.getElementById('diff-mes').textContent = descriptionE;
            document.getElementById('div-result').style.backgroundColor = '#000000';
            break;
    }
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