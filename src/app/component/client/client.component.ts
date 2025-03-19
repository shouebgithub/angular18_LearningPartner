import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { CommonModule, JsonPipe, UpperCasePipe } from '@angular/common';
import { ClientService } from '../../services/client.service';
import { APIResponseModel} from '../../model/interface/role';

@Component({
  selector: 'app-client',
  imports: [FormsModule, CommonModule, UpperCasePipe, JsonPipe],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{
clientObj:Client = new Client();
clientList: Client[] = [];

clientService = inject(ClientService);
firstName = signal("Angular 18");


ngOnInit(): void {
  const name = this.firstName();
  this.LoadClients();
}

LoadClients() {
  this.clientService.getAllClients().subscribe((res:APIResponseModel)=>{
    this.clientList = res.data;
  })
}

changeFname() {
  this.firstName.set("ReactJS");
}

onSaveClient() {  
this.clientService.AddUpdateClient(this.clientObj).subscribe((res:APIResponseModel)=>{
  if(res.result){
    alert("client added successfully");
    this.LoadClients();
  } else {
    alert(res.message)
  }
})
}

OnDelete(id: number){
  const isDelete = confirm("Are you sure you want to delete");
  if(isDelete) {
    this.clientService.DeleteClientByClientId(id).subscribe((res:APIResponseModel)=>{
  if(res.result){
    alert("client with id deleted successfully");
    this.LoadClients();
  } else {
    alert("issue with the api");
  }
})
  }

}

OnUpdate(client: Client) {
  this.clientObj = client;
}




}
