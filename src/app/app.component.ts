import { Component } from '@angular/core';
import { GoogleApiService} from './google-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecart';
  constructor(private readonly googleApi: GoogleApiService){}
  isLoggedIn(): boolean {
    return this.googleApi.isLoggedIn();
   }
  logout(){
   this.googleApi.signOut()
  }
}
