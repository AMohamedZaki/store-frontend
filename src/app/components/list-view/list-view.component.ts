import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../service/data.service';
import { BaseComponent } from '../base/base.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'listView',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent<T> extends BaseComponent implements OnInit {

  @Input('Headers') Headers: string[] | string;
  @Input('VisableMember') VisableMember: string[] | string;
  @Input('SourceService') SourceService: DataService<T>;

  @Output('addItem') addItem = new EventEmitter();
  @Output('deleteItem') deleteItem = new EventEmitter();
  @Output('editItem') editItem = new EventEmitter();

  dataSourceList: T[] = [];
  currentList: T[] = []; // the List That Displayed in UI
  sourceListSize: number;
  sortStatus = '';
  selectedIndex = 1;
  elementName: string;

  // for dropdownList to determind the length of the datasourceList
  lengthList = [5, 10, 15, 20, 25];
  selectedLength = 5;
  totalPageNumber: number;
  pagingList: number[] = [];
  priveusIndex = 0;
  indexSize = 0; 

  constructor(private matdialog: MatDialog) {
    super(matdialog);
  }

  ngOnInit() {
    this.refreshList();
    this.chageListLength(this.selectedLength);
  }

  chageListLength(length) {
    this.pagingList = []
    this.SourceService.currentItems.subscribe((item: T[]) => {
      this.sourceListSize = item.length;
      if (this.sourceListSize > 0) {
        this.totalPageNumber = Math.floor(this.sourceListSize / length);
        (this.sourceListSize % length) > 0 ? this.totalPageNumber += 1 : this.totalPageNumber += 0;
        for (let index = 0; index < this.totalPageNumber; index++) {
          this.pagingList[index] = index + 1;
        }

        this.currentList = item;
        this.currentList = this.currentList.slice(0, length);

      }
    });
  }

  sortItem(index: number) {
    let header = '', arrayElementName = '';
    let propertyName = this.getElementName(index);
    let firstElement: any, secondElement: any;
    if (propertyName !== this.elementName) {
      this.sortStatus = '';
      this.elementName = propertyName;
    }

    // inside the array of the object
    if (propertyName.includes('.')) {
      const charindex = propertyName.indexOf('.');
      const arrayName = propertyName.substring(0, charindex);
      header = arrayName;
      arrayElementName = propertyName.substring(charindex + 1);
    } else {
      header = propertyName;
    }
    this.currentList = this.currentList.sort((fItem, sItem) => {
      if (fItem[header] instanceof Object) {
        if (typeof fItem[header][arrayElementName.toLowerCase()] === 'number') {
          firstElement = fItem[header][arrayElementName.toLowerCase()];
          secondElement = sItem[header][arrayElementName.toLowerCase()];
        } else {
          firstElement = fItem[header][arrayElementName.toLowerCase()].toLowerCase();
          secondElement = sItem[header][arrayElementName.toLowerCase()].toLowerCase();
        }
      } else if (typeof fItem[header.toLowerCase()] === 'number') {
        firstElement = fItem[header.toLowerCase()];
        secondElement = sItem[header.toLowerCase()];
      } else {
        firstElement = fItem[header.toLowerCase()].toLowerCase();
        secondElement = sItem[header.toLowerCase()].toLowerCase();
      }
      if (this.sortStatus === 'desc' || this.sortStatus === '') {
        if (firstElement > secondElement) {
          return 1;
        } else if (firstElement < secondElement) {
          return -1;
        }
        return 0;
      } else if (this.sortStatus === 'acs') {
        if (firstElement > secondElement) {
          return -1;
        } else if (firstElement < secondElement) {
          return 1;
        }
        return 0;
      }
    });

    (this.sortStatus === 'desc' || this.sortStatus === '') ? this.sortStatus = 'acs' : this.sortStatus = 'desc';
  }

  refreshList() {
    this.sortStatus = '';
    this.selectedIndex = 1;
    if (this.SourceService) {
      this.SourceService.Get().subscribe((itemList: T[]) => {
        this.dataSourceList = itemList;
        this.SourceService.changeCurrentItems(this.dataSourceList);
      });
    }
  }

  openDialog() {
    this.addItem.emit();
  }

  onDelete(item: any) {
    console.log(item);
    this.deleteItem.emit(item);
  }

  onEditClick(item) {
    this.editItem.emit(item);
  }


  getElementName(index: number): string {
    return this.VisableMember[index];
  }

  getElement(propertyName: string, element) {
    let header = '', arrayElementName = '';
    if (propertyName.includes('.')) {
      const charindex = propertyName.indexOf('.');
      const arrayName = propertyName.substring(0, charindex);
      header = arrayName;
      arrayElementName = propertyName.substring(charindex + 1);
      if( Object.keys(element[header]).length <= 0) { 
        return null ;
      }else
      {return element[header][arrayElementName.toLowerCase()];}
    } else {
      return element[propertyName];
    }

  }

  changePageIndex(index: number) {
    this.indexSize = index * this.selectedLength;
    this.elementName = '';
    this.sortStatus = '';
    this.selectedIndex = index;
    this.priveusIndex = this.indexSize - this.selectedLength;
    this.currentList = this.dataSourceList;
    this.currentList = this.currentList.slice(this.priveusIndex, this.indexSize);
  }

  changeListSize() {
    this.selectedIndex = 1;
    this.elementName = '';
    this.sortStatus = '';
    this.chageListLength(this.selectedLength);
  }


}
