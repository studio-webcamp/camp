$(document).ready(function() {
    $.get("/api/taxi", function(data) {
        console.log(data);
        getEvents(data);
    }).fail( function(err) {
        console.log("Error"+err);
    });

    var form = $("#eventForm");
    form.on('submit',function(ev){
        ev.preventDefault();
        var event = {};
        event.tags =  $(this).find("#tags").val().split(",");
        event.starTv =  +$(this).find("#starTv").val();
        event.endTv = +$(this).find("#endTv").val();
        event.notes = $(this).find("#notes").val();
        console.log(event);
        renderOneEvent(event);
    });
    var eventsUi = $("#events");

    eventsUi.sortable();
    eventsUi.on("click", "li", function(ev) {
        $(this).toggleClass("active");
    });
    eventsUi.on("click", "button.delete", function(ev) {
        $(this).closest("li").fadeOut('slow', function(){
            $(this).remove();
        });
    });
    function renderForm(li) {

        var emp = Handlebars.compile($("#event_editForm").html());
        var compiledForm = emp({id:li.attr('data-startTv')});
        var $formEl = $(compiledForm);

        $('.forms-container').append($formEl);
        $formEl.find("[name='tags']").val(li.attr('data-tags'));
        $formEl.find("[name='starTv']").val(li.attr('data-startTv'));
        $formEl.find("[name='endTv']").val(li.attr('data-endTv'));
        $formEl.find("[name='notes']").val(li.attr('data-notes'));

    }

    eventsUi.on("click", "button.edit", function(ev) {
        renderForm($(this).closest("li"));
    });
    eventsUi.on("click", "button.expand", function(ev) {
        ev.stopPropagation();
        $(this).toggleClass("btn-warning");
        $(this).toggleClass("btn-info");
        console.log("click button.expand "+ $(this).closest("li").find(".xxx").text());
        $(this).closest("li").find(".xxx").toggleClass("hidden");
    });

    var deleteBtn = $("#deleteBtn");
    deleteBtn.on("click", function(ev) {
        console.log("delete all");
        $("li.active").fadeOut('slow', function(){
            $(this).remove();
        });
    });

});

function getEvents(data) {
    if(data.events) {
        console.log(data.events);
        renderEvents(data.events);
    }
};

function renderOneEvent(event) {
    var emp = $("#event_template").html();
    var tt = Handlebars.compile(emp);
    var text = tt(event);
    $("#events").append(text);
}

function renderEvents(events) {

    events.forEach(function(event) {
        renderOneEvent(event);
    });
}