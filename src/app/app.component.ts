import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import SpinnerComponent from '@shared/components/spinner.component';
import { CarouselComponent } from '@features/carousel/carousel.component';
import { initFlowbite } from 'flowbite';
import { FooterComponent } from '@features/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterLink,CarouselComponent,SpinnerComponent, RouterOutlet,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    initFlowbite();
  }

}
