var opts = {
  lines: 13, // The number of lines to draw
  length: 20, // The length of each line
  width: 10, // The line thickness
  radius: 30, // The radius of the inner circle
  corners: 1, // Corner roundness (0..1)
  rotate: 0, // The rotation offset
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#000', // #rgb or #rrggbb or array of colors
  speed: 1, // Rounds per second
  trail: 60, // Afterglow percentage
  shadow: false, // Whether to render a shadow
  hwaccel: false, // Whether to use hardware acceleration
  className: 'spinner', // The CSS class to assign to the spinner
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  top: '50%', // Top position relative to parent
  left: '50%' // Left position relative to parent
};

var img_to_load = [
    {name: 'nice image', src: 'http://31.media.tumblr.com/e9841e0e992f89704b7d7c9cae19b135/tumblr_n7q7yxJx5f1r2ia6mo1_250.jpg'},
    {name: 'hi', src: 'http://38.media.tumblr.com/4a5e854618cf0552f3ff50daf776dfe9/tumblr_n7q5liA3061r2ia6mo1_250.jpg'},
    {name: 'ayal', src: "http://38.media.tumblr.com/10000493e77cbb1b461fa7e7ea070261/tumblr_n7puprG0QA1r2ia6mo1_250.jpg"}
];

var loaded_images = 0;

var createImageObject = function(imgobj) {
    var img = $('<img>')
            .css({display:'none'})
            .attr('title', imgobj.name)
            .attr('src', imgobj.src);

    var wrp = $('<div>').addClass('wrapper')
            .append(img);

//    var wrp = $('<div class="wrapper"><img style="display:none" src="' + imgobj.src + '" title="' + imgobj.name + '" /></div>');

    img.load(function () {
        loaded_images ++;
        $(this).show().parents('.wrapper').find('.spinner').remove();
        if (loaded_images == img_to_load.length) {

        }
        else {

        }
    });
    return wrp;
};


$(function(){
    $.each(img_to_load, function(i, imgdata){
        var imageObject = createImageObject(imgdata);
        $('body').append(imageObject);
        var spinner = new Spinner(opts).spin(imageObject[0]);
    });
});
