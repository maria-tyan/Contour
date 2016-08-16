$(document).ready(function() {

    var resetTimer = function(startDate, endDate) {
        var setDatePart = function(selectors, num) {
            $(selectors[0]).text(Math.floor(num / 10));
            $(selectors[1]).text(num % 10);
        }

        var timerDays = $('.timer-days span');
        var timerHours = $('.timer-hours span');
        var timerMinutes = $('.timer-minutes span');
        var timerSeconds = $('.timer-seconds span');

        var dt = new Date(endDate.getTime() - startDate.getTime());
        var dtDays =  Math.floor(( endDate.getTime() - startDate.getTime() ) / (1000*60*60*24) );

        setDatePart(timerSeconds, dt.getSeconds());
        setDatePart(timerMinutes, dt.getMinutes());
        setDatePart(timerHours, dt.getHours());
        setDatePart(timerDays, dtDays);
    }

    
    var endDate = new Date(2016, 8, 1, 12, 15, 15);

    setInterval(function() {
        var startDate = new Date();
        resetTimer(startDate, endDate)
    }, 1000);

    setTimeout(function() {
        $('body').removeClass('loading')
    }, 1000);

    $('#sendForm').click(function() {
        console.log('Click');
        $("#form").validate({
            rules: {
                 name: {
                     required: true,
                     minlength: 4,
                 },
                 phone: {
                     required: true,
                     minlength: 4,
                 },
                 email: {
                     required: true
                 },
                 comment: {
                     required: false,
                     minlength: 4
                 }
             },
            submitHandler: function() {
                console.log('Send');
                $.get('http://127.0.0.1', {
                    name: $('#name').val(),
                    phone: $('#phone').val(),
                    email: $('#email').val(),
                    comment: $('#comment').val(),


                }, function(data, textStatus, jqXHR) {
                    console.log('Data');
                });
            },
        });

        
    })
});