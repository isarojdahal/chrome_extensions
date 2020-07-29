if (navigator.onLine) {
  if ($("#thelist>option").text() == "BBC") console.log("BBC Selected");

  $.ajax(
    "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=3317c166e05448f9ad5e97a30f6dd3de"
  )
    .done(function (data) {
      console.log("success");
      console.log("data : " + data);
      var json = $.parseJSON(JSON.stringify(data));

      for (var i = 0; i < 10; i++)
        $("#content").append(
          `# ${i + 1} <a href='${
            json.articles[i].url
          }' target='_blank'> <br><h3>${json.articles[i].title}</a></h3>${
            json.articles[i].description
          }<br/><img src='" 
            ${
              json.articles[i].urlToImage
            }' height='200' width='300'><br><br><center><a href='
            ${
              json.articles[i].url
            }' target='_blank'><button type='button' class='btn btn-primary'>Read More >></button></a></center><hr>`
        );
    })
    .fail(function () {
      console.log("error");
    })
    .always(function () {
      console.log("complete");
      $("#heading").show();
      $("#loading").empty();
    });
} else {
  $("#heading").empty();
  $("#heading").append("<br/><br/>No internet Connection<br/><br/>");
  $("#loading").empty();
}
