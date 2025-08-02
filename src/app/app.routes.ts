import { About } from './component/home/about/about';
import { Gallery } from './component/home/gallery/gallery';
import { Home } from './component/home/home';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', component: Home, title: 'home page' },
  { path: 'about', component: About, title: 'about page' },
  { path: 'gallery', component: Gallery, title: 'gallery page' },
];
