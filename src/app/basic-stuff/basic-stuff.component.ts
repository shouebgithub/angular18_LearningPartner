import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-stuff',
  imports: [FormsModule],
  templateUrl: './basic-stuff.component.html',
  styleUrl: './basic-stuff.component.css'
})
export class BasicStuffComponent {
  firstName: string = 'Angular Project with Learning Partner';
  Angular_Version = "Angular 18";
  Version: number = 18;
  isActive: boolean = false;
  currentDate: Date = new Date();
  inputType: string = "radio";
  
  showAlert() {
    alert("Welcome to Angular 18 project");
  }
  
  showMessage(msg:string) {
    alert(`Show message here -> ${msg}`);
  }
  
}
