# Alkemy-Challenge
Challenge Backend NodeJS

LIBRERIAS UTILIZADAS:
    EXPRESS
    SEQUELIZE
    MYSQL2
    BODY-PARSER

RUTAS EN POSTMAN ==> https://www.getpostman.com/collections/7cab146fbbf9c129659c

PERSONAJES:{
    POST:
    {
        "image": "1",
        "name": "Iron man",
        "age": "10",
        "weight": "600 Kg",
        "history": "El capi",
        "films": [
            {
                "image": "2",
                "title": "Avengers",
                "creationDate": "2000-04-21T04:10:07.466Z",
                "calification": "3"
            },
            {
                "image": "3",
                "title": "Avengers 2",
                "creationDate": "2021-04-21T04:10:07.466Z",
                "calification": "5"
            }
        ]
    }

    PATCH:
    {
        "id": 4,
        "image": "",
        "name": "Capitan America",
        "age": "104",
        "weight": "109 Kg",
        "history": "Steven Rogers nació en el Lower East Side de Manhattan, en la ciudad de Nueva York, en 1918, hijo de inmigrantes irlandeses pobres, Sarah y Joseph Rogers."
    }

    GET:
    QUERY => http://localhost:8080/character
             http://localhost:8080/character/character
             http://localhost:8080/character?name=Iron man

    DELETE:
    QUERY => http://localhost:8080/character/2
}

PELICULAS O SERIES{
    POST:
    {
	"image": "",
    "title": "Mickey Mouse y sus amigos",
    "creationDate": "1912-01-01",
    "calification": 5,
    "characters": [
        {
            "image": "sii",
            "name": "Pluto",
            "age": "150",
            "weight": "200g",
            "history": "Perro amigo de Mickey"
        }
    ],
    "genders": [
        {
            "name":"Dibujos Animados",
            "image": "si"
        }
    ]
    }

    PACTH:
    {
    "id": 1,
    "image": "IIIIIII",
    "title": "Spider Man",
    "creationDate": "2050-04-22T04:16:36.000Z",
    "calification": 5
    }

    GET: QUERY
    http://localhost:8080/movies?id=28
    http://localhost:8080/movies/movies
    http://localhost:8080/movies

    DELETE: 
    http://localhost:8080/movies/2
}

GENERO{
    POST:
    {
	"name": "Terror",
    "image": "Esto es una imagen",
    "films": [
        {
            "id": 23,
            "image": "3",
            "title": "Avengers",
            "creationDate": "2000-04-21T04:10:07.466Z",
            "calification": "3"
        }
    ]
    }

    PATCH:
    {
	"id": 1,
    "name": "Terror",
    "image": ""
    }

    GET: QUERY
    http://localhost:8080/gender
    http://localhost:8080/gender?name=ficcion
    http://localhost:8080/gender?id=3

    DELETE:
    http://localhost:8080/gender/4
}





