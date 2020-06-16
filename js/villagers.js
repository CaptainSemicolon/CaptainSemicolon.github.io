// On Load
$( document ).ready(function() {
    $.getJSON("json/villagers.json", function(data) {
        var str = "<table id='table' class='table table-striped table-hover'>"
        str += "<thead class='thead thead-dark'>"
        str += "<tr style='text-align: center'>"
        str += "<th>Photo</th>"
        str += "<th>Name</th>"
        str += "<th>Birthday</th>"
        str += "<th>Personality</th>"
        str += "<th>Species</th>"
        str += "<th>Hobbies</th>"
        str += "<th>Catchphrase</th>"
        str += "</tr>"
        str += "</thead>"
        str += "<tbody>"
        
        for(var i = 0; i != data.length; i++){
            str += "<tr style='text-align: center'>"
            str += "<td style='text-align: center'><img style='height: 100px;' src='images/NH-" + ((((data[i].Name).replace(' ', '_')).replace('\'', '27')).replace('é', 'C3A9')).replace('.', '') + "_poster.png'></td>"
            str += "<td style='text-align: center'>" + data[i].Name + "</td>"
            str += "<td style='text-align: center'>" + data[i].Birthday + "</td>"
            str += "<td style='text-align: center'>" + data[i].Personality + "</td>"
            str += "<td style='text-align: center'>" + data[i].Species + "</td>"
            str += "<td style='text-align: center'>" + data[i].Hobbies + "</td>"
            str += "<td style='text-align: center'>" + data[i].Catchphrase + "</td>"

            if(data[i].Birthday == moment().format('MMMM Do'))
                $('#birthday').html('<i class="fas fa-birthday-cake"></i>  Today is ' + data[i].Name + '\'s birthday!  <i class="fas fa-birthday-cake"></i>');
            
            str += "</tr>"
        }
        
        str += "</tbody>"
        str += "</table>"

        $("#table_div").html(str);
        $('#table').DataTable({
            "paging":   false,
            "info":     false
        });

        $('#table_filter > label > input').css('border-radius', '5px');
        $('#table_filter > label > input').css('border', '1px solid #8888');
    });
});