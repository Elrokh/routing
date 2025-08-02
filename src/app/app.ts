import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './component/home/home';
import { Navbar } from './component/home/navbar/navbar';
import { About } from './component/home/about/about';
import { Footer } from './component/home/footer/footer';
import { Gallery } from './component/home/gallery/gallery';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('routing');
}
