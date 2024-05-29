import { Component } from '@angular/core';
import { GridComponent } from '../../sudoku-grid/grid/grid.component';
import { TitleComponent } from '../../title/title/title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GridComponent, TitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
