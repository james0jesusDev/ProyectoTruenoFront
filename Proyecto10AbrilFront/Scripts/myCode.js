
//$(function () {
//    CargarDatosJugador();
//});

//function CargarDatosJugador() {
//    $("#listaJugadores").css("display", "");
//    /*$("#editado").css("display", "none");*/

//    $.ajax({
//        type: "GET",
//        url: "https://localhost:7074/api/Jugadores/",
//        success: function (data) {
//            $('#tableBodyJugadores').empty();
//            data.forEach(function (item) {
//                var row = '<tr>' +
//                    '<td>' + item.jugadorId + '</td>' +
//                    '<td>' + item.jugadorApellido + '</td>' +
//                    '<td>' + item.jugadorNombre + '</td>' +
//                    '<td>' + item.jugadorSueldo + '</td>' +
//                    '<td>' + (item.lesionado === 0 ? 'Sí' : (item.lesionado === 1 ? 'No' : 'En Pruebas')) + '</td>' +
//                    '<td>' + item.jugadorUser + '</td>' +
//                    '<td><img src="' + item.imageUrl + '" class="img-thumbnail" alt="Imagen del Jugador"></td>' +
//                    '</tr>';
//                $('#tableBodyJugadores').append(row);
//            });
//        }
//    });
//}

//function borrarJugador(id) {
//    $.ajax({
//        type: "DELETE",
//        url: "https://localhost:7074/api/Jugadores/" + id,
//        success: function (data) {
//            getData();
//        },
//        error: function () {
//            alert('Error al borrar el jugador.');
//        }
//    });
//}

//function cancelarEdicion() {
//    $("#editado").css("display", "none");
//    $("#lista").css("display", "");
//}

//function editarJugador(id) {
//    $.ajax({
//        type: "GET",
//        url: "https://localhost:7074/api/Jugadores/" + id,
//        success: function (data) {
//            $('#editJugadorId').val(data.jugadorId);
//            $('#editJugadorNombre').val(data.jugadorNombre);
//            $('#editJugadorApellido').val(data.jugadorApellido);
//            $('#editJugadorSueldo').val(data.jugadorSueldo);
//            $('#editJugadorLesionado').val(data.lesionado.toString());
//            $('#editJugadorUser').val(data.jugadorUser);
//            // Corregir la URL de la imagen para que apunte al backend adecuado
//            var imageUrl = data.imageUrl.startsWith('http') ? data.imageUrl : 'https://localhost:7074/images/' + data.imageUrl;
//            $('#editImagenJugador').attr('src', imageUrl);
//            $('#editJugadorImg').val(data.imageUrl);

//            $("#lista").css("display", "none");
//            $('#editado').css("display", "");
//        }
//    });
//}

//function Guardar() {
//    var id = $('#editJugadorId').val();
//    var nombre = $('#editJugadorNombre').val();
//    var apellido = $('#editJugadorApellido').val();
//    var sueldo = $('#editJugadorSueldo').val();
//    var lesionado = $('#editJugadorLesionado').val() === '0' ? 0 : ($('#editJugadorLesionado').val() === '1' ? 1 : 2);

//    // Obtener la URL de la imagen del atributo src del elemento de imagen
//    var imagenUrl = $('#editImagenJugador').attr('src');

//    // Extraer el nombre del archivo de la URL de la imagen
//    var imageName = imagenUrl.substring(imagenUrl.lastIndexOf('/') + 1);

//    var user = $('#editJugadorUser').val(); // Obtener el valor del campo de usuario

//    var jugador = {
//        jugadorId: id,
//        jugadorNombre: nombre,
//        jugadorApellido: apellido,
//        jugadorSueldo: sueldo,
//        lesionado: lesionado,
//        imageUrl: imageName, // Guardar solo el nombre del archivo en la base de datos
//        jugadorUser: user
//    };

//    $.ajax({
//        type: "PUT",
//        url: "https://localhost:7074/api/Jugadores/" + jugador.jugadorId,
//        data: JSON.stringify(jugador),
//        dataType: "json",
//        contentType: "application/json;charset=utf-8",
//        success: function (response) {
//            alert('Jugador actualizado correctamente.');

//            // Limpiar la tabla antes de cargar los datos actualizados
//            $('#tableBody').empty();

//            // Recargar los datos en la tabla
//            getData();

//            // Ocultar el formulario de edición y mostrar la lista
//            $("#editado").css("display", "none");
//            $("#lista").css("display", "");
//        },
//        error: function () {
//            alert('Error al actualizar el jugador.');
//        }
//    });
//}







//@*

//    Aqui te dejo una vision de como creo que deberia quedarnos el myCode, llamando a los controladores de las 6 tablas

//$(function () {
//    // Llamar a la función getData para cargar los datos iniciales de todas las entidades
//    getData('abonados');
//    getData('categorias');
//    getData('jugadores');
//    getData('gastos');
//    getData('cuerpoTecnico');
//    getData('productos');
//});

//// Función genérica para obtener los datos de una entidad específica
//function getData(entidad) {
//    // Determinar el contenedor y otros elementos específicos según la entidad
//    var listaContenedor, editadoForm, url;
//    switch (entidad) {
//        case 'abonados':
//            listaContenedor = '#listaAbonados';
//            editadoForm = '#editFormAbonado';
//            url = 'https://localhost:7074/api/Abonados/';
//            break;
//        case 'categorias':
//            listaContenedor = '#listaCategorias';
//            editadoForm = '#editFormCategoria';
//            url = 'https://localhost:7074/api/Categorias/';
//            break;
//        case 'jugadores':
//            listaContenedor = '#listaJugadores';
//            editadoForm = '#editFormJugador';
//            url = 'https://localhost:7074/api/Jugadores/';
//            break;
//        // Agregar casos para otras entidades
//        default:
//            return; // Si la entidad no es reconocida, salir de la función
//    }

//    $(listaContenedor).css("display", "");
//    $(editadoForm).css("display", "none");

//    $.ajax({
//        type: "GET",
//        url: url,
//        success: function (data) {
//            var tableBody = $(listaContenedor).find('.table-body');
//            tableBody.empty();
//            data.forEach(function (element) {
//                // Crear las filas de la tabla según los datos recibidos
//                // Puedes personalizar esto según la estructura de tus datos
//                var row = '<tr>
//                ';
//                row += '
//                    < td > ' + element.id + '</td > ';
//                row += '
//                    < td > ' + element.nombre + '</td > ';
//                row += '
//                    < td > ' + element.otroCampo + '</td > '; // Otros campos específicos de la entidad
//                row += '
//                    < td > <button class="btn-edit" data-id="' + element.id + '">Edit</button></td > ';
//                row += '
//                    < td > <button class="btn-delete" data-id="' + element.id + '">Delete</button></td > ';
//                row += '
//</tr > ';
//                tableBody.append(row);
//            });
//        }
//    });
//}

//// Evento de clic para botones de edición
//$(document).on('click', '.btn-edit', function () {
//    var id = $(this).data('id');
//    var entidad = $(this).closest('table').data('entidad');
//    editarElemento(id, entidad);
//});

//// Evento de clic para botones de borrado
//$(document).on('click', '.btn-delete', function () {
//    var id = $(this).data('id');
//    var entidad = $(this).closest('table').data('entidad');
//    borrarElemento(id, entidad);
//});

//// Función para editar elemento según la entidad
//function editarElemento(id, entidad) {
//    // Lógica para editar un elemento de la entidad especificada
//}

//// Función para borrar elemento según la entidad
//function borrarElemento(id, entidad) {
//    // Lógica para borrar un elemento de la entidad especificada
//}* @