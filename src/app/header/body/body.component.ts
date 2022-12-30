import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  usuario = 'Angular'
  password = "123456"

  items = ['Home', 'Support', 'Contact']

  verificar(usuarioInput: String, passwordInput:String){

    if (usuarioInput == this.usuario && passwordInput == this.password) {
      alert("bienvenido")
    }else{
      alert("rechazado")
    }

  }

}
