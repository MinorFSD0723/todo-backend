const express = require('express')
var cors = require('cors')
const app = express()
const port = 8000

app.use(cors())

app.get('/tasks/', (req, res) => {
  res.send(
    [
        {
            description: "Preparar la clase de Nuclio Minors Full Stack Developer",
            dueDate: "07/25/2023",
            done: true
        },
        {
            description: "Devolver libros a la biblioteca y recoger nuevos libros sobre ciencia ficción",
            dueDate: "08/12/2023",
            done: false
        },
        {
            description: "Preparar las maletas y contratar el seguro para el viaje a Marte",
            dueDate: "08/18/2023",
            done: false
        },
        {
            description: "Hacer la compra",
            dueDate: "07/30/2023",
            done: false
        },
        {
            description: "Preparar la presentación",
            dueDate: "08/05/2023",
            done: false
        },
        {
            description: "Llamar al médico",
            dueDate: "07/28/2023",
            done: false
        },
        {
            description: "Limpiar el garaje",
            dueDate: "07/31/2023",
            done: false
        },
        {
            description: "Hacer ejercicio",
            dueDate: "07/27/2023",
            done: true
        },
        {
            description: "Enviar informe mensual",
            dueDate: "08/02/2023",
            done: false
        },
        {
            description: "Leer un libro",
            dueDate: "07/29/2023",
            done: true
        },
        {
            description: "Organizar el escritorio",
            dueDate: "07/26/2023",
            done: true
        },
        {
            description: "Completar el curso en línea",
            dueDate: "08/10/2023",
            done: false
        },
        {
            description: "Resolver crucigrama",
            dueDate: "07/28/2023",
            done: false
        },
        {
            description: "Visitar al abuelo",
            dueDate: "08/01/2023",
            done: true
        },
        {
            description: "Cocinar una nueva receta",
            dueDate: "07/29/2023",
            done: false
        },
        {
            description: "Pasear al perro",
            dueDate: "07/27/2023",
            done: true
        },
        {
            description: "Estudiar para el examen",
            dueDate: "08/04/2023",
            done: false
        },
        {
            description: "Hacer una videollamada",
            dueDate: "07/26/2023",
            done: true
        },
        {
            description: "Reparar el grifo",
            dueDate: "08/03/2023",
            done: false
        },
        {
            description: "Ver una película",
            dueDate: "07/30/2023",
            done: false
        },
        {
            description: "Resolver el rompecabezas",
            dueDate: "07/31/2023",
            done: false
        },
        {
            description: "Actualizar el software",
            dueDate: "08/01/2023",
            done: true
        },
        {
            description: "Hacer voluntariado",
            dueDate: "08/05/2023",
            done: false
        } 
    ]
  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})