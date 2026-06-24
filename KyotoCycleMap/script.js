const map = L.map('map').setView([35.0116, 135.7681], 13);

const blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

const greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

const orangeIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

const violetIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; OpenStreetMap'
    }
).addTo(map);

// 観光スポット
L.marker([35.0135, 135.7727], { icon: blueIcon }).addTo(map).bindPopup(`
<h3>鴨川</h3>
<img src="images/kamogawa.jpg" width="200">
<p>京都で人気のサイクリングコース。</p>
`);

L.marker([35.0170, 135.6710], { icon: blueIcon }).addTo(map).bindPopup(`
<h3>嵐山</h3>
<img src="images/arashiyama.jpg" width="200">
<p>観光とサイクリングを楽しめるスポット。</p>
`);

L.marker([35.0177, 135.7631], { icon: blueIcon }).addTo(map).bindPopup(`
<h3>京都御苑</h3>
<img src="images/gosho.jpg" width="200">
<p>休憩におすすめ。</p>
`);

L.marker([34.9858, 135.7581], { icon: blueIcon }).addTo(map).bindPopup(`
<h3>京都駅</h3>
<p>サイクリングルートの出発地点</p>
`);

// 初期ルート表示
const routeControl = L.Routing.control({
    waypoints: [
        L.latLng(34.9858, 135.7581),
        L.latLng(35.0170, 135.6710)
    ],
    lineOptions: {
        styles: [{
            color: 'red',
            opacity: 0.9,
            weight: 7
        }]
    },
    show: false,
    collapsible: true
}).addTo(map);

const parkingLayer = L.layerGroup().addTo(map);
const repairLayer = L.layerGroup().addTo(map);

// 駐輪場
L.marker([34.98348358377903, 135.76007391342296], { icon: greenIcon }).bindPopup(`
<h3>くるっとパークレンタサイクル京都駅南店</h3>
<p><strong>評価：</strong>4.5 ★（Google Maps参照）</p>
<p><strong>住所：</strong>〒601-8003 京都市南区東九条西山王町31 アバンティB2F</p>
<p>京都駅八条口近くのレンタサイクル・駐輪施設。</p>
<p style="font-size:12px;">※評価はGoogle Mapsの公開情報を参考にしています。</p>
`).addTo(parkingLayer);

L.marker([35.004243821506066, 135.7726401119045], { icon: greenIcon }).bindPopup(`
<h3>京阪四条駐輪場（自転車のみ）</h3>
<p><strong>評価：</strong>3.3 ★（Google Maps参照）</p>
<p><strong>住所：</strong>京都市東山区中之町</p>
<p>四条エリア利用者向けの自転車専用駐輪場。</p>
<p style="font-size:12px;">※評価はGoogle Mapsの公開情報を参考にしています。</p>
`).addTo(parkingLayer);

L.marker([35.01751364257684, 135.76143591492396], { icon: greenIcon }).bindPopup(`
<h3>フルーツ自転車パーク丸太町</h3>
<p><strong>評価：</strong>3.3 ★（Google Maps参照）</p>
<p><strong>住所：</strong>〒604-0886 京都市中京区関東屋町</p>
<p>丸太町エリアにある自転車駐輪場。</p>
<p style="font-size:12px;">※評価はGoogle Mapsの公開情報を参考にしています。</p>
`).addTo(parkingLayer);

L.marker([35.019176858729665, 135.681514593964], { icon: greenIcon }).bindPopup(`
<h3>京都市嵯峨嵐山駅自転車駐車場</h3>
<p><strong>評価：</strong>3.3 ★（Google Maps参照）</p>
<p><strong>住所：</strong>〒616-8373 京都市右京区嵯峨天龍寺広道町20-7</p>
<p>嵐山観光やサイクリングの拠点として利用可能。</p>
<p style="font-size:12px;">※評価はGoogle Mapsの公開情報を参考にしています。</p>
`).addTo(parkingLayer);

// 修理店
L.marker([34.995678564047964, 135.77057636757507], { icon: redIcon }).bindPopup(`
<h3>Cycle Garden</h3>
<p><strong>評価：</strong>4.3 ★（Google Maps参照）</p>
<p><strong>住所：</strong>京都市東山区五条橋東2丁目9</p>
<p>スポーツバイクやツーリング向け自転車を扱う専門店。</p>
<p style="font-size:12px;">※評価はGoogle Mapsの公開情報を参考にしています。</p>
`).addTo(repairLayer);

