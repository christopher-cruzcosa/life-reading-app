$(function () {

  var queryUrl = "https://tarot.howlcode.com/api/v1/spreads/three_cards";

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

    $("#past-img").attr("src",data[0].image);
    $("#present-img").attr("src",data[1].image);
    $("#future-img").attr("src",data[2].image);
    
  });

  
    // send ajax request for horoscope content
    $.ajax({
      type: 'POST',
      url: 'https://aztro.sameerkumar.website?sign=aries&day=today',
      success: function (data) {
        console.log(data);
        
        $("#horoscope-title").text(data.compatibility);

        $("#horoscope-content").text(data.description);

        $("#horoscope-luckynum").text("Your Lucky Number: " + data.lucky_number);

        $("#horoscope-color").text("Color of the Day: " + data.color);
    
        $("h5").text(data.current_date);
        
      }
    });
  });
  // $(document).on("click", ".card-content", function () {
  //   var apiKey = "Jhso00dGJXyVhe33ctHvhvmbXAf2BnacGdVgSpbO"
  //   var queryUrl = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey;

  //   // send ajax request for tarot cards
  //   $.ajax({
  //     url: queryUrl,
  //     method: "GET",
  //   }).then(function (data) {
  //     // console.log(data);
     
  //   });
  // });



  // Local storage functions
  render();
  var birthday;
  //Re-directs to page two and saves submitted birthday
  $('#submit-btn').on('click', function (event) {
    event.preventDefault();
    if ($('#dob-input').val() === "") {
      $('#invalid').text('*Please enter a valid birth date to proceed')
    } else {
      localStorage.setItem('birthday', $('#dob-input').val());
      window.location.href = "https://christopher-cruzcosa.github.io/life-reading-app/fortune.html"
    };
  })

  //The birthday will whow up here, you can use it to determine what horoscope is displayed
  function render() {
    if (localStorage.getItem('birthday') !== null) {
      birthday = localStorage.getItem('birthday');
      // console.log(birthday);
    }
  }

  var cardCount = 0;

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

  change_visible();

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



