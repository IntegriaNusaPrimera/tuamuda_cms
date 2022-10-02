// Copyright (c) 2022, Dev INP and contributors
// For license information, please see license.txt

frappe.ui.form.on('Room', {
	// refresh: function(frm) {
    refresh: function ( frm ) {
        return $( this ).each( function () {
            $( this ).html( $( '<span />' ).width( Math.max( 0, ( Math.min( 5, parseFloat( $( this ).html() ) ) ) ) * 16 ) );
        } );
    }
    // refresh: function() {
    //     let w1 = document.getElementById( 'cat-chooser' ).offsetWidth // 1242
    //     let w2 = document.querySelector( '.fa-chevron-left' ).offsetWidth * 2 // 21
    //     let w3 = document.getElementById( 'cat-chooser' ).getElementsByTagName( 'li' ).length * 100 // 1100
    //     if ( w1 < w2 + w3 ) {
    //         let left = "<i class='fa fa-chevron-left text-muted float-left my-2 pl-1 pr-2'></i>";
    //         document.getElementById('chevron-left').innerHTML = left;
    //         let right = "<i class='fa fa-chevron-right text-muted float-right my-2 pl-2 pr-1'></i>";
    //         document.getElementById('chevron-right').innerHTML = right;
    //     }
    // }
});
