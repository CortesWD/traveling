$(document).on("ready", backvid);

function backvid()
{
	$("background").append("<iframe src='?portrait=0&loop=1&title=0&byline=0&autoplay=1&hd_off=1' width='100%' height='100%' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe> ");
	$("#offit").on("click", turnoff);
};

function turnoff()
{

		$("#background").append(" ")
}


