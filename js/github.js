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
        $.ajax({
            url: 'http://github.com/api/v2/json/repos/show/' + $.gituser,
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                console.log(data);
                if (data.repositiories) {
                    var repos = data.repositories;
                    var content = '<ul>';
                    for(var i=0;i!=repos.length;i++) {
                        content = content + '<li><h3>'+repos[i].name+'</h3><p>'+repos[i].description+'</p></h3>';
                    }
                    $(this).html(content);
                }
            }
        });
    }

})(jQuery);