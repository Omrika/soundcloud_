$(document).ready(function(){
    $('#submit').click(function(){
        // var trackUrl = $('#text').val();
        // var Client_ID = YOUR_CLIENT_ID;
        // $.get(
        //     'http://api.soundcloud.com/resolve.json?url=' + trackUrl + '&client_id=' + Client_ID, 
        //     function (result) {//returns json, we only need id in this case
        //         $("#player").html('<iframe width="100%" height="100%" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/' + result.id +'&amp;color=ff6600&amp;auto_play=false&amp;show_artwork=true"></iframe>');//the iframe is copied from soundcloud embed codes
        //     }
        // );
        SC.oEmbed($('#text').val(), function(playlist){
            $('#player').html(playlist.html)
        });
    })
});
