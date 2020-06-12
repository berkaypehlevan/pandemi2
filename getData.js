$.getJSON(
  "https://coronavirus-19-api.herokuapp.com/countries/turkey",
  function (data) {
    var vaka = `${data.cases}<br>`;
    var kayip = `${data.deaths}<br>`;
    var iyilesen = `${data.recovered}<br>`;
    $(".vaka").html(vaka);
    $(".kayip").html(kayip);
    $(".iyilesen").html(iyilesen);
  },
);
$.getJSON(
  "https://coronavirus-19-api.herokuapp.com/all",
  function (data) {
    var vaka = `${data.cases}<br>`;
    var kayip = `${data.deaths}<br>`;
    var iyilesen = `${data.recovered}<br>`;
    $(".genelvaka").html(vaka);
    $(".genelkayip").html(kayip);
    $(".geneliyilesen").html(iyilesen);
  },
);
