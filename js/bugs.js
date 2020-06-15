// On Load
$( document ).ready(function() {
    $.getJSON("json/bugs.json", function(data) {
        console.log(data);
        var str = "<table id='table' class='table'>"
        str += "<thead class='thead thead-dark'>"
        str += "<tr>"
        str += "<th>Name</th>"
        str += "<th>Location</th>"
        str += "<th>Time</th>"
        str += "<th>Price</th>"
        str += "<th>Available Now</th>"
        str += "<th>Available Next Month</th>"
        str += "<th>Donated</th>"
        str += "</tr>"
        str += "</thead>"
        str += "<tbody>"
        
        for(var i = 0; i != data.length; i++){
            str += "<tr>"
            str += "<td>" + data[i].name + "</td>"
            str += "<td>" + data[i].location + "</td>"
            str += "<td>" + data[i].time + "</td>"
            str += "<td>" + data[i].price + "</td>"

            if(moment().month() == 0 && data[i].january == 1)
                str += "<td>Yes</td>"
            else if(moment().month() == 0 && data[i].january == 0)
                str += "<td>No</td>"
            else if(moment().month() == 1 && data[i].february == 1)
                str += "<td>Yes</td>"
            else if(moment().month() == 1 && data[i].february == 0)
                str += "<td>No</td>"
            else if(moment().month() == 2 && data[i].march == 1)
                str += "<td>Yes</td>"
            else if(moment().month() == 2 && data[i].march == 0)
                str += "<td>No</td>"
            else if(moment().month() == 3 && data[i].april == 1)
                str += "<td>Yes</td>"
            else if(moment().month() == 3 && data[i].april == 0)
                str += "<td>No</td>"
            else if(moment().month() == 4 && data[i].may == 1)
                str += "<td>Yes</td>"
            else if(moment().month() == 4 && data[i].may == 0)
                str += "<td>No</td>"
            else if(moment().month() == 5 && data[i].june == 1)
                str += "<td>Yes</td>"
            else if(moment().month() == 5 && data[i].june == 0)
                str += "<td>No</td>"
            else if(moment().month() == 6 && data[i].july == 1)
                str += "<td>Yes</td>"
            else if(moment().month() == 6 && data[i].july == 0)
                str += "<td>No</td>"
            else if(moment().month() == 7 && data[i].august == 1)
                str += "<td>Yes</td>"
            else if(moment().month() == 7 && data[i].august == 0)
                str += "<td>No</td>"
            else if(moment().month() == 8 && data[i].september == 1)
                str += "<td>Yes</td>"
            else if(moment().month() == 8 && data[i].september == 0)
                str += "<td>No</td>"
            else if(moment().month() == 9 && data[i].october == 1)
                str += "<td>Yes</td>"
            else if(moment().month() == 9 && data[i].october == 0)
                str += "<td>No</td>"
            else if(moment().month() == 10 && data[i].november == 1)
                str += "<td>Yes</td>"
            else if(moment().month() == 10 && data[i].november == 0)
                str += "<td>No</td>"
            else if(moment().month() == 11 && data[i].december == 1)
                str += "<td>Yes</td>"
            else if(moment().month() == 11 && data[i].december == 0)
                str += "<td>No</td>"
            else
                str += "<td>ERROR</td>"

            if(moment().month() == 11 && data[i].january == 1)
                str += "<td>Yes</td>"
            else if(moment().month() == 11 && data[i].january == 0)
                str += "<td>No</td>"
            else if(moment().month() == 0 && data[i].february == 1)
                str += "<td>Yes</td>"
            else if(moment().month() == 0 && data[i].february == 0)
                str += "<td>No</td>"
            else if(moment().month() == 1 && data[i].march == 1)
                str += "<td>Yes</td>"
            else if(moment().month() == 1 && data[i].march == 0)
                str += "<td>No</td>"
            else if(moment().month() == 2 && data[i].april == 1)
                str += "<td>Yes</td>"
            else if(moment().month() == 2 && data[i].april == 0)
                str += "<td>No</td>"
            else if(moment().month() == 3 && data[i].may == 1)
                str += "<td>Yes</td>"
            else if(moment().month() == 3 && data[i].may == 0)
                str += "<td>No</td>"
            else if(moment().month() == 4 && data[i].june == 1)
                str += "<td>Yes</td>"
            else if(moment().month() == 4 && data[i].june == 0)
                str += "<td>No</td>"
            else if(moment().month() == 5 && data[i].july == 1)
                str += "<td>Yes</td>"
            else if(moment().month() == 5 && data[i].july == 0)
                str += "<td>No</td>"
            else if(moment().month() == 6 && data[i].august == 1)
                str += "<td>Yes</td>"
            else if(moment().month() == 6 && data[i].august == 0)
                str += "<td>No</td>"
            else if(moment().month() == 7 && data[i].september == 1)
                str += "<td>Yes</td>"
            else if(moment().month() == 7 && data[i].september == 0)
                str += "<td>No</td>"
            else if(moment().month() == 8 && data[i].october == 1)
                str += "<td>Yes</td>"
            else if(moment().month() == 8 && data[i].october == 0)
                str += "<td>No</td>"
            else if(moment().month() == 9 && data[i].november == 1)
                str += "<td>Yes</td>"
            else if(moment().month() == 9 && data[i].november == 0)
                str += "<td>No</td>"
            else if(moment().month() == 10 && data[i].december == 1)
                str += "<td>Yes</td>"
            else if(moment().month() == 10 && data[i].december == 0)
                str += "<td>No</td>"
            else
                str += "<td>ERROR</td>"

            if(data[i].donated == 1)
                str += '<td><input type="checkbox" class="form-check-input" id="exampleCheck1" checked></td>'
            else
                str += '<td><input type="checkbox" class="form-check-input" id="exampleCheck1"></td>'
            str += "</tr>"
        }
        
        str += "</tbody>"
        str += "</table>"

        $("#table_div").html(str);
        $('#table').DataTable();
    });
});