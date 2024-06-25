import { Route } from '@angular/router';


export const appRoutes: Route[] = [
    {
        path: '',
        loadComponent: () =>
            import('@ng-module/products').then((m) => m.ProductsComponent),
        pathMatch: 'full',
    },
    {
        path: 'products',
        loadComponent: () =>
            import('@ng-module/products').then((m) => m.ProductsComponent),
    }, 
];
