// $(document).on("startup", function () {
//     frappe.set_route("Form","User",frappe.session.user);
// });

function logo() {
    let logo = document.getElementsByClassName( 'app-logo' )[0];
        logo.removeAttribute( 'style' );
        logo.style.maxHeight = "24px";
    let brand = document.getElementsByClassName( 'navbar-brand' )[0];
        brand.style.paddingTop = "0";
}

document.addEventListener( "DOMContentLoaded", logo );

// function checkpage() {
//     let pages = [ "/app/website" ]
//     let page = window.location.pathname
//     if ( pages.includes( page ) ) {
//         console.log("true" + page )
//     } else {
//         console.log("false" + page )
//     }
    // for (var i = 0; i < link.length; i++) {
    //   if (link[i].textContent == "Submit an Issue") {
    //     console.log(link[i].textContent);
    //     link[i].classList.add('hidden')
    //     break;
    //   }
    // }
// }
// document.addEventListener( "DOMContentLoaded", checkpage );
