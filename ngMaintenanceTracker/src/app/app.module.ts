import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaintenanceTrackerComponent } from './components/maintenance-tracker/maintenance-tracker.component';
import { NgModule } from '@angular/core';
import { MaintenanceTrackerService } from './services/maintenance-tracker.service';


@NgModule({
  declarations: [
    AppComponent,
    MaintenanceTrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MaintenanceTrackerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
