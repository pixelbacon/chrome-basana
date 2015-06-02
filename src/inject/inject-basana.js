jQuery.loadCSS = function(url) {
    if (!$('link[href="' + url + '"]').length)
        $('body').append('<link rel="stylesheet" type="text/css" href="' + url + '">');
}

$(document).ready(function(){
	console.log('src/inject/inject-basana.js', 'document ready');

    setTimeout(function(){
        $.loadCSS(chrome.extension.getURL('src/inject/inject-basana.css'));
        findOpenTeams();
        $('.everything-but-team-browser').find('.team').click(function(){ findOpenTeams(); });
    }, 3000);
});

var findOpenTeams = function(){
    $('.everything-but-team-browser .team').each(function(index, element){
        console.log(element);
        setTimeout(function(){
            var isOpen = $(element).has('.zipopen').length;
            if( isOpen ){
                $(element).addClass('open').removeClass('closed');
            } else {
                $(element).addClass('closed').removeClass('open');
            }
        }, 100);
        
    });
}