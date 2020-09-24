$(function () {
   
    $(document).on("click", ".btn", function () {
     
      var queryUrl = "https://tarot.howlcode.com/api/v1/cards";

      // send ajax request for tarot cards
      $.ajax({
        url: queryUrl,
        method: "GET",
      }).then(function (data) {
        console.log(data);
        // Log the tarot card data in the console
      });
    });
  });
  
