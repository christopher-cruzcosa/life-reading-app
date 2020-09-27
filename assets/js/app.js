

var queryUrl = "https://tarot.howlcode.com/api/v1/spreads/three_cards";
var sign;
var queryUrlAztro;
var cardCount = 0;
$("#horoscopeDate").text(moment().format('dddd, MMMM Do'));

// send ajax request for tarot cards
$.ajax({
  url: queryUrl,
  method: "GET",
}).then(function (data) {
  // console.log(data);

  $("#cardNamePast").text(data[0].name);
  $("#cardFortunePast").text(data[0].summary);

  $("#cardNamePresent").text(data[1].name);
  $("#cardFortunePresent").text(data[1].summary);

  $("#cardNameFuture").text(data[2].name);
  $("#cardFortuneFuture").text(data[2].summary);

  $("#past-img").attr("src", data[0].image);
  $("#present-img").attr("src", data[1].image);
  $("#future-img").attr("src", data[2].image);

});

// send ajax request for horoscope content
function getHoroscopeData() {
  $.ajax({
    type: 'POST',
    url: queryUrlAztro,
    success: function (data) {
      // console.log(data);

      $("#horoscope-title").text(sign);
      $("#horoscopeImage").attr("src", "" + "./assets/images/zodiac-signs/" + sign + ".jpg");
      $("#horoscopeImage").attr("alt", sign + " image");


      $("#horoscope-content").text(data.description);

      $("#horoscope-luckynum").text("Your Lucky Number: " + data.lucky_number);

      $("#horoscope-color").text("Your Color of the Day: " + data.color);

      // $("h5").text(data.current_date);

    }
  });
};

function render() {
  if (localStorage.getItem('astroSign') !== null) {
    console.log(localStorage.getItem('astroSign'));
    sign = localStorage.getItem('astroSign');
    queryUrlAztro = "https://aztro.sameerkumar.website?sign=" + sign + "&day=today"
    console.log(sign);
    getHoroscopeData();
    // console.log(birthday);
  }
};

render();


var apiKey = "Jhso00dGJXyVhe33ctHvhvmbXAf2BnacGdVgSpbO"
var nasaQueryUrl = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey;

// send ajax request for tarot cards
$.ajax({
  url: nasaQueryUrl,
  method: "GET",
}).then(function (data) {
  console.log(data);

  $("#nasaPic").attr("src", data.url);

});



// Local storage functions
//Re-directs to page two and saves submitted sign
$('#submit-btn').on('click', function (event) {
  event.preventDefault();
  if ($('#dob-input').val() === null) {
    $('#invalid').text('*Please enter an astrological sign to continue')
  } else {
    localStorage.setItem('astroSign', $('#dob-input').val());
    console.log(localStorage.getItem('astroSign'));
    window.location.href = "./fortune.html";
  };
})

//The sign will whow up here, you can use it to determine what horoscope is displayed


function change_visible() {
  if (cardCount > 2) {
    $("#fortune").attr("class", "row");
    $("#horoscope").attr("class", "row");
    $("#choiceRow1").attr("class", "row hidden");
    $("#choiceRow2").attr("class", "row hidden");
    $("#page-two-header2").attr("class", "hidden");
  }
  return;
};


$('.tarot').on('click', function (event) {
  event.preventDefault();
  $(this).attr("class", "tarot hidden");
  cardCount++;
  if (cardCount === 3) {
    $("#headerEl").text("YOUR FATE IS REVEALED!");
    $("#headerEl").parent().attr("class", "accent-3 grey-text text-lighten-5");
  }
  change_visible();
  $('html, body').animate({ scrollTop: 0 }, 'fast');
});


$(document).ready(function () {
  $('select').material_select();
});

