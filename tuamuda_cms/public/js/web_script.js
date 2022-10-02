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


function catChevron() {
    let w1 = document.getElementById( 'cat-chooser' ).offsetWidth
    let w2 = document.getElementById( 'cat-chooser' ).getElementsByTagName( 'li' ).length * 100
    if ( w1 < w2 + 45 ) {
        let left = "<i class='fa fa-chevron-left text-muted float-left my-2 pl-1 pr-2'></i>";
        document.getElementById('chevron-left').innerHTML = left;
        let right = "<i class='fa fa-chevron-right text-muted float-right my-2 pl-2 pr-1'></i>";
        document.getElementById('chevron-right').innerHTML = right;
    }
}

document.addEventListener( "DOMContentLoaded", catChevron );
