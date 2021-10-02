$(function() {
	$(".menuButton").off("click").on("click", function() {
		if($(".menuList").hasClass("show")) {
			$(".menuList").css({
				transform: "translate3d(-280px, 0, 0)"
			});
		} else {
			$(".menuList").css({
				transform: "translate3d(280px, 0, 0)"
			});
		}
		$(".menuList").toggleClass("show");
		$(".divBackDrop").toggleClass("show");
	});
	$(".icon-x").off("click").on("click", function() {
		$(".menuList").css({
			transform: "translate3d(-280px, 0, 0)"
		});
		$(".menuList").removeClass("show");
		$(".divBackDrop").removeClass("show");
	});
	$(".divBackDrop").off("click").on("click", function() {
		$(".menuList").css({
			transform: "translate3d(-280px, 0, 0)"
		});
		$(".menuList").removeClass("show");
		
		$(".divBackDrop").removeClass("show");
	});

	if(typeof lightbox !== 'undefined') {
		lightbox.option({
			'maxWidth': 1100,
			'positionFromTop': 10,
			'fitImagesInViewport': true
		});
	}
});

window.onscroll = function() {
	if(document.getElementById("btnGoToTop") != null) {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			document.getElementById("btnGoToTop").style.display = "block";
		} else {
			document.getElementById("btnGoToTop").style.display = "none";
		}
	}
};

function goTopFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}