/**
 * @param _track
 * _track.canDelete{boolean}
 * _track.canRead{boolean}
 * _track.canWrite{boolean}
 * _track.displayName{string}
 * _track.events{array<Events>}
 * _track.frameCount{number(long)}
 * _track.frameDurationTv{number(long)}
 * _track.id{string}
 * _track.importedFrom{string}
 * _track.lastModified{number(Time milliseconds)}
 * _track.mediaId{string}
 * _track.ownerId{string}
 * _track.state{string}
 * @constructor
 */
function Track(_track){
    this.canDelete = _track.canDelete;
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
    this.state = _track.state;
}

Track.prototype.hydrateEvents = function(_events){
    var eventsMap = {};
    return _events.reduce(function(eventsMap, _event, index){
        var eventId = "event"+index;
        eventsMap[eventId] = new Event(_event, eventId);
        return eventsMap;
    }, eventsMap);
};

Track.prototype.render = function(_container){
    for(var key in this.events){
        var _event = this.events[key];
       _event.renderEvent(); //after _event rendered it has el;
       _container.append(_event.el);
    }
};

Track.prototype.deleteEvent = function(_eId){
    var _event = this.events[_eId];
    _event.deleteEl();
     delete this.events[_eId];
};
