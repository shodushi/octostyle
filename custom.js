var tasmotaIP = "192.168.120.60"

$( document ).ready(function() {
//    	alert("ready !");

//$( "div.footer" ).replaceWith( "<h2>New heading</h2>" );

//var tempgraph = $('#temp').html();


//div = $("<div>").html(tempgraph);
//$(div).attr('id', 'rightMenu');
//$("body").append(div);

//$("#temp").clone().appendTo("#rightMenu");



//content = document.getElementById('temperature-graph').innerHTML

$("<div id='rightMenu' class='accordion span4'></div>'").insertAfter( ".span8" );
$("#temp").detach().appendTo('#rightMenu')

//$("#control_link").attr("class", " ");
//$("#tab_plugin_filemanager_link").attr('class', 'active');
//$("#tab_plugin_filemanager_link").attr('data-bind', 'visible:visible');
//$("#tab_plugin_filemanager_link").insertBefore("#temp_link");
//$( "li" ).remove( "#temp_link" );

$('<button class="btn btn-block" id="printer_power" data-bind="click: powerswitch, enable: loginState.isUser()">Strom an</button>').insertBefore("#printer_connect");


});

async function powerswitch() {
	var url = "http://192.168.120.60/cm?cmnd=Power%20TOGGLE";
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onload = function () {
	    //alert(xhr.responseText);
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