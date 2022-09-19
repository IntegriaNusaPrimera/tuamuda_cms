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
