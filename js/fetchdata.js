window.onload = function () {

    fetch('json/player.json')
        .then(res => {
            return res.json();
        }).then(result => {
            console.log(result);

            var html = '<table id="myTable" class="cell-border hover">';
            html += '<thead>';
            html += '<tr>';
            html += '<th>Rank</th>';
            html += '<th>IGN</th>';
            html += '<th>Best</th>';
            html += '<th>Rating</th>';
            html += '<th>Last</th>';
            html += '<th>Rating</th>';
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
                order: [[2, 'asc']],
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





