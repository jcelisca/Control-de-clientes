import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/modelo/cliente.model';
import { ClienteServicio } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css'],
})
export class EditarClienteComponent implements OnInit {

  id: string = '';

  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0,
  };

  constructor(
    private clienteServicio: ClienteServicio,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clienteServicio.getCliente(this.id).subscribe((cliente) => {
      this.cliente = cliente;
    });
  }


  guardar(cliente: NgForm) {
    this.id = this.route.snapshot.params['id'];
    this.cliente.nombre = cliente.value.nombre;
    this.cliente.apellido = cliente.value.apellido;
    this.cliente.email = cliente.value.email;
    this.cliente.saldo = cliente.value.saldo;
    this.clienteServicio.modificarCliente(this.id, this.cliente);
    console.log(cliente);
    this.router.navigate(['/']);
  }

  eliminar() {
    if(confirm('¿Seguro que desea eliminar el cliente?')){
      this.id = this.route.snapshot.params['id'];
      this.clienteServicio.eliminarCliente(this.id);
      this.router.navigate(['/']);
    }
  }
}
