import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './Layout/auth-layout/auth-layout.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { MainLayoutComponent } from './Layout/main-layout/main-layout.component';
import { PostsComponent } from './Components/posts/posts.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

export const routes: Routes = [
    {path:'', component:AuthLayoutComponent, children:[
        {path:"",redirectTo:"register",pathMatch:"full"},
        {path:'register', title:'Register',component:RegisterComponent},
        {path:'login', title:'Login',component:LoginComponent}
    ] },
    {path:'', component:MainLayoutComponent, children:[
        {path:"",redirectTo:"feeds",pathMatch:"full"},
        {path:'feeds', title:'Feeds', component:PostsComponent}
    ]},
    {path:'**',title:"404",component:NotFoundComponent}
];
