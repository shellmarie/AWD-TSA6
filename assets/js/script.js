function openForm(evt, formName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(formName).style.display = "block";
    evt.currentTarget.className += " active";
}

window.onload = function() {
    document.querySelector('.tablinks').click();
};

function displayData() {
    event.preventDefault();

    var fname = document.getElementById('signupFname').value;
    var lname = document.getElementById('signupLname').value;
    var email = document.getElementById('signupEmail').value;
    var pwd = document.getElementById('signupPwd').value;
    var cpwd = document.getElementById('signupCpwd').value;

    var details = {
        'First Name': fname,
        'Last Name': lname,
        'Email': email,
        'Password': pwd,
        'Confirm Password': cpwd
    };

    sessionStorage.setItem('signupDetails', JSON.stringify(details));

    window.location.href = 'signup.html';

    return false;
}