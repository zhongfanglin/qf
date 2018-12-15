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
			})
		}
	}
}());
mongon.init();