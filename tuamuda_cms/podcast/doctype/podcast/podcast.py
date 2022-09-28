# Copyright (c) 2022, Dev INP and contributors
# For license information, please see license.txt

import frappe
import logging
from frappe.website.website_generator import WebsiteGenerator

class Podcast(WebsiteGenerator):
    def validate(self):
        print(f"{self.featured}")
        if self.featured == 1:
            f = frappe.db.get_list('Podcast', filters={'featured':'1'}, fields=['name', 'featured'])
            # logging.info(f"ada {len(f)} featured podcast")
            if len(f) > 1:
                frappe.msgprint(
                    msg= "Featured Podcast tidak boleh lebih dari satu. Silahkan hapus dulu tanda di podcast lain tersebut.",
                    title= "Featured Podcast sudah ada!",
                    indicator='red',
                    raise_exception=True
                    # primary_action={
                    #         'label': 'Perbaiki'
                    #     }
                )
