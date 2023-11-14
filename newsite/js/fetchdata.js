


window.onload = function () {

    var dateReviver = function (key, value) {
        var a;
        if (typeof value === 'string') {
            a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
            if (a) {
                return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], +a[6]));
            }
        }
        return value;
    };
    function bestdaylong_inq(orderID) {
        var xmlhttp;
    
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var result = xmlhttp.responseText;
                var obj = JSON.parse(result, dateReviver);//解析json字串為json物件形式
    
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
                for (var i = 0; i < obj.length; i++) {//
                    html += '<tr>';//
                    for (j = 0; j < obj[i].data.length; j++) {
                        html += '<td>' + obj[i].data[j] + '</td>';
                    }
                    html += '</tr>';
                }
                html += '</tbody>';
                html += "</table>";
                document.getElementById("order_status").innerHTML = html;
    
            }
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
            // 自動序列
            table.on('order.dt search.dt', function () {
                table.column(0, { search: 'applied', order: 'applied' }).nodes().each(function (cell, i) {
                    cell.innerHTML = i + 1;
                });
            }).draw();
        }
        var url = "https://script.google.com/macros/s/AKfycbzM4OVff4x272rzhW-1cveCHBplSc7VJLm2m9sdQ6-Z_aIRxuEeWkmU1qhBkVZ5JoECkg/exec";
        xmlhttp.open("get", url + "?orderID=" + orderID, true);
        xmlhttp.send();
    }


    // 您的 function 程式碼
    bestdaylong_inq(orderID);


    load = document.getElementById("load")
    window.setTimeout(loading, 4000);

    function loading() {
        document.getElementById("load").style.display = "none";
        //3秒後影藏物件
    }
};




