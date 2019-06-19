 var  trackingSection= $('#tracking-section');
      
$('#form-tracking').submit((e)=>{
    e.preventDefault();
    //variables
    var trackingNumber = $('input#tracking').val(),
        //preloader
        loader= `<div class="ocultafondoloader" id="fondoloader"><div class="loader"></div></div> `,
        //info
        errorInfo =$('#error-info');
        
    //es distinto a vacio    
    if (trackingNumber !='') {
       trackingSection.fadeOut('fast')
       $('#Content').append(loader);
      
       var     parametro ="tracking="+trackingNumber +"&username=tracking&password=tr4ck1ng";
           
           $.ajax({
               url:'webservices.php',
           
            method:'POST',
          
           data:parametro,
            
              
               success:(datos)=>{
              // console.log(datos)
              
            //si datos es igual a null   
         if (datos === null) {
              trackingSection.fadeIn('fast')
                   $('.ocultafondoloader').fadeOut('fast')
                   var errorNull =`<h5 class="error-vacio">Datos incorrectos</h5>`;
                    errorInfo.html(errorNull)
         } else {//de los contrario
             //define el tipo de dato
                  var datosTesting = typeof datos;
                      //si es distinto a un objetos o es nulo
                  if (datosTesting !== 'object'|| datosTesting === null) {
                      trackingSection.fadeIn('fast')
                   $('.ocultafondoloader').fadeOut('fast')
                   var errorEntrada =`<h5 class="error-vacio">No se han recibido datos</h5>`;
                    errorInfo.html(errorEntrada)
                  } else {// de lo contrario
                       //variables
                     var datosDeenvio = datos[0],
                    datosTracking = datos.slice(1);
                    
                    // envia los datos de la descripcion de la guia
                     $('#Hawb').text(datosDeenvio.Hawb)
                     $('#Consignatario').text(datosDeenvio.Consignatario)
                     $('#Direccion').text(datosDeenvio.Direccion)
                     $('#Comuna').text(datosDeenvio.Comuna)
                     $('#Descripcion').text(datosDeenvio.Descripcion)
                    $('#codigo').text(datosDeenvio.Hawb)
                     
                   //crea el historial
                     for (var i = datosTracking.length; i--; ) {
                        // console.log(datosTracking[i]);
                         var datosArray = datosTracking[i],
                             htmltracking = `<div class="waypoint-content ">
                           
                            <div class="waypoint-point">
                                <div class="waypoint-line"></div>
                                <div class="waypoint-date">
                                 <p class="waypoint-time">${datosArray.Fecha}</p>
                                 <p class="waypoint-hr">${datosArray.Hora}</p>
                                </div>
                                <div class="waypoint-description ">
                                    <div class="indicator-description">Estado</div>
                                    <div class="description-text">${datosArray.Estado}</div>
                                    
                                </div>
                                <div id="comment-${i}" class="comment">
                                    <div class="indicator-comment">Comentario</div>
                                    <p  class="comment-text" >
                                        ${datosArray.Comentarios}
                                    </p>
                                </div>
                            </div>
                        </div>`;
                      
                        
                      document.getElementById('timeline-content').innerHTML += htmltracking;
                      //si el comentario no esta vacio
                      if (datosArray.Comentarios !=="") {
                          var comment = `comment-${i}`;
                              document.getElementById(comment).style.display ="block"
                              //alert( comment +" "+ datosArray.Comentarios )
                      }
                     }
                   // console.log(datosTracking)
                    //muestra resultado
                   $('#resultado').show()
                   //oculta loader
                    $('.ocultafondoloader').fadeOut('fast')
                  }
                  
         }    
               
               },
               //captura errores de envio
               error:(xhr)=>{
                   trackingSection.fadeIn('fast')
                   $('#fondoloader').fadeOut('fast')
                   var errorTemplate =`<h5 class="error-vacio">An error occured:  ${xhr.status}  ${xhr.statusText}</h5>`;
                    errorInfo.html(errorTemplate)
               }
           })
    }else{
        //sino respondemos esto
        errorInfo.html('<h5 class="error-vacio">Campo vacio introduzca Nro de guia</h5>')
    }
    
  
})