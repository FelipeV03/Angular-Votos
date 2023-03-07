import { Component, Input, HostBinding } from '@angular/core';
import { Link } from './links.model';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent {

  // Aca vamos a crear una variable para asignarle una clase a la etiqueta del html de este componente
  @HostBinding('attr.class') cssClass = 'row';

  // Aca vamos a recibir los datos del componente padre (app.component.ts) y los vamos a asignar a la variable link de este componente (links.component.ts)
  @Input() link!: Link;



  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    // console.log(this.link);
  }

  // Esto es para que no nos marque error en el navegador cuando se ejecute el metodo sanitizeUrl de la clase DomSanitizer de Angular
  sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
