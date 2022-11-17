import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  search = new FormControl('');
  @Input() categorie: string ='';
  @Input() listeFiltree: any[] = [];

  @Output() filterResult = new EventEmitter<any[]>();
  @Output() filterReset = new EventEmitter();

  constructor() { 
    this.search.valueChanges.subscribe((value) => {
      if (value == '') {
        this.filterReset.emit();
      }
      else {
        const newlist = this.listeFiltree.filter((item) => item[this.categorie].includes(value));
        this.filterResult.emit(newlist);
      }
    });
  }

  ngOnInit(): void {
  }

}
