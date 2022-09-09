function logo() {
    let logo = document.getElementsByClassName( "app-logo" )[0];
    console.log(logo)
    logo.removeAttribute("style");
}

document.addEventListener( "DOMContentLoaded", logo );
