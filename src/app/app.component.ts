import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-formulario-app';
  form!: FormGroup;
  personas: any[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: [0, [Validators.required, Validators.min(1)]],
      genero: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      direccion: [''],
      fecha: ['', Validators.required],
      preferencias: [''],
      terminos: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const persona = { ...this.form.value };
      this.personas.push(persona);
      console.log('Formulario enviado:', persona);
      this.form.reset(); // Reiniciar el formulario después de enviarlo
    } else {
      console.log('Formulario no válido');
    }
  }
}
