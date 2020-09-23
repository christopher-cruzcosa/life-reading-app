$(function () {

    





















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