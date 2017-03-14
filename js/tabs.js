$(document).ready(function() {
  $(".tabs-menu a").on("click",function() {
    event.preventDefault();
    $(this).parent().addClass("current");
    $(this).parent().siblings().removeClass("current");
    var tab = $(this).attr("href");
    $(".tab-content").not(tab).css("display", "none");
    $(".seeShit").not(tab).css("opacity", ".4");
    $(tab).fadeIn(500);
  });
});