L.marker([35.00093254955087, 135.73217666065608], { icon: redIcon }).bindPopup(`
<h3>バイチャリ京都西院店</h3>
<p><strong>評価：</strong>4.3 ★（Google Maps参照）</p>
<p><strong>住所：</strong>京都市右京区西院平町11</p>
<p>中古スポーツバイクの販売・買取を行う専門店。</p>
<p style="font-size:12px;">※評価はGoogle Mapsの公開情報を参考にしています。</p>
`).addTo(repairLayer);

L.marker([35.019168495933364, 135.72766736363712], { icon: redIcon }).bindPopup(`
<h3>Cycle Shop Reco 円町店</h3>
<p><strong>評価：</strong>5.0 ★（Google Maps参照）</p>
<p><strong>住所：</strong>京都市中京区西ノ京伯楽町22-11</p>
<p>地域密着型の自転車販売・修理ショップ。</p>
<p style="font-size:12px;">※評価はGoogle Mapsの公開情報を参考にしています。</p>
`).addTo(repairLayer);



// 地名検索 → 自動で座標を取得 → ルート作成
let startMarker = null;
let endMarker = null;

async function searchPlace(placeName) {
    const query = encodeURIComponent(placeName + " 京都市");
    const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${query}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.length === 0) {
        return null;
    }

    return L.latLng(
        parseFloat(data[0].lat),
        parseFloat(data[0].lon)
    );
}

document.getElementById("searchRoute").addEventListener("click", async function () {
    const startName = document.getElementById("start").value.trim();
    const endName = document.getElementById("end").value.trim();

    if (startName === "" || endName === "") {
        alert("出発地と目的地を入力してください。");
        return;
    }

    const startLatLng = await searchPlace(startName);
    const endLatLng = await searchPlace(endName);

    if (startLatLng === null) {
        alert("出発地が見つかりません。");
        return;
    }

    if (endLatLng === null) {
        alert("目的地が見つかりません。");
        return;
    }

    if (startMarker !== null) {
        map.removeLayer(startMarker);
    }

    if (endMarker !== null) {
        map.removeLayer(endMarker);
    }

    startMarker = L.marker(startLatLng)
        .addTo(map)
        .bindPopup("<b>出発地：</b>" + startName)
        .openPopup();

    endMarker = L.marker(endLatLng)
        .addTo(map)
        .bindPopup("<b>目的地：</b>" + endName);

    routeControl.setWaypoints([
        startLatLng,
        endLatLng
    ]);

    map.fitBounds(L.latLngBounds([startLatLng, endLatLng]), {
        padding: [80, 80]
    });
});
// ルートの高低差を計算する
routeControl.on('routesfound', async function (e) {
    const route = e.routes[0];
    const coordinates = route.coordinates;

    document.getElementById("elevation-info").innerHTML =
        "<p>高低差を計算中...</p>";

    const samplePoints = [];
    const step = Math.max(1, Math.floor(coordinates.length / 30));

    for (let i = 0; i < coordinates.length; i += step) {
        samplePoints.push(coordinates[i]);
    }

    const locations = samplePoints
        .map(p => `${p.lat},${p.lng}`)
        .join("|");

    const url =
        `https://api.opentopodata.org/v1/aster30m?locations=${locations}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!data.results) {
            document.getElementById("elevation-info").innerHTML =
                "<p>高低差を取得できませんでした。</p>";
            return;
        }

        const elevations = data.results.map(item => item.elevation);

        let up = 0;
        let down = 0;

        for (let i = 1; i < elevations.length; i++) {
            const diff = elevations[i] - elevations[i - 1];

            if (diff > 0) {
                up += diff;
            } else {
                down += Math.abs(diff);
            }
        }

        const maxElevation = Math.max(...elevations);
        const minElevation = Math.min(...elevations);
        const elevationDiff = maxElevation - minElevation;

        document.getElementById("elevation-info").innerHTML = `
            <p><strong>高低差：</strong>${Math.round(elevationDiff)}m</p>
            <p><strong>上り：</strong>${Math.round(up)}m</p>
            <p><strong>下り：</strong>${Math.round(down)}m</p>
        `;

    } catch (error) {
        console.log(error);
        document.getElementById("elevation-info").innerHTML =
            "<p>高低差を取得できませんでした。</p>";
    }
});