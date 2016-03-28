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
        $.getScript("http://vsn4ik.github.io/bootstrap-checkbox/dist/js/bootstrap-checkbox.min.js", function(){
            var content = $("#content");
            $.get("https://cdn.rawgit.com/zanderdk/catProject/master/template.html", function(data){
                content.append(data);
            });
        });
    });
});
