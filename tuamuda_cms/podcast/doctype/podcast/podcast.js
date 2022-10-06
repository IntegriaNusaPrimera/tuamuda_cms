// Copyright (c) 2022, Dev INP and contributors
// For license information, please see license.txt

frappe.ui.form.on('Podcast', {
    validate: function ( frm ) {
        if ( frm.doc.video_source == "Server" ) {
            frappe.throw( "Saat ini Server belum bisa dipilih sebagai sumber video.<br> Harap ganti sumber video sebelum Save." )
        }
        if ( frm.doc.featured_text.length > 300 ) {
            frappe.throw( "Featured Text tidak boleh lebih dari 300 karakter.")
        }

        // frappe.db.get_list( "Podcast", {
        //     filters: { 'featured': true },
        //     fields: [ "name" ]
        // }
        // ).then( ( results ) => {
        //     if ( results.length >= 1 ) {
        //         frappe.throw( 'Feature Podcast hanya boleh 1.<br>Saat ini sudah ada podcast lain yg ditandai Featured' );
        //         console.log( `Number of Podcast with checkbox 'Featured' = ${results.length}` );
        //     }
        // } );
    },

    video_source: function(frm){
        if ( frm.doc.video_source == "Server" ) {
            frappe.msgprint("Saat ini Server belum bisa dipilih sebagai sumber video")
        }
    },
    // featured_text: function(frm) {
    //     if ( frm.doc.featured_text.length > 300 ) {
    //         frappe.throw("Featured Text tidak boleh melebihi 300 karakter.")
    //     }
    // },

    refresh: function ( frm ) {
        let textLength = frm.doc.featured_text.length
        let textArea = document.querySelector( 'textarea[data-fieldname="featured_text"]' );
        let wrapper = textArea.parentNode.parentNode
        let helpbox = wrapper.getElementsByClassName( 'help-box' )

        helpbox[ 0 ].classList.add( 'text-right' );

        const maxNumOfChars = 300;
        if ( frm.doc.featured_text.length > 0 ) {
            helpbox[ 0 ].textContent = maxNumOfChars - textArea.value.length + "/" + maxNumOfChars;
        } else {
            helpbox[ 0 ].textContent = "max. " + maxNumOfChars + " karakter";
        }

        const countCharacters = () => {
            let numOfEnteredChars = textArea.value.length;
            console.log( numOfEnteredChars )
            let counter = maxNumOfChars - numOfEnteredChars;
            helpbox[ 0 ].textContent = counter + "/" + maxNumOfChars;

            helpbox[ 0 ].classList.remove( 'text-muted' );
            if ( counter < 0 ) {
                helpbox[ 0 ].style.color = "red";
            } else if ( counter < 20 ) {
                helpbox[ 0 ].style.color = "orange";
            } else {
                helpbox[ 0 ].style.color = "grey";
            };
        };

        textArea.addEventListener( "input", countCharacters );
    },

    // featured: function ( frm ) {
    //     frappe.db.get_list( "Podcast", {
    //         filters: { 'featured': true },
    //         fields: [ "name" ]
    //     }
    //     ).then( ( results ) => {
    //         console.log( `A Number of Podcast with checkbox 'Featured' = ${results.length}` );
    //         if ( results.length >= 1 ) {
    //             console.log( results );
    //             // frm.set_value('featured', 0)
    //             frappe.throw( 'field|Hanya boleh ada 1 featured podcast' );
    //             console.log( `B Number of Podcast with checkbox 'Featured' = ${results.length}` );
    //         }
    //     },
    //     // console.log( `Number of Podcast with checkbox 'Featured' = ${results.length}` )
    //     );
    // }

    publisher_logo: function (frm) {
        lnk = frm.doc.publisher_logo
        img = document.getElementsByClassName( 'missing-image' );
        img[0].innerHTML = "gambar";
    }

});
