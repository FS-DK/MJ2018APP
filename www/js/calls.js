//Turnering:
$.ajax({
  type: "GET",
  url: "https://nyside.julecup.dk/wp-json/wp/v2/page?slug=turnering",
  crossDomain: true,
  cache: false,
  success: function(result) {
    $("#turnering").html(result[0].content.rendered)
  }
});
//Indkvartering:
$.ajax({
  type: "GET",
  url: "https://nyside.julecup.dk/wp-json/wp/v2/page?slug=indkvartering",
  crossDomain: true,
  cache: false,
  success: function(result) {
    $("#indkvartering").html(result[0].content.rendered)
  }
});
//Bespisning:
$.ajax({
  type: "GET",
  url: "https://nyside.julecup.dk/wp-json/wp/v2/page?slug=bespisning",
  crossDomain: true,
  cache: false,
  success: function(result) {
    $("#bespisning").html(result[0].content.rendered)
  }
});
