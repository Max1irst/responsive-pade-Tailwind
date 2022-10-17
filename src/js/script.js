$(document).ready(function () {
    function showHide() {
        const navbar = $('#navbar');
        navbar.toggleClass('hidden');
    }
    $('.btn-burger').click(showHide);


  });
