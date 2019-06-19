<?php
 $tranking=$_POST['tracking'];
 $pass=$_POST['password'];
 $user=$_POST['username'];
 
 


 
   
 if( $user=="tracking" && $pass=="tr4ck1ng" ){
    //echo 'ok';
    if($tranking==="SCL1091672674"){
    //empaquetamos nuestros arrays en un solo objeto
    $datos[]=array("Hawb"=>"SCL1091672674","Consignatario"=>"TRANS","Direccion"=>"LORD COCHRANE 309","Comuna"=>"SANTIAGO","Descripcion"=>"CALZADO");
    $datos[]=array("Estado"=>"INGRESO MANIELEC","Fecha"=>"13/04/2018","Hora"=>"14:09","Comentarios"=>"");
    $datos[]=array("Estado"=>"ENTREGA FINAL  POD","Fecha"=>"06/04/2018","Hora"=>"14:23","Comentarios"=>"CO. STAMP COMD. EDIF. ISIDORA ");
    $datos[]=array("Estado"=>"REPARTO FINAL CILIENTE","Fecha"=>"06/04/2018","Hora"=>"13:47","Comentarios"=>"");
    $datos[]=array("Estado"=>"CENTRAL DISTRIBUCION","Fecha"=>"20/03/2018","Hora"=>"17:41","Comentarios"=>"");
     $datos[]=array("Estado"=>"RUTA A CENTRO LOGISTICO","Fecha"=>"20/03/2018","Hora"=>"16:31","Comentarios"=>"");
      $datos[]=array("Estado"=>"CHECKED IN","Fecha"=>"20/03/2018","Hora"=>"16:26","Comentarios"=>"");
       $datos[]=array("Estado"=>"LLEGADA TERMINAL","Fecha"=>"20/03/2018","Hora"=>"16:26","Comentarios"=>"");
        $datos[]=array("Estado"=>"INGRESO MANIELEC","Fecha"=>"20/03/2018","Hora"=>"16:12","Comentarios"=>"");
    } 
   // codificamos a json
    header('Content-type: aplication/json');
    echo json_encode($datos);
}



// [{"Hawb":"SCL1091672674","Consignatario":"TRANS","Direccion":"LORD COCHRANE 309","Comuna":"SANTIAGO","Descripcion":"CALZADO"},
//      {"Estado":"INGRESO MANIELEC","Fecha":"13/04/2018","Hora":"14:09","Comentarios":""},
//      {"Estado":"ENTREGA FINAL  POD","Fecha":"06/04/2018","Hora":"14:23","Comentarios":"CO. STAMP COMD. EDIF. ISIDORA "},
//      {"Estado":"REPARTO FINAL CILIENTE","Fecha":"06/04/2018","Hora":"13:47","Comentarios":""},
//      {"Estado":"CENTRAL DISTRIBUCION","Fecha":"20/03/2018","Hora":"17:41","Comentarios":""},
//      {"Estado":"RUTA A CENTRO LOGISTICO","Fecha":"20/03/2018","Hora":"16:31","Comentarios":""},
//  {"Estado":"CHECKED IN","Fecha":"20/03/2018","Hora":"16:26","Comentarios":""},
//  {"Estado":"LLEGADA TERMINAL","Fecha":"20/03/2018","Hora":"16:26","Comentarios":""},
//     {"Estado":"INGRESO MANIELEC","Fecha":"20/03/2018","Hora":"16:12","Comentarios":""}]`;
    
?>

