// Aca vamos a modelar los datos que vamos a recibir
export class Link {
    title: string;
    url: string;
    votes: number;

    // Aca vamos a asignar los valores que vamos a recibir
    constructor(title: string, link: string, votes?: number) {

        // De esta manera asignamos los valores que vamos a recibir
        this.title = title;
        this.url = link;
        // Aca vamos a asignar el valor de los votos, si no hay votos, vamos a asignar 0
        this.votes = votes || 0;
    }


    // Aca vamos a crear un metodo para votar
    // Este metodo va a incrementar el valor de los votos
    voteUp() {
        // this.votes += 1;
        this.votes ++;
    }

    // Este metodo va a decrementar el valor de los votos
    voteDown() {
        // this.votes -= 1;
        this.votes --;
    }
}