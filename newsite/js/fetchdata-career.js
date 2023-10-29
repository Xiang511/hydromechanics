
window.onload = function () {
    // 您的 function 程式碼
    bestdaylong_inq(orderID);
};

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
            html += '<th>IGN</th>';
            html += '<th>勝率</th>';
            html += '<th>對戰次數</th>';
            html += '<th>三冠次數</th>';
            html += '<th>捐獻次數</th>';
            // html += '<th>經驗</th>';
            html += '<th>聯賽對戰次數</th>';
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
            if (obj.length > 8) {
                let div = document.getElementById('result');
                div.style.height = '100%';
            }
            document.getElementById("order_status").innerHTML = html;
            if (obj.length == 1) //只有一筆代表查不到資料
                alert('查無資料');
        }
        let table = new DataTable('#myTable', {
            order: [[1, 'dsc']],
            info: false,
            // paging: false
            processing: true,
            // 表格拖拉
            colReorder: true,
            colReorder: {
                fixedColumnsLeft: 1
            },

            columnDefs: [{ orderable: false, targets: 0 }
                        // { "width": "25%", "targets": 0 },
                        // ,{ "width": "14   %", "targets": [0,1,2,3,4,5] }
                    ]

        });
    }
    var url = "https://script.google.com/macros/s/AKfycbzErhtEAqr83yMm0DdHpkKdCtiiX2R6N6T6-xc7u59Yk6KG-zYLvbT4vomKxe68d1DHTw/exec";
    xmlhttp.open("get", url + "?orderID=" + orderID, true);
    xmlhttp.send();
}
