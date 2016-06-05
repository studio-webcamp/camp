
$(document).ready(function() {
    var track = null;
    var $events = $("#events");
    $.get("/api/taxi", function (data) {
        console.log("row " +data);
        track = new Track(data);
        //TODO: delete on prod
        window.TRACK = track;
      //  console.log("updated " + track);
        track.render($events);
    }).fail(function (err) {
        console.log("Error" + err);
    });
    $events.on("click", ".btn.delete", function(ev) {
        ev.stopPropagation();
        if(track) {
            var _eventId = $(this).closest("li").attr("id");
            track.deleteEvent(_eventId) ;
        }
    });
});