import { Component } from '@angular/core';
import { SUDOKU_TITLE } from '../../constants';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {
  readonly SUDOKU_TITLE = SUDOKU_TITLE;
}
