//即時查詢總人數
const firstSpan = document.querySelector('.sitestatesJs');
const text = firstSpan.textContent;
const result = text.substring(text.length - 4);
// console.log(text)
// console.log(result)

//即時計算當月人數
const arr = [188, 571, 213, 132];
const Arrresult = arr.reduce((a, b) => a + b);
// console.log(Arrresult)




var chart = c3.generate({
    size: {
        height: 380,
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
            ['x', '2023-10-31', '2023-11-30', '2023-12-31', '2024-01-31', '2024-02-29'],
            ['每月人數', 188, 571, 213, 132, `${result - Arrresult}`],
            ['總數', 188, 759, 912, 1104,result],

        ],
        type: 'bar',
        types: {
            總數: 'spline',
        },

    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                fit: true,
                format: " %b %y"
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
        pattern: ['#aec7e8', '#1f77b4']
    }
});
setTimeout(function () {
    chart.resize();
}, 1);