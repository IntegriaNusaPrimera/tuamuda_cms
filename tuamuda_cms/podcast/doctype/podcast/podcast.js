// Copyright (c) 2022, Dev INP and contributors
// For license information, please see license.txt

frappe.ui.form.on('Podcast', {
	// refresh: function(frm) {

	// }
    video_source: function(frm){
        if ( frm.doc.video_source == "Server" ) {
            frappe.msgprint("Saat ini Server belum bisa dipilih sebagai sumber video")
        }
    },
    validate: function(frm){
        if ( frm.doc.video_source == "Server" ) {
            frappe.throw("Saat ini Server belum bisa dipilih sebagai sumber video.<br> Harap ganti sumber video sebelum Save.")
        }
    }
});
