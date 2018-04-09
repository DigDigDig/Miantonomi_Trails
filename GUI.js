"use strict";
/////////////////////////////// GUI STUFF //////////////////////////////////////////
var legendVis = true;

$("#menu").css("visibility", "visible");
$("#legend").css("visibility", "visible");
$("#popupIcon").css("visibility", "visible");
$("#legendIcon").css("visibility", "visible");
$("#labelIcon").css("visibility", "visible");


$('#menu li').click(function () {
    //Hide all other drop downs that are visible, and remove the class 'selected'
    $(this).siblings('.selected').removeClass('selected').find('ul:visible').slideUp('fast');

    //Show/Hide dropdowns
    $(this).toggleClass('selected');
    $('ul:first', this).stop(true, true).slideToggle('fast');
});

$('ul.nojs *').click(function (e) {
    e.stopPropagation();
});

$('#legclosebtn').click(function () {
    legendVis = false;
    $("#legend").css("position", "relative");
    $("#legendIcon").css("opacity", "0.9");
    app.queryMarker.visible = false;
    app.highlightFeature(null, null);
});
$('#legendIcon').click(function () {
    if (!legendVis) {
        $("#legend").css("position", "absolute");
        $("#legendIcon").css("opacity", "0.6");
        legendVis = true;
    } else {
        $("#legend").css("position", "relative");
        $("#legendIcon").css("opacity", "0.9");
        legendVis = false;
    }
    app.queryMarker.visible = false;
    app.highlightFeature(null, null);
});

$('#popupIcon').click(function () {
    app.showInfo();
    app.queryMarker.visible = false;
    app.highlightFeature(null, null);
});

$('#labelIcon').click(function () {
    if (!app.labelVisibility) {
        $("#labelIcon").css("opacity", "0.6");
    } else {
        $("#labelIcon").css("opacity", "0.9");
    }
    app.setLabelVisibility(!app.labelVisibility);
    app.queryMarker.visible = false;
    app.highlightFeature(null, null);
});

$(function () {
    $("#popup, #box, #menu, #legend").draggable();
    $("div, popupbar").disableSelection();
    $("#menu").menu();
    $("#legend").tabs();
    $("#legend" ).resizable();
    $('.inactive').click(function () {
        $(this).toggleClass('inactive');
        $(this).toggleClass('active');
    });
    $('.active').click(function () {
        $(this).toggleClass('active');
        $(this).toggleClass('inactive');
    });
    $('.inactiveSet').click(function () {
        $(this).removeClass('inactiveSet');
        $(this).addClass('activeSet');
        $(this).closest('li').siblings().find('div').removeClass('activeSet').addClass('inactiveSet');
    });
    $('.activeSet').click(function () {
        $(this).removeClass('inactiveSet');
        $(this).addClass('activeSet');
        $(this).closest('li').siblings().find('div').removeClass('activeSet').addClass('inactiveSet');
    });

});
