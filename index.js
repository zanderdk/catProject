$(function () {
    
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = "boot";
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css';
    link.media = 'all';
    head.appendChild(link);

    $.getScript("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js", function(){

        var content = $("#content");
        $.get("template.html", function(data){
            content.children("div:first").append(data);
        });

    });


});
