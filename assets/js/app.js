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


    // Local storage functions
    render();
    var birthday;

    $('#test-btn').on('click', function(){
        console.log('BUTTON CLICKED');
        localStorage.setItem('birthday', $('#test-input').val());
        window.location.href = "/fortune.html"
    })

    function render(){
        if (localStorage.getItem('birthday') !== null){
            birthday = localStorage.getItem('birthday');
            console.log(birthday);
            $('#display-birthday').text(birthday);
        }
    }
});