import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


interface direccionFormGroup {
  direccion: FormControl<string | null>;
}


interface usermodel{
nombre:FormControl<string | null>,
apellido:FormControl<string | null>,
email:FormControl<string | null>,
contraseña:FormControl<string | null>,
codigoPostal:FormControl<string | null>,
ciudad: FormControl<string | null>,
direccion: FormArray<FormGroup<direccionFormGroup>>,

}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {



  nombreControl = new FormControl('', [Validators.required]);
  apellidoControl = new FormControl('', [Validators.required]);
  emailControl = new FormControl('', [Validators.required]);
  contraseñaControl = new FormControl('');
  codigoPostalControl = new FormControl('', [Validators.required]);
  ciudadControl = new FormControl ('', [Validators.required]);

  direccionFormArray = new FormArray<FormGroup<direccionFormGroup>>([
    new FormGroup ({
      direccion: new FormControl(''),
    }),

  ]);


  usermodel: FormGroup<usermodel> = new FormGroup ({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    email: this.emailControl,
    contraseña: this.contraseñaControl,
    codigoPostal: this.codigoPostalControl,
    ciudad: this.ciudadControl,
    direccion:this.direccionFormArray

  });

  adddireccioncontrol() : void {

   this.direccionFormArray.push(
      this.Fb.group({
        direccion: [''],
      }) 
      );

  }
    
  
  constructor(private Fb:FormBuilder){/*
    this.usermodel = this.Fb.group({
      nombre:[''],
      apellido:[''],
      email :[''],
      contraseña :[''],
      ciudad:[''],
      codigoPostal:[''],



    })

  }
*/
}
}
