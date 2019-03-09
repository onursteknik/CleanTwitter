function ClTwCleanTimeline() {
  $(".tweet-context").each(function (i, v) {
    $(v).parent().parent().parent().remove();
  });
}

setTimeout(function () {
  ClTwCleanTimeline();
}, 1000);

$(document).scroll(function () {
  ClTwCleanTimeline();
});

$(".js-new-items-bar-container").click(function(){
  setTimeout(function () {
    ClTwCleanTimeline();
  }, 500);
});
