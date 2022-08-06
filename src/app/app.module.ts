import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { UploadComponent } from './admin/upload/upload.component';
import { ManageComponent } from './admin/manage/manage.component';
import { CalendarComponent } from './admin/calendar/calendar.component';
import { ClientsComponent } from './admin/clients/clients.component';
import { GalleryComponent } from './client/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ClientComponent,
    BookingComponent,
    ContactComponent,
    AboutComponent,
    UploadComponent,
    ManageComponent,
    CalendarComponent,
    ClientsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
