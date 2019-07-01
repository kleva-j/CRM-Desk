import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';

export interface User {
  id: 1;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string
    }
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent extends HttpService implements OnInit, OnDestroy {
  url = 'http://jsonplaceholder.typicode.com/';
  githubUrl = 'https://api.github.com/';
  displayedColumns: string[] = ['select', 'name', 'username', 'email', 'address', 'phone', 'website'];
  selection = new SelectionModel<User>(true, []);
  dataSource = {
    data: []
  };

  public subscription = new Subscription();

  constructor(http: HttpClient, private httpService: HttpService) {
    super(http);
  }

  getUsers() {
    return this.httpService.getRequest(this.url, 'users')
      .subscribe(
        (res: User[]) => {
          this.dataSource = new MatTableDataSource<User>(res);
        },
        err => console.log(err)
      );
  }

  ngOnInit(): void {
    this.subscription.add(this.getUsers());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: User): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
}
