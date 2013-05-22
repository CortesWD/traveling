$(document).on("ready", backvid);

function backvid()
{
	$("#background").append("<iframe id='back' src='http://player.vimeo.com/video/47360546?portrait=0&loop=1&title=0&byline=0&autoplay=1&hd_off=1' width='100%' height='100%' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe> ");

};


$("#play").on("click", vid1);

var background =
{
	background: "none"
};

var vidbta = function()
{
	$("#video").css(background);
	$("#video").replaceWith("<iframe src='http://player.vimeo.com/video/57930404?portrait=0&loop=1&title=0&byline=0&autoplay=1&hd_off=1' width='800' height='400' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe");
}

function vid1()
{
	
	$("#video").fadeOut(1000, vidbta);
}