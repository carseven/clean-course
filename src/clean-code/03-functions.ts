(() => {

    // función para obtener información de una película por Id
    function getMovieById( movieId: string ) {
        console.log({ movieId };
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieActorById( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( ActorId: string ) {
        console.log({ ActorId });
    }
    
    // Crear una película

    interface Movie {
        title: string;
        description: string; 
        rating: number; 
        cast: string[];
    }

    function createMovie(movie: Movie) {
        console.log(movie);
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        
    }

      const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        if (isDead) return 1500;
        if (isSeparated) return 2500;
        return isRetired ? 3000 : 4000;
    }
})();




