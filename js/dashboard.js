const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i => {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});

//側選單

const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');
const track = document.querySelector('.track');


menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
	track.classList.toggle('ml-1-5');
})


fetch('json/data.json', {
	headers: {
		'Cache-Control': 'no-cache, must-revalidate'
	}
})
	.then(res => {
		return res.json();
	}).then(result => {

		// 資料更新日期
		LastUpdateDate = result.LastUpdateDate
		document.getElementById("updatedDate").innerHTML = "資料更新日期 " + "\n" + LastUpdateDate;

		// 版本
		version = result.version
		document.getElementById("version").innerHTML = version;

		//更新時間
		updated = result.Updated
		document.getElementById("updated").innerHTML = updated;

		// 紀錄人數
		Record = result.RecordNumber
		document.getElementById("RecordNum").innerHTML = Record;

	}).catch(error => {
		console.log(`Error: ${error}`);
	});