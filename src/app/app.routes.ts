import { Routes } from '@angular/router';
import { PostsComponent } from './pages/posts/posts.component';
import { authGuard } from './core/guard/auth.guard';
import { NavigationComponent } from './pages/navigation/navigation.component';

export const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    canActivate: [authGuard],
    children: [
      {
        path: "dashboard",
        redirectTo: "/",
        pathMatch: "full",
      },
      {
        path: "",
        loadComponent: () => import("./pages/dashboard/dashboard.component").then(m => m.DashboardComponent)
      },
      {
        path: 'posts',
        loadComponent: () => import("./pages/posts/posts.component").then(m => m.PostsComponent)
      },
    ],
  },
];
