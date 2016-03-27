$(document).ready(function(){
    var $events = $("#events");
    var track = null;
    $.get("/api/taxi", function(data){
        track = new Track(data);
        //TODO:mbc delete on prod
        window.TRACK = track;
        track.render($events);
    });

    $events.on('click', '.btn.delete', function(ev){
        ev.stopPropagation();
        var _eventId = $(this).closest('li').attr('id');
        if(track){
            track.deleteEvent(_eventId);
        }
    });

});