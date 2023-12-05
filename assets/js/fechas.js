const date = new Date;
var fechaActual = date.getFullYear() + '-' + (date.getMonth()+1)+ '-'+ date.getDate();
var fechaBn = date.getFullYear() + '/' + (date.getMonth()+1)+ '/'+ date.getDate();

var fecha = fetch('http://localhost:3000/api/dates/'+ fechaActual)
    .then(res => res.json())
    .then((data)=> {
      if (data != null) {
        document.getElementById('showDate').innerHTML = `<div class="calendario_conexion" role="alert" id="Datos_Tiempo">
        <h3>Hoy es ${fechaBn}</h3>
        <p>${data.fechas}</p>
        <p>${data.celebracion}</p>
        <p>${data.descripcion}</p>
      </div>`
      }else{
        document.getElementById('showDate').innerHTML = `<div class="calendario_conexion" role="alert" id="Datos_Tiempo">
        <h3>Hoy no se celebra nada </h3>
      </div>` 
      }
    });