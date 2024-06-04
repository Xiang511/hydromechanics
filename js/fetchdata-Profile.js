window.onload = function () {

    fetch('json/profile.json')
        .then(res => {
            return res.json();
        }).then(result => {
            console.log(result);

            var html = '<table id="myTable" class="cell-border hover">';
            html += '<thead>';
            html += '<tr>';
            html += '<th>Rank</th>';
            html += '<th>IGN</th>';
            html += '<th>經典挑戰</th>';
            html += '<th>終極挑戰</th>';
            html += '<th>遊玩時間</th>';
            html += '<th>表情收集</th>';
            html += '<th>戰旗收集</th>';
            html += '<th>星光點數</th>';
            html += '<th>全部經驗值</th>';
            html += '</tr>';
            html += '</thead>';
            html += '<tbody>';
            for (var i = 0; i < result.length; i++) {//
                html += '<tr>';//
                for (j = 0; j < result[i].data.length; j++) {
                    html += '<td>' + result[i].data[j] + '</td>';
                }
                html += '</tr>';
            }
            html += '</tbody>';
            html += "</table>";
            document.getElementById("order_status").innerHTML = html;

            let table = new DataTable('#myTable', {
                order: [[2, 'dsc']],
                info: false,
                // paging: false
                processing: true,
                // 表格拖拉
                // colReorder: true,
                // colReorder: {
                //     fixedColumnsLeft: 1
                // },
                columnDefs: [{ orderable: false, targets: 0 }
                    // { "width": "25%", "targets": 0 },
                    // { "width": "5   %", "targets": [1,2,3,4] }
                ]
            });
            table.on('order.dt search.dt', function () {
                table.column(0, { search: 'applied', order: 'applied' }).nodes().each(function (cell, i) {
                    cell.innerHTML = i + 1;
                });
            }).draw();
        });
}


load = document.getElementById("load")
window.setTimeout(loading, 4000);

function loading() {
    document.getElementById("load").style.display = "none";
}





