import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/modelo/cliente.model';
import { ClienteServicio } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

  cliente: Cliente ={
    nombre:'',
    apellido: '',
    email: '',
    saldo: 0
  }

  constructor(private clienteServicio: ClienteServicio,
              private router: Router) { }

  ngOnInit(): void {
  }

  agregar(cliente: NgForm){
    this.cliente.nombre = cliente.value.nombre;
    this.cliente.apellido = cliente.value.apellido;
    this.cliente.email = cliente.value.email;
    this.cliente.saldo = cliente.value.saldo;
    this.clienteServicio.agregarCliente(this.cliente);
    console.log(cliente);
    this.router.navigate(['/']);
  }

}
