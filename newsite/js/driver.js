const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});

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
  showButtons: ['next', 'previous', 'close'],
  prevBtnText: "上一步",  //上一步按鈕
  nextBtnText: "下一步",  //下一步按鈕
  doneBtnText: "完成",  //最後一步的完成按鈕
  closeBtnText: "關閉",  //關閉按鈕
  steps: [
    { element: '.left', popover: { title: 'Hi 我是Xiang', description: '歡迎您的造訪!</br>點選下一步來開始導覽<br>(若不需要此導覽可以點選關閉)', side: "center", align: 'start' } },
    { element: '.breadcrumb', popover: { title: '先簡單介紹一下網站功能', description: '請點擊下一步', side: "center", align: 'start' } },
    { element: '#AboutUs', popover: { title: '關於我們', description: '介紹有關我們的詳細資訊</br>例如:網站創立原因、與RoyaleApi有何不同、以及如何加入我們', side: "left", align: 'start' } },
    { element: '#LadderRanking', popover: { title: '天梯紀錄', description: '紀錄"傳奇之路最高排名"以及"上一季排名"', side: "left", align: 'start' } },
    { element: '#PlayerCareerRecord', popover: { title: '生涯紀錄', description: '紀錄"舊天梯排名"、"總對戰次數"、"總三冠次數"......', side: "left", align: 'start' } },
    { element: '#DeveloperAnnouncement', popover: { title: '版本紀錄', description: '紀錄"各版本相關資訊"、更新日期、目前記錄人數以及"即時申請表"', side: "left", align: 'start' } },

    { element: '.bx-menu', popover: { title: '側選單', description: '內有其他功能 例如:個人成就頁面、統計圖表、開源程式碼網頁', side: "left", align: 'start' } },
    { element: '#chart', popover: { title: '目前網站瀏覽次數', description: '感謝你的貢獻!', side: "left", align: 'start' } },

    { element: '.left', popover: { title: '介紹完畢', description: '盡情瀏覽網站內容把! 希望你們會喜歡!</br>我是Xiang 我們排行榜上見! ', side: "left", align: 'start' } },
  ],
  onDestroyStarted: () => {
    if (!driverObj.hasNextStep() || confirm("確定要跳過導覽?")) {
      driverObj.destroy();
      // TOGGLE SIDEBAR
      const menuBar = document.querySelector('#content nav .bx.bx-menu');
      const sidebar = document.getElementById('sidebar');
      const track = document.querySelector('.track');

      //恢復側選單
      menuBar.addEventListener('click', function () {
        sidebar.classList.toggle('hide');
        track.classList.toggle('ml-1-5');
      })
    }
  },
});
driverObj.drive();