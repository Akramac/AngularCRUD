import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';
import { AuthGuard } from './_guards';
import {AddUserComponent} from "./add-user/add-user.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";


const appRoutes: Routes = [
  /*  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },*/
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'add-user',component:AddUserComponent},
    {path:'list-user',component:ListUserComponent},
    {path:'edit-user',component:EditUserComponent},


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
