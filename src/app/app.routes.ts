import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'public',
        loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
    },
    {
        path: 'login',
        loadComponent: () => import('./Features/auth/login/login.component').then(c => c.LoginComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./Features/auth/register/register.component').then(c => c.RegisterComponent)
    },
    {
        path: 'forgot-password',
        loadComponent: () => import('./Features/auth/forgot-password/forgot-password.component').then(c => c.ForgotPasswordComponent)
    },
    {
        path: 'admin',
        loadComponent: () => import('./admin').then(c => c.AdminComponent),
        children: [
            //add the childeren routes here for admin
            {
                path: 'products',
                loadComponent: () => import('./admin/products').then(c => c.ProductsComponent)
            },
            {
                path: 'categories',
                loadComponent: () => import('./admin/categories').then(c => c.CategoriesComponent)
            },
            {
                path: '',
                redirectTo: 'admin',
                pathMatch: 'full'
            },
        ],
    },
    {
        path: '',
        redirectTo: '/public',
        pathMatch: 'full'
    }
];
