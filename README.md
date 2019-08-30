# octostyle


injected js and css into octoprint source for manual styling


##

in files :

* ./venv/lib/python2.7/site-packages/OctoPrint-1.3.11.post4.dev0+g3bffe4f7-py2.7.egg/octoprint/templates/index.jinja2
* ./venv/lib/python2.7/site-packages/octoprint/templates/index.jinja2


add following before &lt;/header&gt;


&lt;link href="http://192.168.120.244:88/custom.css" rel="stylesheet"&gt;

&lt;script src="http://192.168.120.244:88/custom.js" type="text/javascript"&gt;&lt;/script&gt;


next: compile and serve
