//即時查詢總人數
const firstSpan = document.querySelector('.sitestatesJs');
//取得字串
const text = firstSpan.textContent;
//取得數字
const result = text.substring(text.length - 4);


//今日訪客
const spans = document.querySelectorAll(".sitestatesJs");
const secondSpan = spans[1];
const secondSpan_txt = secondSpan.textContent;
// const secondSpan_result = secondSpan_txt.substring(text.length - 4);

//線上人數
const online = document.querySelectorAll(".sitestatesJs");
const onlineSpan = online[2];
const onlineSpan_txt = onlineSpan.textContent;
// const onlineSpan_result = onlineSpan_txt.substring(text.length - 4);

//即時計算當月人數
const arr = [188, 571, 213, 132,518,270,255,219,193,70,170,132,84,60,74,63,58,60,55];
const Arrresult = arr.reduce((a, b) => a + b);
month = result - Arrresult

document.getElementById("Total").innerHTML = "累計訪客:"+ result;
// document.getElementById("month").innerHTML = "本月訪客:"+ month;
document.getElementById("Today").innerHTML = secondSpan_txt;
document.getElementById("online").innerHTML = onlineSpan_txt;


// console顯示
console.log(text);
console.log(secondSpan_txt);
console.log(onlineSpan_txt);







//首先把數字PUSH到Arr裡面
// 在修改Chart裡面的內容

var chart = c3.generate({
    size: {
        height: 440,
    },
    padding: {
        top: 30,
        right: 50,
        bottom: 10,
        // left: 100,
    },
    data: {
        x: 'x',
        columns: [
            ['x','2023-10-31', '2023-11-30', '2023-12-31', '2024-01-31', '2024-02-29','2024-03-31','2024-04-30','2024-05-31','2024-06-30','2024-07-31','2024-08-31','2024-09-30','2024-10-31','2024-11-30','2024-12-31','2025-01-31','2025-02-28','2025-03-31','2025-04-30','2025-05-31','2025-06-30'],
            ['瀏覽總數', 188, 759, 912, 1104,1622,1892,2147,2366,2559,2629,2799 ,2931,3015,3075,3149,3212,3270,3330,3385,3430,3474],
        ],
        types: {
            瀏覽總數: 'area-spline',
        },

    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                fit: true,
                format: " %b"
            }
        },

    },
    legend: {
        // position: 'right'
    },
    // tooltip: {
    //     show: false
    // },
    color: {
        pattern: [ '#3C91E6']
    }
});
setTimeout(function () {
    chart.resize();
}, 1);