

var food_amounts = document.querySelectorAll('.amountBox')
food_amounts.forEach(function(amountElem) {

    var btnMore = amountElem.previousSibling
    var btnLess = amountElem.nextSibling
    
    btnMore.addEventListener("click", function() {
        var oldnum = amountElem.innerHTML;
        var newnum = parseInt(oldnum) + 1
        amountElem.innerHTML = newnum;
    }) 

    btnLess.addEventListener("click", function() {
        var oldnum = amountElem.innerHTML;
        var newnum = parseInt(oldnum) - 1
        amountElem.innerHTML = (newnum > 0) ? newnum : 0;
    }) 

})