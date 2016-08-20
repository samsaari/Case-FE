$(function() {

    $('#rssKarpat').FeedEk({
        FeedUrl: 'http://www.iltasanomat.fi/rss/sm-liiga.xml',
        MaxCount: 3,
        ShowDesc: false,
        ShowPubDate: false,
        DescCharacterLimit: 100,
        TitleLinkTarget: '_blank',
    });

    $('#rssKaleva').FeedEk({
        FeedUrl: 'http://www.kaleva.fi/rss/show/',
        MaxCount: 3,
        ShowDesc: false,
        ShowPubDate: false,
        DescCharacterLimit: 100,
        TitleLinkTarget: '_blank',
    });
    
    $.simpleWeather({
      location: 'Oulu, FI',
      woeid: '',
      unit: 'c',
      success: function(weather) {
        html = '<img src="'+weather.image+'" alt="Weather image">'+'<div class="weatherDetails">'+
        '<h1>'+weather.temp+'&deg;'+weather.units.temp+'</h1>'+'<h2>'+weather.forecast[0].date+'</h2>'+'</div>'+
        '<div class="weatherComing"> <table class="table table-bordered"> <thead> <tr> <th>'+weather.forecast[1].day+'</th>'+
        '<th>'+weather.forecast[2].day+'</th> <th>'+weather.forecast[3].day+'</th></tr></thead><tbody><tr><td><img src="'+
        weather.forecast[1].thumbnail+'" alt="Weather image">'+weather.forecast[1].high+'&deg;'+weather.units.temp+'</td><td><img src="'+
        weather.forecast[2].thumbnail+'" alt="Weather image">'+weather.forecast[2].high+'&deg;'+weather.units.temp+'</td><td><img src="'+
        weather.forecast[3].thumbnail+'" alt="Weather image">'+weather.forecast[3].high+'&deg;'+weather.units.temp+'</td></tr></tbody></table>';

        $("#weather").html(html);
      },
      error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
      }
    });
});
