import { Component} from "@angular/core";

@Component({
  selector:'app-footer',
  templateUrl:'./footer.component.html',
  styleUrls:['./footer.component.css'],
})

export class FooterComponent{
  autor: any={
    nombre:'David',
    apellidos: 'Herrera Bermudez',
    telefono: '+57 3104907577'
  }


}
