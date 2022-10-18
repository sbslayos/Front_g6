// GET POST PUT DELETE


function getMachine (){
    $.ajax({
        url:"http://152.67.228.97/api/Machine/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            
            pintarMachine(respuesta);
        }
    });

}

function postMachine(){
    let cajas = {
        name:$("#name").val(),
        brand:$("#brand").val(),
        year:$("#year").val(),
        description:$("#description").val(),
        category:{id: +$("#select-categoria").val()}
    };
    console.log(cajas);
    $.ajax({
        url:"http://152.67.228.97/api/Machine/save",
        type:"POST",
        datatype:"JSON",
        contentType:"application/json; charset=utf-8",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se creo correctamente la maquina");
            window.location.reload();
    
        }
    });

}

function putMachine(){

}

function deleteMachine(){
    
}

////////////////////////////////////////////////////////

function pintarMachine(json_maquinas){
    let myTable="<table>";
    for(i=0;i<json_maquinas.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+json_maquinas[i].name+"</td>";
        myTable+="<td>"+json_maquinas[i].brand+"</td>";
        myTable+="<td>"+json_maquinas[i].year+"</td>";
        myTable+="<td>"+json_maquinas[i].description+"</td>";
        myTable+="<td>"+json_maquinas[i].category.name+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoMachine").html(myTable);

}

function getCategoria_Machine(){
    $.ajax({
        url:"http://localhost:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            let $select = $("#select-categoria");
            $.each(respuesta, function(id, name){
                $select.append('<option value='+name.id+'>'+name.name+'</option>' )
            })
        }
    });
}