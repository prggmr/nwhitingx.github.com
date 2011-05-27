/**
 * Talks to Github!
 */
(function($){

    /**
     * teh git user!
     */
    $.gituser = 'nwhitingx';

    /**
     * Creates a list of your git repos!
     */
    $.fn.gitrepos = function() {
        var dom = $(this);
        $.getJSON("http://github.com/api/v2/json/repos/show/"+$.gituser+"?callback=?", function(data) {
            if (data.repositories) {
                var repos = data.repositories;
                 var content = '<ul>';
                for(var i=0;i!=repos.length;i++) {
                    console.log(repos[i]);
                    console.log()
                    content = content + '<li><h3><a href="'+repos[i].url+'" target="_blank">'+repos[i].name+'</a></h3>';
                    content =content + '<h4>';
                    if (repos[i].language) {
                        content =content + ' it is developed in <span>'+repos[i].language+'</span> <br />';
                    }
                    content =content + ' it has <span>'+(parseInt(repos[i].size)*100)+'</span> bytes of codes written <br />';
                    content =content + ' it was last updated <span>'+repos[i].pushed_at+'</span> <br />';
                    content =content + ' it contains <span>'+repos[i].open_issues+'</span>  open bugs<br />';
                    content =content + ' it being watched by <span>'+repos[i].watchers+'</span>  others';
                    content =content + '</h4>';
                    //dom.append('<h4>Language : <span>')
                    content =content + '<p>'+repos[i].description+'</p>';
                }
                content = content + '</ul>';
                dom.append(content);
            }
        });
    }

})(jQuery);