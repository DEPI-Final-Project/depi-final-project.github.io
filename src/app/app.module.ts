import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule if needed
import { AppComponent } from './app.component'; // Adjust the path as necessary
// import { LogInComponent } from './myComponent/log-in/log-in.component';
import { LoginComponent } from './myComponent/log-in/log-in.component';

@NgModule({
    declarations: [
    //   AppComponent,
      LoginComponent
    ],
    imports: [
      BrowserModule,
      FormsModule
    ],
    providers: [],
    // bootstrap: [AppComponent]
  })
  export class AppModule { }
