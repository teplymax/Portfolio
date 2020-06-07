$("#email").click(() => {
  $(".email-modal").show(400);
  navigator.clipboard.writeText("teplymax@gmail.com");
});
$(".email-modal__btn").click(() => {
  $(".email-modal").hide(400);
});
$("#btn-header").click((e) => {
  let offsetTop = $(".portfolio").offset().top;
  $("body,html").animate({ scrollTop: offsetTop }, 1000);
});
