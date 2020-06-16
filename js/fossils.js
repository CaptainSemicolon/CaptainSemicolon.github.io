// On Load
$( document ).ready(function() {
    $.getJSON("json/fossils.json", function(data) {
        var str = "<table id='table' class='table table-striped table-hover'>"
        str += "<thead class='thead thead-dark'>"
        str += "<tr style='text-align: center'>"
        str += "<th>Name</th>"
        str += "<th>Price</th>"
        str += "<th>Donated</th>"
        str += "</tr>"
        str += "</thead>"
        str += "<tbody>"
        
        for(var i = 0; i != data.length; i++){
            str += "<tr style='text-align: center'>"
            str += "<td style='text-align: left'>" + data[i].name + "</td>"
            str += "<td style='text-align: right'>" + data[i].price + "</td>"

            if(data[i].donated == 1)
                str += '<td><input type="checkbox" class="form-check-input" onclick="updateJSON(' + data[i].id + ')" checked></td>'
            else
                str += '<td><input type="checkbox" class="form-check-input" onclick="updateJSON(' + data[i].id + ')"></td>'
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