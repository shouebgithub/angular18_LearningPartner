import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RolesComponent } from './component/roles/roles.component';
import { MasterComponent } from './master/master.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RolesComponent, MasterComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LearningPartner_project';
}
