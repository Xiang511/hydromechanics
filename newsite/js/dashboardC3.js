var chart = c3.generate({
    padding: {
        top: 68,
        right: 50,
        bottom: 10,
        // left: 100,
    },
    data: {
        x: 'x',
        columns: [
            ['x', '2023-10-31', '2023-11-30', '2023-12-31', '2024-01-31', '2024-02-29'],
            ['每月人數', 188, 571, 213, 132, 375],
            ['總數', 188, 759, 912, 1104, 1479],

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