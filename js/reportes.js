function traerReporteStatus(){
    $.ajax({
        url:"http://152.67.228.97/api/Reservation/report-status",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta)
            pintarStatus(respuesta);
        }
    });
}

function  pintarStatus(json_maquinas){

    let myTable="<table>";

        myTable+="<tr>";
        myTable+="<td>"+json_maquinas.completed+"</td>";
        myTable+="<td>"+json_maquinas.cancelled+"</td>";
        myTable+="</tr>";
  
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function traerReportesFechas(){
    $.ajax({
        url:"http://152.67.228.97/api/Reservation/report-dates/{dateOne}/{dateTwo}",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta)
            //pintarCategoria(respuesta);
        }
    });
}

function traerReportesClientes(){
    
    $.ajax({
        url:"http://152.67.228.97/api/Reservation/report-clients",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta)
            //pintarCategoria(respuesta);
        }
    });
}