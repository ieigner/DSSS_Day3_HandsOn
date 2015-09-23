var events = JSON.parse(events.json);
var noEvents = events.length;


s = document.createElement('script')
s.src="https://code.jquery.com/jquery-2.1.4.min.js"
s.onload=function(){
    var dataURL='http://www.berlin.de/sen/wirtschaft/service/maerkte-feste/strassen-volksfeste/index.php/index.json?page=1'
    jQuery.getJSON(dataURL).then(function(dt){
	events.dt = dt
	  $('<div id="events"><h1>Events and Street fests in Berlin</h1></div>').appendTo(document.body)
        $('<li>There are '+dt.length+' events in Berlin.</li>').appendTo(events)
    }
}
} 