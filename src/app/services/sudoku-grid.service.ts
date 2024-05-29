import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SudokuGridService {
  private readonly httpClient = inject(HttpClient);
  getSudokuGridValue(): any {
    return this.httpClient.get('https://sudoku-api.vercel.app/api/dosuku').pipe(
      tap((grid) => {
        grid;
      })
    );
  }
}
