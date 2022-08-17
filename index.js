function load() {
    var delay = 1900;

    setTimeout(function() {
        document.getElementsByClassName('loader')[0].style.visibility = 'hidden';
        document.getElementsByClassName('loadermessage')[0].style.visibility = 'hidden';

        document.getElementsByClassName('reveal')[0].style.visibility = 'visible';
    }, delay);
}