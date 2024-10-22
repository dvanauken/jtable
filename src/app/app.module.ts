import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { AppComponent } from './app.component';
import { JtableComponent } from './jtable/jtable.component';
import { DayNamePipe } from './enum-to-day-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    JtableComponent,
    DayNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule  // Add FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
