$(document).ready(function() {
    var $preview  = $('#preview');
    var scaleFactor = 8;
    var $source = $('#source');
    var imageHeight = $source.height();
    var $square = $('#square');
    var $gallery = $('ul');
    var $sourceContainer =  $('#source-container');
    var $sourceImg = $source.find('img');
    var containerOffset = $sourceContainer.offset();
    
    function moveSquare(position) {
        var width = $square.width();
    
        $square.css({top: position.top,
                          left: position.left});
    }
    
    function calculateSquarePosition(top, left) {
        var position = {top: top, left: left};
        
        if(left < 0) {
            position.left = 0;
        }
        
        if(left > $sourceContainer.width() - $square.width()) {
            position.left = $sourceContainer.width() - $square.width();
        }
        
        if(top < 0) {
            position.top = 0;
        }
        
        if(top > $sourceContainer.height() - $square.height()) {
            position.top = $sourceContainer.height() - $square.height();
        }
        
        return position;
    }
    
    $sourceContainer.on('mousemove', function(e) {
        var offsetY = e.pageY - containerOffset.top;
        var offsetX = e.pageX - containerOffset.left;
        var position = calculateSquarePosition(offsetY - $square.height()/2, offsetX - $square.width()/2);
        moveSquare(position);
        $preview.css('background-position', '-' + 
                     position.left * scaleFactor + 'px -' + position.top * scaleFactor +
                     'px');
    });
    
    $sourceContainer.on('mouseleave',function() {
       $square.fadeOut(300);
       $preview.fadeOut(300); 
    });
    
    $sourceContainer.on('mouseenter',function() {
       $square.fadeIn(300); 
       $preview.fadeIn(300); 
    });
    
    function setSourceImage(url){
        $sourceImg.attr('src', url);
    }
    
    function setPreviewImage(url) {
       var css = {
           'background-image': 'url('+url+')',
           'background-size': '1600px ' + ($source.height() * scaleFactor) + 'px'
       };
       console.log(css)
        $preview.css(css);
    }
    
    $gallery.on('click', 'li', function(e) {
        var $target = $(e.target);
        var url = $target.attr('src');
        setSourceImage(url);
        setPreviewImage(url)
    });

});
