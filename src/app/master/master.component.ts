import { Component } from '@angular/core';
import { DesignationComponent } from '../component/designation/designation.component';
import { RolesComponent } from '../component/roles/roles.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master',
  imports: [DesignationComponent, RolesComponent, CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {

currentComponent:string = 'roles'

changeTab(currentCompo: string){
  this.currentComponent = currentCompo;
}

}
