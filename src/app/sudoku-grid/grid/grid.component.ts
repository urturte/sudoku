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
  inputValueDisplay: boolean = false;
  sudokuGridValue: any;
  ngOnInit() {
    this.sudokuGridService
      .getSudokuGridValue()
      .pipe(
        tap((grid: any) => {
          this.sudokuGridValue = grid.newboard.grids[0].value;
          console.log(this.sudokuGridValue);
        })
      )
      .subscribe();
  }
  editCellValue(): void {
    this.inputValueDisplay = !this.inputValueDisplay;
    // this.updateCellValue();
  }
  updateCellValue(): void {}
}
