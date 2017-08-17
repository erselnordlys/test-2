
window.onload = main;

var imagesNumbers = [1, 2, 3, 4, 5];
var names = ['John Adams', 'Kevin Malcolm', 'James Madison', 'James Monroe', 'Andrew Jackson'];
var rates = [102, 1472, 32, 3086, 102];
var ideas = [0, 20, 0, 53, 0];
var following = [50, 19, 2, 1049, 50];
var followers = [0, 26, 0, 45, 0];

function  renderUsers() {
    var parent = document.getElementById('table');
    var index = 0;

    for (var i = 1; i < 12; i++) {
        if (index == 5) {
            index = 0;
        }
        console.log(index);

        var node = document.createElement('DIV');       // create new line
        node.id = 'table-data-' + i;                    // append ids
        node.classList.add('table-data');

        var userDiv =  document.createElement('DIV');   // create new block with user's info
        userDiv.classList.add('table-data__user', 'user');

        var photoDiv = document.createElement('DIV');   // create new user's photo block
        photoDiv.classList.add('user__photo');
        photoDiv.style.background = 'url(\'images/'  + imagesNumbers[index] + '.png\') center / cover';

        var columnWrapperDiv = document.createElement('DIV'); // create name and stats bock
        columnWrapperDiv.classList.add('col-wrapper');

        var nameDiv = document.createElement('DIV');    // create name element
        nameDiv.classList.add('user__name');
        nameDiv.innerHTML = names[index];

        var userStatsDiv = document.createElement('DIV'); // create stats block
        userStatsDiv.classList.add('user__stats');

        var statsIconDiv = document.createElement('DIV'); // create stats icon block
        statsIconDiv.classList.add('stats__icon');

        var statsNumDiv = document.createElement('DIV'); // create stats number block
        statsNumDiv.classList.add('stats__num');
        statsNumDiv.innerHTML = rates[index];

        var followCheckDiv = document.createElement('DIV'); // create check block
        followCheckDiv.classList.add('follow-check');
        followCheckDiv.id = 'check' + i;
        followCheckDiv.onmouseover = function () {
            showFollowButton(this.id)
        };
        followCheckDiv.onmouseout = function () {
            hideFollowButton(this.id)
        };

        var plusDiv = document.createElement('DIV');        // create plus element
        plusDiv.classList.add('plus', 'visible');

        var checkMarkDiv = document.createElement('DIV'); // create check-mark
        checkMarkDiv.classList.add('check-mark');

        var followBtnDiv = document.createElement('DIV'); // create follow button
        followBtnDiv.classList.add('follow-button');
        followBtnDiv.id = 'follow-' + i;
        followBtnDiv.innerHTML = 'Follow';
        followBtnDiv.onclick = function () {
            toggleCheckMark(this.id);
        };

        var unfollowBtnDiv = document.createElement('DIV'); // create unfollow button
        unfollowBtnDiv.classList.add('unfollow-button');
        unfollowBtnDiv.id = 'unfollow-' + i;
        unfollowBtnDiv.innerHTML = 'Unfollow';
        unfollowBtnDiv.onclick = function () {
            toggleCheckMark(this.id);
        };

        var ideasDiv = document.createElement('DIV');   // create ideas div
        ideasDiv.classList.add('table-data__ideas', 'ideas');
        ideasDiv.innerHTML = ideas[index];

        var followingDiv = document.createElement('DIV'); // create followings div
        followingDiv.classList.add('table-data__following', 'ideas');
        followingDiv.innerHTML = following[index];

        var followersDiv = document.createElement('DIV'); // create followers div
        followersDiv.classList.add('table-data__followers', 'followers');
        followersDiv.innerHTML = followers[index];

        followCheckDiv.appendChild(plusDiv);            // append plus sign
        followCheckDiv.appendChild(checkMarkDiv);       // append check-mark
        followCheckDiv.appendChild(followBtnDiv);       // append follow-btn
        followCheckDiv.appendChild(unfollowBtnDiv);     // append unfollow-btn

        userStatsDiv.appendChild(statsIconDiv);         // append icon to stats
        userStatsDiv.appendChild(statsNumDiv);          // append number to stats
        columnWrapperDiv.appendChild(nameDiv);          // push name to name-stats block
        columnWrapperDiv.appendChild(userStatsDiv);     // append stats to common to column stats block

        userDiv.appendChild(photoDiv);                  // add photo to user block
        userDiv.appendChild(columnWrapperDiv);          // add name and stats to user block
        userDiv.appendChild(followCheckDiv);            // add check-btns to user block

        node.appendChild(userDiv);                      // append user's block to line
        node.appendChild(ideasDiv);                     // append ideas
        node.appendChild(followingDiv);                 // append followings
        node.appendChild(followersDiv);                 // append followers
        parent.appendChild(node);                       // append line to parent table

        index++;
    }

}

function showFollowButton(id) {
    var parent = document.getElementById(id);
    var button = parent.childNodes[2];
    button.classList.add('visible');
}

function hideFollowButton(id) {
    var parent = document.getElementById(id);
    var button = parent.childNodes[2];
    button.classList.remove('visible');
}

function showUnfollowButton(id) {
    
}

function hideUnfollowButton(id) {

}

function toggleCheckMark(id) {
    var parent = document.getElementById(id).parentNode;
    var checkMark = parent.childNodes[1];
    var plus = parent.childNodes[0];
    plus.classList.toggle('visible');
    checkMark.classList.toggle('visible');
}


function main () {
    renderUsers();
}