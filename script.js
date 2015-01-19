// Code goes here
$(window, document, undefined).ready(function() {
   
   var input= $('input').get();
   for (var i = 0; i < input.length; i++){
	   if ($('#' + input[i].id).val())
			$('#' + input[i].id).addClass('used');
	   else{
			$('#' + input[i].id).removeClass('used');
			$('#' + input[i].id).blur(function() {
				var $this = $(this);
				if ($this.val())
					$this.addClass('used');
				else
					$this.removeClass('used');
			});
	   }	
   }
  /*
  var $ripples = $('.ripples');

  $ripples.on('click.Ripples', function(e) {

    var $this = $(this);
    var $offset = $this.parent().offset();
    var $circle = $this.find('.ripplesCircle');

    var x = e.pageX - $offset.left;
    var y = e.pageY - $offset.top;

    $circle.css({
      top: y + 'px',
      left: x + 'px'
    });

    $this.addClass('is-active');

  });

  $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function(e) {
  	$(this).removeClass('is-active');
  });
  */

});
