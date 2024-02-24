const driver = window.driver.js.driver;

// const driverObj = driver();

// driverObj.highlight({
//   element: "#test",
//   popover: {
//     title: "Title",
//     description: "Description"
//   }
// });

const driverObj = driver({
    showProgress: true,
    allowClose: false,
    steps: [
        { element: '#sys', popover: { title: 'Hi 我是Xiang', description: '歡迎您的造訪!</br>先簡單介紹一下網站功能 請點擊下一步', side: "center", align: 'start' } },
        { element: '#AboutUs', popover: { title: '關於我們', description: '介紹有關我們的詳細資訊</br>例如:網站創立原因、與RoyaleApi有何不同', side: "left", align: 'start' } },
        { element: '#LadderRanking', popover: { title: '天梯紀錄', description: '紀錄"傳奇之路最高排名"以及"上一季排名"', side: "left", align: 'start' } },
        { element: '#PlayerCareerRecord', popover: { title: '生涯紀錄', description: '紀錄"舊天梯排名"、"總對戰次數"、"總三冠次數"..', side: "left", align: 'start' } },
        { element: '#DeveloperAnnouncement', popover: { title: '版本紀錄', description: '紀錄"各版本相關資訊"以及"即時申請表"', side: "left", align: 'start' } },
        { element: '#sidebar', popover: { title: '側選單', description: '其他功能 例如:"個人成就","網站開源程式碼', side: "left", align: 'start' } },
        { element: '.track', popover: { title: '目前網站瀏覽次數', description: '感謝你的貢獻!', side: "left", align: 'start' } },
        { element: '#track', popover: { title: '介紹完畢', description: '盡情瀏覽網站內容把! 希望你們會喜歡!</br>我是Xiang 我們排行榜上見! ', side: "left", align: 'start' } },


    ]
});
// debug
// driverObj.drive();

var cookie = document.cookie;
if (cookie.indexOf("first_visit=true") === -1) {
    // 用戶是第一次造訪網頁
    // 設定 Cookie
    document.cookie = "first_visit=true";

    // 執行第一次造訪網頁的程式碼
    driverObj.drive();
    
} else {
    // 用戶不是第一次造訪網頁
    // const hostname = window.location.hostname;
    // alert("welcome back ! "+ hostname)
    // 執行非第一次造訪網頁的程式碼
}
