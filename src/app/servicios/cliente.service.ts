import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from "../modelo/cliente.model";
import { Firestore, collection, collectionData, addDoc, doc, deleteDoc, docData } from "@angular/fire/firestore";
import { updateDoc } from "firebase/firestore";

@Injectable()
export class ClienteServicio{

  constructor(private firestore: Firestore){}

  getClientes(): Observable<Cliente[]>{
    //obtener  los clientes
    let ref = collection(this.firestore, 'clientes');
    return collectionData(ref, {idField: 'id'}) as Observable<Cliente[]>;
  }

  agregarCliente(cliente: Cliente){
    let ref = collection(this.firestore, 'clientes');
    return addDoc(ref, cliente);
  }

  eliminarCliente(id: string){
    let ref = doc(this.firestore, `clientes/${id}`);
    return deleteDoc(ref);
  }

  getCliente(id: string){
    let ref = doc(this.firestore, `clientes/${id}`);
    return docData(ref);
  }

  modificarCliente(id: string, cliente: Cliente){
    console.log(id);
    let ref = doc(this.firestore, `clientes/${id}`);
    return updateDoc(ref, {nombre: cliente.nombre, apellido: cliente.apellido, email: cliente.email, saldo: cliente.saldo});
  }
}
