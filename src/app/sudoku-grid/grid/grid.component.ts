import { Component, inject } from '@angular/core';
import { tap } from 'rxjs';
import { SudokuGridService } from '../../services/sudoku-grid.service';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent {
  private readonly sudokuGridService = inject(SudokuGridService);
  sudokuGridValue: any;
  ngOnInit() {
    this.sudokuGridService
      .getSudokuGridValue()
      .pipe(
        tap((grid: any) => {
          this.sudokuGridValue = grid.newboard.grids[0].value;
        })
      )
      .subscribe();
  }
  // updateCellValue(cellValue): void {}
  submit(event: Event) {
    event.preventDefault();
  }
}
