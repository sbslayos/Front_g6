// GET POST PUT DELETE

function getReservaciones (){
    $.ajax({
        url:"http://152.67.228.97/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            
            pintarReservaciones(respuesta);
        }
    });

}

function postReservaciones(){
    let cajas = {
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        status:$("#status").val(),
        client:{idClient: +$("#select-client").val()},
        machine:{id: +$("#select-machine").val()}
    };
    $.ajax({
        url:"http://152.67.228.97/api/Reservation/save",
        type:"POST",
        datatype:"JSON",
        contentType:"application/json; charset=utf-8",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se creo correctamente la reserva");
            window.location.reload();
    
        }
    });


}

function putReservaciones(idDesdeBoton){
    console.log(idDesdeBoton);
    if($("#startDate").val().length==0 || $("#devolutionDate").val().length==0 ){
        alert("Todos los campos son obligatorios");
    }else{
    
    let cajas = {
        idReservation:idDesdeBoton,
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        status:$("#status").val(),
        client:{idClient: +$("#select-client").val()},
        machine:{id: +$("#select-machine").val()}
    };
    $.ajax({
        url:"http://152.67.228.97/api/Reservation/update",
        type:"PUT",
        datatype:"JSON",
        contentType:"application/json",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se actualizo correctamente la informacion de la reservation");
            window.location.reload();
    
            }
        });
    }
}

function deleteReservaciones(data){
    console.log(data);
    let myData={
        id:data
    };
    $.ajax({
        url:"http://152.67.228.97/api/Reservation/"+data,
        type:"DELETE",
        datatype:"JSON",
        data: JSON.stringify(myData),
        contentType:"application/json",
        success:function(respuesta){
            alert("se borro correctamente la reservacion");
            window.location.reload();
        }
    });

}
//////////////////////////////////////////////
function  pintarReservaciones(json_maquinas){

    let myTable="<table>";
    for(i=0;i<json_maquinas.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+json_maquinas[i].startDate+"</td>";
        myTable+="<td>"+json_maquinas[i].devolutionDate+"</td>";
        myTable+="<td>"+json_maquinas[i].status+"</td>";
        myTable+="<td>"+json_maquinas[i].machine.name+"</td>";
        myTable+="<td>"+json_maquinas[i].client.name+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

///////////////////////////////////////////////

function getClient_Reservation(){
    $.ajax({
        url:"http://152.67.228.97/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            let $select = $("#select-client");
            $.each(respuesta, function(id, name){
                $select.append('<option value='+name.idClient+'>'+name.name+'</option>' )
            })
        }
    });
}

function getMachine_Reservation(){
    $.ajax({
        url:"http://152.67.228.97/api/Machine/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            let $select = $("#select-machine");
            $.each(respuesta, function(id, name){
                $select.append('<option value='+name.id+'>'+name.name+'</option>' )
            })
        }
    });
    
}