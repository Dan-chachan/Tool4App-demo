

function addFood() {
    var box = document.getElementById("amountBox")
    var oldnum = box.innerHTML;
    var newnum = parseInt(oldnum) + 1
    box.innerHTML = newnum;
}

function removeFood() {
    var box = document.getElementById("amountBox")
    var oldnum = box.innerHTML;
    var newnum = parseInt(oldnum) - 1
    box.innerHTML = (newnum > 0) ? newnum : 0;
}