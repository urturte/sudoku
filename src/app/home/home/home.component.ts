import { Component } from '@angular/core';
import { SubmitComponent } from '../../submit/submit/submit.component';
import { GridComponent } from '../../sudoku-grid/grid/grid.component';
import { TitleComponent } from '../../title/title/title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GridComponent, TitleComponent, SubmitComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
