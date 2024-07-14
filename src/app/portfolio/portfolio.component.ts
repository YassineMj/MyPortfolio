import { Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

   ngAfterViewInit() {
      const options = {
        strings: ['Designer', 'Developer', 'Freelancer', 'Photographer'],
        typeSpeed: 40,
        backSpeed: 50,
        loop: true
      };
      new Typed('.typed', options);
    }

  
}
