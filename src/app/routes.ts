import {Route} from '@angular/router';


export const routes: Route[] = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home.component'),
        data: {label: 'Home'},
      },
    ],
  },
  // Error page
  {
    path: '**',
    loadComponent: () => import('./features/home/home.component'),
    data: {label: 'Home'},
  },
];
