
window.onload = main;

var imagesNumbers = [1, 2, 3, 4, 5];
var names = ['John Adams', 'Kevin Malcolm', 'James Madison', 'James Monroe', 'Andrew Jackson'];
var rates = [102, 1472, 32, 3086, 102];
var ideas = [0, 20, 0, 53, 0];
var following = [50, 19, 2, 1049, 50];
var followers = [0, 26, 0, 45, 0];

// create buttons and icons
function createButtons(id) {
    for (var i = 1; i < 12; i++) {

        var followCheckDiv = document.createElement('div'); // create check block
        followCheckDiv.classList.add('follow-check');
        followCheckDiv.id = 'check' + id;
        followCheckDiv.onmouseover = function () {
            showButton(this.id)
        };
        followCheckDiv.onmouseout = function () {
            hideButton(this.id)
        };

        var plusDiv = document.createElement('div');        // create plus element
        plusDiv.classList.add('plus', 'visible');

        var checkMarkDiv = document.createElement('div'); // create check-mark
        checkMarkDiv.classList.add('check-mark');

        var followBtnDiv = document.createElement('div'); // create follow button
        followBtnDiv.classList.add('follow-button');
        followBtnDiv.id = 'follow-' + id;
        followBtnDiv.innerHTML = 'Follow';
        followBtnDiv.onclick = function () {
            toggleCheckMark(this.id);
        };

        var unfollowBtnDiv = document.createElement('div'); // create unfollow button
        unfollowBtnDiv.classList.add('unfollow-button');
        unfollowBtnDiv.id = 'unfollow-' + id;
        unfollowBtnDiv.innerHTML = 'Unfollow';
        unfollowBtnDiv.onclick = function () {
            toggleCheckMark(this.id);
        };

        followCheckDiv.appendChild(plusDiv);            // append plus sign
        followCheckDiv.appendChild(checkMarkDiv);       // append check-mark
        followCheckDiv.appendChild(followBtnDiv);       // append follow-btn
        followCheckDiv.appendChild(unfollowBtnDiv);     // append unfollow-btn

        return followCheckDiv;
    }
}

// list users when page loaded
function  renderUsers() {
    var parent = document.getElementById('table');
    var index = 0;

    for (var i = 1; i < 12; i++) {
        if (index == 5) {
            index = 0;
        }
        var node = document.createElement('div');       // create new line
        node.id = 'table-data-' + i;                    // append ids
        node.classList.add('table-data');

        var userDiv =  document.createElement('div');   // create new block with user's info
        userDiv.classList.add('table-data__user', 'user');

        var photoDiv = document.createElement('div');   // create new user's photo block
        photoDiv.classList.add('user__photo');
        photoDiv.style.background = 'url(\'images/'  + imagesNumbers[index] + '.png\') center / cover';

        var columnWrapperDiv = document.createElement('div'); // create name and stats bock
        columnWrapperDiv.classList.add('col-wrapper');

        var nameDiv = document.createElement('div');    // create name element
        nameDiv.classList.add('user__name');
        nameDiv.innerHTML = names[index];

        var userStatsDiv = document.createElement('div'); // create stats block
        userStatsDiv.classList.add('user__stats');

        var statsIconDiv = document.createElement('div'); // create stats icon block
        statsIconDiv.classList.add('stats__icon');

        var statsNumDiv = document.createElement('div'); // create stats number block
        statsNumDiv.classList.add('stats__num');
        statsNumDiv.innerHTML = rates[index];

       var  followCheckDiv = createButtons(i);          // create buttons and icons

        var ideasDiv = document.createElement('div');   // create ideas div
        ideasDiv.classList.add('table-data__ideas', 'ideas');
        ideasDiv.innerHTML = ideas[index];

        var followingDiv = document.createElement('div'); // create followings div
        followingDiv.classList.add('table-data__following', 'ideas');
        followingDiv.innerHTML = following[index];

        var followersDiv = document.createElement('div'); // create followers div
        followersDiv.classList.add('table-data__followers', 'followers');
        followersDiv.innerHTML = followers[index];

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

// show button when hovered
function showButton(id) {
    var parent = document.getElementById(id);
    var plus = parent.childNodes[0];
    var button;

    if (plus.classList.contains('visible')) {
         button = parent.childNodes[2];
    } else {
         button = parent.childNodes[3];
    }
    if (button.classList.contains('visible') == false) {
        button.classList.add('visible');
    }
}

// hide button when not hovered
function hideButton(id) {
    var parent = document.getElementById(id);
    var plus = parent.childNodes[0];
    var button;

    if (plus.classList.contains('visible')) {
        button = parent.childNodes[2];
    } else {
        button = parent.childNodes[3];
    }
    button.classList.remove('visible');
}

// toggle visibility of buttons and icons by click
function toggleCheckMark(id) {
    var parent = document.getElementById(id).parentNode;
    var checkMark = parent.childNodes[1];
    var plus = parent.childNodes[0];
    var follow = parent.childNodes[2];
    var unfollow = parent.childNodes[3];

    // show-hide icons behind the buttons
    plus.classList.toggle('visible');
    checkMark.classList.toggle('visible');

    // toggle buttons
    if (follow.classList.contains('visible')) {
        unfollow.classList.toggle('visible');
        setTimeout(function () {
            follow.classList.toggle('visible');
        },50)
    } else if (unfollow.classList.contains('visible')) {
        follow.classList.toggle('visible');
        setTimeout(function () {
            unfollow.classList.toggle('visible');
        },50)
    }

}

function main () {
    renderUsers();
}