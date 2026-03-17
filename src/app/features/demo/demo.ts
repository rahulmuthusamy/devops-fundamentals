import { Component, OnInit } from '@angular/core';
import { SearchInput } from '../../shared/search-input/search-input';

@Component({
  selector: 'app-demo',
  imports: [SearchInput],
  templateUrl: './demo.html',
  styleUrl: './demo.css',
})
export class Demo implements OnInit{

  ngOnInit(): void {
    
  }

}
