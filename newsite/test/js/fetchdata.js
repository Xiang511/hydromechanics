
var PlayerTag = document.querySelector('.tag');
var PlayerName = document.querySelector('.name');
var PlayerWins = document.querySelector('.wins');
var PlayerLosses = document.querySelector('.losses');
var PlayerbattleCount = document.querySelector('.battleCount');
var PlayerThreeCrownWins = document.querySelector('.threeCrownWins');
var PlayerTournamentBattleCount = document.querySelector('.tournamentBattleCount');
var PlayerTotalDonations = document.querySelector('.totalDonations');
var PlayerClan = document.querySelector('.clan');
var PlayerClanTag = document.querySelector('.clantag');

var PlayerleagueStatistics = document.querySelector('.leagueStatistics');
var PlayerbestPathOfLegendSeasonResult = document.querySelector('.bestPathOfLegendSeasonResult');
var PlayercurrentFavouriteCard = document.querySelector('.currentFavouriteCard');
var PlayerlastPathOfLegendSeasonResultRank = document.querySelector('.lastPathOfLegendSeasonResultRank');
var PlayerlastPathOfLegendSeasonResultTrophies = document.querySelector('.lastPathOfLegendSeasonResultTrophies');

const img = document.getElementById("img")


var PlayerPicture = document.getElementById("picture")
var PlayerAboutus = document.getElementById("aboutus")
var PlayerMessage = document.getElementById("message")
var PlayermessageSec = document.getElementById("messageSec")
var PlayerAnnouncement = document.getElementById("announcement")


// https://xiang511.github.io/test/test.json


var xhr = new XMLHttpRequest();
xhr.open('get', 'test.json', true);
xhr.send();

xhr.onload = function () {
    const data = JSON.parse(this.responseText);

    let picture = data.picture;
    let aboutus = data.aboutus;
    let message = data.message;
    let messageSec = data.messageSec;
    let announcement = data.announcement;
    

    document.getElementById("picture").src = picture

    if(aboutus != null)
    PlayerAboutus.innerHTML += aboutus;

    if(message != null)
    PlayerMessage.innerHTML += message;

    if(messageSec != null){
        PlayermessageSec.innerHTML += messageSec;
    }
    
    if(announcement != null)
    PlayerAnnouncement.innerHTML += announcement;






}
xhr.onerror = function (err) {
    console.log('錯誤', err)
}


var xhr = new XMLHttpRequest();
xhr.open('get', '22R920J00.json', true);
xhr.send();

xhr.onload = function () {
    const data = JSON.parse(this.responseText);

    let tag = data.tag;
    let name = data.name;
    let wins = data.wins;


    let losses = data.losses;
    let battleCount = data.battleCount;
    let threeCrownWins = data.threeCrownWins;
    let tournamentBattleCount = data.tournamentBattleCount;
    let totalDonations = data.totalDonations;
    let clan = data.clan.name;
    let clantag = data.clan.tag;
    let leagueStatistics = data.leagueStatistics.bestSeason.rank;
    let bestPathOfLegendSeasonResult = data.bestPathOfLegendSeasonResult.rank;
    let currentFavouriteCard = data.currentFavouriteCard.name;

    let lastPathOfLegendSeasonResultRank = data.lastPathOfLegendSeasonResult.rank;

    let lastPathOfLegendSeasonResultTrophies = data.lastPathOfLegendSeasonResult.trophies;





    console.log(tag);
    console.log(name);
    console.log(wins);

    PlayerTag.innerHTML += tag;
    PlayerName.innerHTML += name;
    PlayerClan.innerHTML += clan;
    // PlayerClanTag.innerHTML += clantag;
    PlayerWins.innerHTML += wins;
    PlayerLosses.innerHTML += losses;
    PlayerbattleCount.innerHTML += battleCount;
    PlayerThreeCrownWins.innerHTML += threeCrownWins;
    PlayerTournamentBattleCount.innerHTML += tournamentBattleCount;
    PlayerTotalDonations.innerHTML += totalDonations;
    PlayerleagueStatistics.innerHTML += leagueStatistics;
    PlayerbestPathOfLegendSeasonResult.innerHTML += bestPathOfLegendSeasonResult;
    PlayercurrentFavouriteCard.innerHTML += currentFavouriteCard;
    PlayerlastPathOfLegendSeasonResultRank.innerHTML += lastPathOfLegendSeasonResultRank;
    PlayerlastPathOfLegendSeasonResultTrophies.innerHTML += lastPathOfLegendSeasonResultTrophies;





    // document.getElementById("img").src = badges



}

xhr.onerror = function (err) {
    console.log('錯誤', err)
}

