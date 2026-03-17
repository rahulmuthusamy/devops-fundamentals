import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-search-input',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './search-input.html',
  styleUrl: './search-input.css',
})
export class SearchInput implements OnInit {
  searchControl = new FormControl('');

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      tap(val=>console.log("tap log :"+val)),
      debounceTime(300),
      map(value => value?.trim()),
      distinctUntilChanged(),
      filter((val: any) => val?.length > 2)
    ).subscribe(searchTerm => {
      console.log(searchTerm);

    })
  }
}
