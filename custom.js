var cors_proxy = "http://192.168.120.244:8090";
var tasmota_ip = "192.168.120.81";
var led_ip = "http://192.168.120.45";

$( document ).ready(function() {
	$("<div id='rightMenu' class='accordion span4'></div>'").insertAfter( ".span8" );
	$("#temp").detach().appendTo('#rightMenu');
	//$("#control_link").attr("class", " ");
	//$("#tab_plugin_filemanager_link").attr('class', 'active');
	//$("#tab_plugin_filemanager_link").attr('data-bind', 'visible:visible');
	//$("#tab_plugin_filemanager_link").insertBefore("#temp_link");
	//$( "li" ).remove( "#temp_link" );

	$('<button class="btn btn-block" id="printer_power" data-bind="click: powerswitch, enable: loginState.isUser()">Strom an</button>').insertBefore("#printer_connect");
	$('<button class="btn btn-block" id="lightswitch" data-bind="click: lightswitch, enable: loginState.isUser()">Licht</button>').insertBefore("#printer_connect");
	getLightState();
	getPowerState();
})

async function getLightState() {
	var url = cors_proxy+"/"+led_ip+"/light/3d_drucker_led/state";
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onload = function () {
	    var data = JSON.parse(xhr.responseText)
	    if(data.state == "OFF") {
			$("#lightswitch").css("background-color", "#abd03f");
			$("#lightswitch").html('Licht an');
	    }
	    if(data.state == "ON") {
	    	$("#lightswitch").css("background-color", "#bd3630");
	    	$("#lightswitch").html('Licht aus');
	    }
	};
	xhr.send();
}
async function getPowerState() {
	var url = cors_proxy+"/"+tasmota_ip+"/cm?cmnd=Status";
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onload = function () {
	    var data = JSON.parse(xhr.responseText)
	    if(data.Status.Power == 0) {
			$("#printer_power").css("background-color", "#abd03f");
			$("#printer_power").html('Strom an');
	    }
	    if(data.Status.Power == 1) {
	    	$("#printer_power").css("background-color", "#bd3630");
	    	$("#printer_power").html('Strom aus');
	    }
	};
	xhr.send();
}
async function powerswitch() {
	var url = cors_proxy+"/"+tasmota_ip+"/cm?cmnd=Power%20TOGGLE";
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onload = function () {
	    if(xhr.responseText == '{"POWER":"ON"}') {
	    	$("#printer_power").css("background-color", "#bd3630");
	    	$("#printer_power").html('Strom aus');
	    } else {
	    	$("#printer_power").css("background-color", "#abd03f");
			$("#printer_power").html('Strom an');
	    }
	};
	xhr.send();
}
async function lightswitch() {
	var url = cors_proxy+"/"+led_ip+"/light/3d_drucker_led/toggle";
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.onload = function () {
	    getLightState()
	};
	xhr.send();
}
