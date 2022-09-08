from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in tuamuda_cms/__init__.py
from tuamuda_cms import __version__ as version

setup(
	name="tuamuda_cms",
	version=version,
	description="cms frappe untuk app dan web tuamuda",
	author="Dev INP",
	author_email="dev@integria.co.id",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
