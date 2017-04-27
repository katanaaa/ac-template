var jQueryScriptOutputted = false;
function initJQuery(cb) {
	//if the jQuery object isn't available
	if (typeof(jQuery) == 'undefined') {
		if (! jQueryScriptOutputted) {
			//only output the script once..
			jQueryScriptOutputted = true;
			var jq = document.createElement("script");
			jq.type = "text/javascript";
			jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js";
			document.getElementsByTagName("head")[0].appendChild(jq);
			console.log("Added jQuery!");
		}
		setTimeout("initJQuery(" + cb + ")", 50);
	} else {
    $("document").ready(function($){
      $("#log-reg").click(function(){
          $('#pop-login').modal('hide');
          $('#pop-register').modal('show');
        });
        $("#reg-log").click(function(){
          $('#pop-register').modal('hide');
          $('#pop-login').modal('show');
        });
    });
  }
}

window.onload = initJQuery(function() {});

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});

$(function(){
  $('[rel=popover]').popover({
    html : true,
    content: function() {
      return $('#popover_content_wrapper').html();
    }
  });
});

/* Fixed header appears when scroll up, disapear when scrol down /**/
var c = 0;
$(window).on("scroll", function() {
		$(window).scrollTop() < c ? "fixed" != $("header").css("position") && ($("header").css({
				position: "fixed",
				top: -$("header").outerHeight(),
				backgroundColor: "#fff"
		}), $("header").animate({
				top: "0px"
		}, 500), $("everything").css("padding-top", $("header").outerHeight())) : ($("header").css({
				position: "absolute",
				top: "0px"
		}), $("everything").css("padding-top", "0px")), c = $(window).scrollTop()
});
/**/
