/**
 * @class Event
 * @param _event
 *        _event.trackId{string}
 *        _event.tags{array}
 *        _event.timescale{number(long)}
 *        _event.startTv{number(long)}
 *        _event.endTv{number(long)}
 *        _event.notes{string}
 * @constructor
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
Event.getTemplate = function (context) {
    var compiled = Handlebars.compile($("#event_template").html());
    return compiled(context);
};
Event.getFormTemplate = function (context) {
    var compiled = Handlebars.compile($("#event_editForm").html());
    return compiled(context);
};
Event.prototype.renderEvent = function () {

    this.el = $(Event.getTemplate(this));
    this.addEditListener();
};

Event.prototype.deleteEl = function () {
    this.el.fadeOut('slow', function(){
        $(this).remove();
    });
};

Event.prototype.addEditListener = function(){
    var self = this;
    this.el.on('click', '.btn.edit', function(ev){
        ev.stopPropagation();
        console.log(self);
        if(!self.form){
            self.form = $(Event.getFormTemplate(self));
            //TODO:mbc pass form container
            $('.forms-container').append(self.form);
        }else{
            //TODO:mbc toggle form
        }
    });
};
