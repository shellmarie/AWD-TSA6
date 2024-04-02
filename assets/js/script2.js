window.onload = function() {
    var details = JSON.parse(sessionStorage.getItem('signupDetails'));

    var detailsHTML = '';
    for (var key in details) {
        detailsHTML += '<b>' + key + ':</b> ' + details[key] + '<br>';
    }

    document.getElementById('details').innerHTML = detailsHTML;
};