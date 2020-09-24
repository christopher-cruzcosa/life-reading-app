$(function () {

    
    $(document).on("click", ".card", function () {
     
        var queryUrl = "https://tarot.howlcode.com/api/v1/cards";
  
        // send ajax request for tarot cards
        $.ajax({
          url: queryUrl,
          method: "GET",
        }).then(function (data) {
          // console.log(data[0].image);
          // Log the tarot card data in the console
        });
      });
    $(document).on("click", ".card-image", function () {
     
        // send ajax request for tarot cards
        $.ajax({
          type: 'POST',
          url: 'https://aztro.sameerkumar.website?sign=aries&day=today',
          success: function (data) {
              // console.log(data);
          }
      });
      });
    $(document).on("click", ".card-content", function () {
        var apiKey = "Jhso00dGJXyVhe33ctHvhvmbXAf2BnacGdVgSpbO"
        var queryUrl = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey;
  
        // send ajax request for tarot cards
        $.ajax({
          url: queryUrl,
          method: "GET",
        }).then(function (data) {
          console.log(data);
          // Log the tarot card data in the console
        });
      });
      


    // Local storage functions
    render();
    var birthday;

    $('#test-btn').on('click', function(){
        console.log('BUTTON CLICKED');
        localStorage.setItem('birthday', $('#test-input').val());
        window.location.href = "https://christopher-cruzcosa.github.io/life-reading-app/fortune.html"
    })

    function render(){
        if (localStorage.getItem('birthday') !== null){
            birthday = localStorage.getItem('birthday');
            // console.log(birthday);
            $('#display-birthday').text(birthday);
        }
    }

    var cardCount = 3;

    function change_visible () {
      if (cardCount > 2){
      $("#fortune").attr("class","row");
      $("#horoscope").attr("class","row");
      $("#choiceRow1").attr("class","row hidden");
      $("#choiceRow2").attr("class","row hidden");
      $("#page-two-header2").attr("class","hidden");
      }
      return;

    };

    change_visible();

    
});

