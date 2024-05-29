import { Component } from '@angular/core';
import { GRID_COUNT } from '../../constants';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent {
  readonly rows: number[] = Array(GRID_COUNT).fill(0);
  readonly cells: number[] = Array(GRID_COUNT).fill(0);
  editCellValue(): void {}
}
