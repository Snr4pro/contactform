borders1 = document.querySelector('#fname');
borders2 = document.querySelector('#lname');
borders3 = document.querySelector('#address');
borders4 = document.querySelector('#ge');
borders5 = document.querySelector('#sr');
radioBox1 = document.querySelector('#general');
radioBox2 = document.querySelector('#support');
borders6 = document.querySelector('#mess');
boxCheck = document.querySelector('#check');
alert1 = document.querySelector('.alert1');
alert2 = document.querySelector('.alert2');
alert3 = document.querySelector('.alert3');
alert4 = document.querySelector('.alert4');
alert5 = document.querySelector('.alert5');
alert6 = document.querySelector('.alert6');
submitBtn = document.querySelector('button');
success = document.querySelector('.sent');
allInputs = document.querySelectorAll('input');
allAlerts = document.querySelectorAll('.alert');
greenImg = document.getElementById('image');
form = document.getElementById('form');
resetBtn = document.getElementById('reset');

function message() {
    success.style.visibility = "visible";
}

radioBox1.addEventListener('click', () => {
    borders4.style.background = "hsl(148, 38%, 91%)";
    borders5.style.background = "none";
})

radioBox2.addEventListener('click', () => {
    borders5.style.background = "hsl(148, 38%, 91%)";
    borders4.style.background = "none";
})


submitBtn.addEventListener("click", function () {
    if (borders1.value === "") {
        alert1.style.display = "block";
        borders1.style.border = "1px solid hsl(0, 66%, 56%)";
    } else {
        alert1.style.display = "none";
        borders1.style.border = "1px hsl(186, 15%, 59%) solid";
    }

    if (borders2.value === "") {
        alert2.style.display = "block";
        borders2.style.border = "1px solid hsl(0, 66%, 56%)";
    } else {
        alert2.style.display = "none";
        borders2.style.border = "1px hsl(186, 15%, 59%) solid";
    }

    if (borders3.value === "") {
        alert3.style.display = "block";
        borders3.style.border = "1px solid hsl(0, 66%, 56%)";
    } else {
        alert3.style.display = "none";
        borders3.style.border = "1px hsl(186, 15%, 59%) solid";
    }

    if (radioBox1.checked == !true && radioBox2.checked == !true) {
        alert4.style.display = "block";
        borders4.style.border = "1px solid hsl(0, 66%, 56%)";
        borders5.style.border = "1px solid hsl(0, 66%, 56%)";
    } else {
        alert4.style.display = "none";
        borders4.style.border = "1px hsl(186, 15%, 59%) solid";
    }

    if (borders6.value === "") {
        alert5.style.display = "block";
        borders6.style.border = "1px solid hsl(0, 66%, 56%)";
    } else {
        alert5.style.display = "none";
        borders6.style.border = "1px hsl(186, 15%, 59%) solid";
    }

    if (boxCheck.checked == !true) {
        alert6.style.display = "block";
    } else {
        alert6.style.display = "none";
    }

})

logInfo = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();
    message();
    submitBtn.style.display = "none";
    resetBtn.style.display = "block";
    const formData = new FormData(form);
    for (item of formData) {
        console.log(item[0], item[1]);
    }
    
})

function resetPage() {
    location.reload(true);
}




















