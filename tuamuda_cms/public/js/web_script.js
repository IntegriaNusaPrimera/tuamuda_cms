function barlogo() {
    let brand = document.getElementsByClassName( "navbar-brand" );
    let img = brand[ 0 ].querySelectorAll( "img" );
    brand[ 0 ].style.paddingTop = "0";
    brand[ 0 ].style.paddingBottom = "0";
    img[0].style.maxHeight = "40px";

    let power = document.getElementsByClassName( "footer-powered" );
    power[ 0 ].remove();
}

document.addEventListener( "DOMContentLoaded", barlogo );

