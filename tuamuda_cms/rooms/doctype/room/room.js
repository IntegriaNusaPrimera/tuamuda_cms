// Copyright (c) 2022, Dev INP and contributors
// For license information, please see license.txt

frappe.ui.form.on('Room', {
	// refresh: function(frm) {
    refresh: function(frm) {
    return $(this).each(function() {
        $(this).html($('<span />').width(Math.max(0, (Math.min(5, parseFloat($(this).html())))) * 16));
    });
}
	// }
});
