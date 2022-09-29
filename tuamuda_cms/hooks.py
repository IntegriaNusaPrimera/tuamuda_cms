from . import __version__ as app_version

app_name = "tuamuda_cms"
app_title = "Tuamuda CMS"
app_publisher = "Dev INP"
app_description = "cms frappe untuk app dan web tuamuda"
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "dev@integria.co.id"
app_license = "MIT"
app_logo_url = '/assets/tuamuda_cms/image/logo.png'

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/tuamuda_cms/css/tuamuda_cms.css"
app_include_js = "/assets/tuamuda_cms/js/app_script.js"

# include js, css files in header of web template
web_include_css = [
    "/assets/tuamuda_cms/css/web.css",
    "/assets/frappe/css/font-awesome.min.css"
    ]
web_include_js = "/assets/tuamuda_cms/js/web_script.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "tuamuda_cms/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
home_page = "room"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page", "Rooms", "Articles", "Podcast", "Chat Group", "Consult", "Agenda"]

# Installation
# ------------

# before_install = "tuamuda_cms.install.before_install"
# after_install = "tuamuda_cms.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "tuamuda_cms.uninstall.before_uninstall"
# after_uninstall = "tuamuda_cms.uninstall.after_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "tuamuda_cms.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
#	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
#	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
#	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
#	"*": {
#		"on_update": "method",
#		"on_cancel": "method",
#		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
#	"all": [
#		"tuamuda_cms.tasks.all"
#	],
#	"daily": [
#		"tuamuda_cms.tasks.daily"
#	],
#	"hourly": [
#		"tuamuda_cms.tasks.hourly"
#	],
#	"weekly": [
#		"tuamuda_cms.tasks.weekly"
#	]
#	"monthly": [
#		"tuamuda_cms.tasks.monthly"
#	]
# }

# Testing
# -------

# before_tests = "tuamuda_cms.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
#	"frappe.desk.doctype.event.event.get_events": "tuamuda_cms.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
#	"Task": "tuamuda_cms.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]


# User Data Protection
# --------------------

user_data_fields = [
	{
		"doctype": "{doctype_1}",
		"filter_by": "{filter_by}",
		"redact_fields": ["{field_1}", "{field_2}"],
		"partial": 1,
	},
	{
		"doctype": "{doctype_2}",
		"filter_by": "{filter_by}",
		"partial": 1,
	},
	{
		"doctype": "{doctype_3}",
		"strict": False,
	},
	{
		"doctype": "{doctype_4}"
	}
]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
#	"tuamuda_cms.auth.validate"
# ]

# Customize looks
# ---------------
brand_html = '<div><img src="/assets/tuamuda_cms/image/logo.png">&nbsp;&nbsp; tuamuda ID</div>'

website_context = {
    "favicon": "/assets/tuamuda_cms/image/logo.png",
	"logo_image_url": "/assets/tuamuda_cms/image/logo.png",
    "splash_image": "/assets/tuamuda_cms/image/logo.png"
}


fixtures = [
	{"dt": "Room"},
	{"dt": "Chat Group"},
	{"dt": "Podcast"},
	{"dt": "Agenda"},
	# {"dt": "Blog"},
	{"dt": "Consult"},
	{"dt": "Website Settings"},
	# {"dt": "Website Page"},
	# {"dt": "Website Form"},
    # {"dt": "Website Sidebar"},
	# {"dt": "Website Theme"},
	{"dt": "Website Script"},
	{"dt": "Portal Settings"},
	{"dt": "Notification"},
	{"dt": "Notification Settings"},
	{"dt": "Email Template"},
	{"dt": "System Settings"},
	{"dt": "Workflow"},
	{"dt": "Workflow State"},
	{"dt": "Workflow Action"},
	{"dt": "Print Settings"},
	{"dt": "Print Format"},
	{"dt": "Print Style"}
]
