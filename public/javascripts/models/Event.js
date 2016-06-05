/**
 * Created by Aj on 27.03.2016.
 * @class Event
 * @param _event
 *  _event.trackId{string}
    _event.tags{array}
    _event.timescale{number(long)},
    _event.startTv{number(long)}
    _event.endTv{number(long)}
    _event.notes{string}

 */

function Event(_event, id) {
    this.id = id;
    this.trackId = _event.trackId;
    this.tags = _event.tags;
    this.timescale = _event.timescale;
    this.startTv = _event.startTv;
    this.endTv = _event.endTv;
    this.notes = _event.notes;
}

Event.getTemplate = function(context) {
    var compiled = Handlebars.compile($("#event_template").html());
    return compiled(context);
};

Event.getFormTemplate = function(context) {
    var compiled = Handlebars.compile($("#event_editForm").html());
    return compiled(context);
};

Event.prototype.renderEvent = function() {
    this.el = $(Event.getTemplate(this));
    this.addEditListener();
}

Event.prototype.deleteEl = function() {
        this.el.fadeOut('slow', function(){
        $(this).remove();
    });
};

Event.prototype.addEditListener = function() {
    var self = this;
    this.el.on("click", ".btn.edit", function(ev) {
        ev.stopPropagation();
        if(!self.form) { //TODO else...
            self.form =  $(Event.getFormTemplate(self));
            self.form.on("submit", self.editEvent.bind(self));
            $(".forms-container").append(self.form); //TODO get forms-container in other way
        }
    });
};
/*browser submit
* ev - browser event
* this -point to Event*/
Event.prototype.editEvent = function(ev) {
    ev.preventDefault();
    console.log(this);
    var serializedArray = this.form.serializeArray();
    console.log(serializedArray);
    if(serializedArray instanceof Array) {
        serializedArray.forEach(function(el){
            console.log(el.name, el.value);
            this[el.name] =el.value;
        }, this);
    }
    console.log(this);
    var oldEl = this.el;
    this.renderEvent();
    oldEl.replaceWith(this.el);
};