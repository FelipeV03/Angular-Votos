import { Component } from '@angular/core';
import { Link } from '../app/components/links/links.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto Votos Angular';

  links: Link[];

  // De esta manera llenamos el arreglo de links con los datos que vamos a recibir
  constructor(private sanitizer: DomSanitizer) {
    // Aca vamos a llenar el arreglo de links
    this.links = [
      // De esta manera se crea un nuevo enlase
      // Le damos un titulo, un link y un numero de votos (opcional)
      // Ya que asi lo definimos en el modelo de datos de los enlaces (links.model.ts)
      new Link("Angular", "http://angular.io/", 3),
      new Link("Google", "http://google.com/", ),
      new Link("Instagram", "http://instagram.com/", 900),
    ];
    // console.log(this.links);
  }


  // Aca vamos a crear un metodo para agregar un nuevo enlace
  addLink(title: any, url: any) {
    // console.log(title.value, url.value);
    this.links.push(new Link(title.value, url.value));
    // Aca vamos a limpiar los campos del formulario
    title.value = '';
    url.value = '';

    return false;
  }

  // Esto es para que no nos marque error en el navegador cuando se ejecute el metodo sanitizeUrl de la clase DomSanitizer de Angular
  sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}

