import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel, clientProject, IEmployee } from '../../model/interface/role';
import { Client } from '../../model/class/Client';
import { CommonModule, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule, CommonModule, UpperCasePipe, DatePipe, JsonPipe],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {

currentDate: Date = new Date();

projectForm : FormGroup = new FormGroup({
  clientProjectId: new FormControl(0),
  projectName: new FormControl(""),
  startDate: new FormControl(""),
  completedDate: new FormControl(""),
  expectedEndDate: new FormControl(""),
  leadByEmpId: new FormControl(0),
  contactPerson: new FormControl(""),
  contactPersonContactNo: new FormControl(""),
  totalEmpWorking: new FormControl(0),
  projectCost: new FormControl(0),
  projectDetails: new FormControl(""),
  contactPersonEmailId: new FormControl(""),
  clientId: new FormControl(0)
})

clientserv = inject(ClientService);
employeeList : IEmployee[] = [];
clientList: Client[] = [];

projectList = signal<clientProject[]>([]);


ngOnInit(): void {
this.getAllEmployees();
this.getAllClients();
this.getAllClientProject();
}


getAllEmployees(){
  this.clientserv.GetAllEmployee().subscribe((res:APIResponseModel)=>{
    this.employeeList = res.data;

  })
}
getAllClients(){
  this.clientserv.getAllClients().subscribe((res:APIResponseModel)=>{
    this.clientList = res.data;
  })
}
getAllClientProject(){
  this.clientserv.getAllClientProject().subscribe((res:APIResponseModel)=>{
    this.projectList.set(res.data);
  })
}

onSaveProject(){
  const formvalue = this.projectForm.value;
  this.clientserv.AddClientProjectUpdate(formvalue).subscribe((res:APIResponseModel)=>{
    if(res.result){
      alert("project created successfully");
    } else {
      alert(res.message);
    }
  })
}


}
