fetch('https://ghibliapi.herokuapp.com/films')
    .then(response=>response.json())
    .then(data=> {
        data.forEach(movie=>{
            console.log(movie.title)
            console.log(movie.description)
            console.log(movie.release_date)
        })
    }).catch(err=>{
        console.log(err)
    })