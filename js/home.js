// On Load
$( document ).ready(function() {
    //Time at the top of the page
    $('#time').html(moment().format('LLLL'));
    setInterval(function(){ $('#time').html(moment().format('LLLL')); }, 1000);
    
    //Reminder based on the day of the week
    if(moment().format('dddd') == 'Sunday')
        $('#reminder').html('Don\'t forget to purchase your turnips!');
    else if(moment().format('dddd') == 'Saturday')
        $('#reminder').html('Don\'t forget K.K Slider will be here tonight!');
    else
        $('#reminder').html('Don\'t forget to check your turnip prices!');
    
    //Calendar loading
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: [ 'dayGrid' ],
        height: 750
    });
    calendar.render();

    $("td.fc-sun:not(.fc-other-month)").append('<br><div style="background: #7536C9; text-align: center; color: white; padding: 0.1rem 0rem; margin: 0.1rem 0.5rem; border-radius: 10px;">Buy your turnips!</div>');
    $("td.fc-sat:not(.fc-other-month)").append('<br><div style="background: #36C9BE; text-align: center; color: white; padding: 0.1rem 0rem; margin: 0.1rem 0.5rem; border-radius: 10px;">K.K Slider will be here!</div>');
    $("td.fc-day:not(.fc-other-month)").first().append('<br><div style="background: #8AC936; text-align: center; color: white; padding: 0.1rem 0rem; margin: 0.1rem 0.5rem; border-radius: 10px;">First day of the month :)</div>');
    $(".fc-unthemed td.fc-today").css('background', 'none');
    $("td.fc-today > span").css('background', '#C93641');
    $("td.fc-today > span").css('border-radius', '50%');
    $("td.fc-today > span").css('color', 'white');
    $("td.fc-today > span").css('margin', '0.1rem');
});