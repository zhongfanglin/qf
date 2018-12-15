var mongon=(function(){
	return {
		init:function(){
			this.event();
		},
		event:function(){
			const _this=this;
			$(function(){
				$('button').click(function(){
					$('.box').slideToggle();
				})
				$('.box1').mouseenter(function(){
					$(this).css('background','red');
				})
				$('.box1').mouseleave(function(){
					$(this).css('background','brown');
				})
				$('.box2').mouseenter(function(){
					$(this).css('background','lawngreen');
				})
				$('.box2').mouseleave(function(){
					$(this).css('background','blueviolet');
				})
			})
		}
	}
}());
mongon.init();