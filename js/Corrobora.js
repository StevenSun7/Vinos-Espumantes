
        // Esta función valida todos los campos del form.
        // Si alguno no cumple con los requisitos, se aborta
        // con return. Caso contrario, al final se realiza
        // efectivamente el envio de los datos.

        function checkEnviar() {
            //valido el nombre
            if (document.comprobacion.apellido.value.length  == 0) {
                alert("Por favor ingrese apellido.")
                document.comprobacion.apellido.focus()
                return 0
            }
            if (document.comprobacion.nombre.value.length  == 0) {
                alert("Por favor ingrese nombre.")
                document.comprobacion.nombre.focus()
                return 0
            }
            if (document.comprobacion.email.value.length  == 0) {
                alert("Por favor ingrese e-mail.")
                document.comprobacion.email.focus()
                return 0
            }
            tel = document.comprobacion.tel.value
            tel = validarTel(tel)
            document.comprobacion.tel.value = tel
            if (tel == "") {
                document.comprobacion.tel.focus()
                return 0
            }
            if (document.comprobacion.consulta.selectedIndex == 0) {
                alert("Por favor, seleccione la razon de su consulta.")
                document.comprobacion.consulta.focus()
                return 0
            }
            alert("El formulario se envió con éxito. Muchas Gracias!")
            document.comprobacion.submit()
        }
        
        function validarTel(valor) {
            valor = parseInt(valor)
            //Compruebo si es un valor numérico
            if (isNaN(valor)) {
                alert("Ingresar el numero telefonico sin espacios")
                    document.comprobacion.tel.focus()
                return ""
            } else {
                return valor
            }
        }
