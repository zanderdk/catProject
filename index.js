$(function () {
    
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = "boot";
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css';
    link.media = 'all';
    head.appendChild(link);

    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = "boot";
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css';
    link.media = 'all';
    head.appendChild(link);


    $.getScript("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js", function(){
        $.getScript("https://vsn4ik.github.io/bootstrap-checkbox/dist/js/bootstrap-checkbox.min.js", function(){
            var content = $("#content");
            $.get("https://rawgit.com/zanderdk/catProject/master/template.html", function(data){
                content.append(data);
                $(':checkbox').checkboxpicker();
                func();
            });
        });
    });
});


var x;
var alex;
var aleks;

function func() {
    $.get( "http://192.168.1.31/state", function( data ) {
        alex = $("#alex");
        aleks = $("#aleks");
        if (data.alex) {
            alex.prop('checked', true);
        }
        if(data.aleks) {
            aleks.prop('checked', true);
        }
        alex.change(function() {
            if(alex[0].checked) {
                $.post("http://192.168.1.31/enable", {name: 0, flag: 1});
            } else { 
                $.post("http://192.168.1.31/enable", {name: 0, flag: 0});
            }
        });

        if(data.aleks) {
            aleks.prop('checked', true);
        }
        aleks.change(function() {
            if(aleks[0].checked) {
                $.post("http://192.168.1.31/enable", {name: 1, flag: 1});
            } else { 
                $.post("http://192.168.1.31/enable", {name: 1, flag: 0});
            }
        });


    });
}
