/**
 * Created by Aj on 27.03.2016.
 canDelete{boolean}
 canRead{boolean}
 canWrite{boolean}
 displayName{string}
 events{array (Events)}
 frameCount{number(long)}
 frameDurationTv{number(long)}
 id{string}
 importedFrom{string}
 lastModified{number(Time milliseconds)}
 mediaId{string}
 ownerId{string}
 state{string}
 */
function Track(_track) {
    this.canDelete = _track.canDelete
    this.canRead = _track.canRead;
    this.canWrite = _track.canWrite;
    this.displayName = _track.displayName;
    this.events = this.hydrateEvents(_track.events);
    this.frameCount = _track.frameCount;
    this.frameDurationTv = _track.frameDurationTv;
    this.id = _track.id;
    this.importedFrom = _track.importedFrom;
    this.lastModified = _track.lastModified;
    this.mediaId = _track.mediaId;
    this.ownerId = _track.ownerId;
    this.state   = _track.state;
}

Track.prototype.hydrateEvents = function(_events) {
    var eventsMap = {};
    return _events.reduce(function(eventsMap, _event, index){
        var eventId = "event" +index;
        eventsMap[eventId] = new Event(_event, eventId);
        return eventsMap;
    }, eventsMap);
};

Track.prototype.render = function (_container) {
    for(var key in this.events) {
        var _event = this.events[key];
        _event.renderEvent();
        _container.append(_event.el);
    }
};

Track.prototype.deleteEvent = function (_eventId) {
    var _event = this.events[_eventId];
    _event.deleteEl();
    delete this.events[_eventId];
};

