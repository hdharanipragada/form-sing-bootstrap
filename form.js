function fnFormValidation() {
    uname = document.getElementById('Name').value;
    uamount = document.getElementById('Amount').value;
    upwd = document.getElementById('password').value;
    if (uname == null || uname == "") {
        alert("Name can't be blank");
        return false;
    }
    if (uamount <= 0) {
        alert("Enter a valid amount");
        return false;
    }
    if (upwd.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    } else {
        alert("submit successful !!!!");
        localStorage.setItem('lname', uname);
        localStorage.setItem('lamount', uamount);
        localStorage.setItem('lpwd', upwd);

    };
}




function fnNameValidation() {
    var span = document.getElementById('glynameicon');
    var div = document.getElementById('formname');
    var mspan = document.getElementById('helptext1');
    var msg = "Name should only have alphabets";
    var npattern = /^[a-zA-Z]+$/;
    var ninput = document.getElementById('Name').value;
    if ((ninput).match(npattern)) {
        div.setAttribute('class', 'has-success has-feedback');
        span.setAttribute('class', 'glyphicon glyphicon-ok form-control-feedback');
        mspan.innerText = "";
    } else {
        div.setAttribute('class', 'has-error has-feedback');
        span.setAttribute('class', 'glyphicon glyphicon-remove form-control-feedback');
        mspan.setAttribute('class', 'help-block');
        mspan.innerText = msg;
    }
}

function fnAmountValidation() {
    var span = document.getElementById('glyamounticon');
    var div = document.getElementById('formamount');
    var mspan = document.getElementById('helptext2');
    var msg = "Enter valid amount";
    var apattern = /^[0-9]+$/;
    var ainput = document.getElementById('Amount').value;
    if ((ainput).match(apattern)) {
        div.setAttribute('class', 'input-group has-success has-feedback');
        span.setAttribute('class', 'glyphicon glyphicon-ok form-control-feedback');
        mspan.innerText = "";
    } else {
        div.setAttribute('class', 'input-group has-error has-feedback');
        span.setAttribute('class', 'glyphicon glyphicon-remove form-control-feedback');
        mspan.setAttribute('class', 'help-block');
        mspan.innerText = msg;
    }
}

function fnPasswordValidation() {
    var span = document.getElementById('glypwdicon');
    var div = document.getElementById('formpassword');
    var mspan = document.getElementById('helptext3');
    var msg = "passowrd should have atleast 6 characters";
    var ppattern = /^[a-zA-Z0-9]+$/;
    var pinput = document.getElementById('password').value;
    if ((pinput).match(ppattern)) {
        div.setAttribute('class', 'has-success has-feedback');
        span.setAttribute('class', 'glyphicon glyphicon-ok form-control-feedback');
        mspan.innerText = "";
    } else {
        div.setAttribute('class', 'has-error has-feedback');
        span.setAttribute('class', 'glyphicon glyphicon-remove form-control-feedback');
        mspan.setAttribute('class', 'help-block');
        mspan.innerText = msg;
    }
}
