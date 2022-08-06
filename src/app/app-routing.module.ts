import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent} from './admin/admin.component';
import { ClientComponent} from './client/client.component';
import { BookingComponent} from './booking/booking.component';
import { ContactComponent} from './contact/contact.component';
import { AboutComponent} from './about/about.component';

const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'client', component: ClientComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
