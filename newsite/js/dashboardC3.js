//即時查詢總人數
const firstSpan = document.querySelector('.sitestatesJs');
//取得字串
const text = firstSpan.textContent;
//取得數字
const result = text.substring(text.length - 4);
// console.log(text)
// console.log(result)

//即時計算當月人數
const arr = [188, 571, 213, 132,518];
const Arrresult = arr.reduce((a, b) => a + b);
// console.log(Arrresult)


//首先把數字PUSH到Arr裡面
// 在修改Chart裡面的內容

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
            ['x', '2023-10-31', '2023-11-30', '2023-12-31', '2024-01-31', '2024-02-29','2024-03-30'],
            ['每月人數', 188, 571, 213, 132, 518,`${result - Arrresult}`],
            ['總數', 188, 759, 912, 1104,1622,result],

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