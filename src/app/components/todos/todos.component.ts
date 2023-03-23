import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatTable } from '@angular/material/table';
import { TaskComponent } from '../task/task.component';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { ServiceService } from '../service.service';
let arr = JSON.parse(localStorage.getItem('array') as any);
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  [x: string]: any;
  userName = 'Abishek Chakraborty';
  displayedColumns: string[] = [
    'task_id',
    'taskname',
    'summary',
    'status',
    'priority',
    'deldetails',
    'updetails',
  ];
  dataSource = JSON.parse(localStorage.getItem('array') as any);

  constructor(
    private router: Router,
    private matDialog: MatDialog,
    private service: ServiceService
  ) {}
  ngOnInit() {}

  goTODOS() {
    this.router.navigate(['../task']);

    console.log(arr, 'from todod');
  }
  getItemsARray() {
    return arr;
  }
  delRecord(i: any) {
    console.log(i);
    const vali = confirm(
      'Are You Sure You Want to Delete Task with TaskId ' +
        this.dataSource[i].task_id +
        ' and task Name:' +
        this.dataSource[i].taskname
    );
    if (vali) {
      this.dataSource = this.dataSource.filter((item: any) => {
        return item !== this.dataSource[i];
      });
      localStorage.setItem('array', JSON.stringify(this.dataSource));
      console.log('delRecord Event Called');
      console.log(this.dataSource, i);
    } else {
      return;
    }
  }
  updateRecord(i: any) {
    this.matDialog.open(UpdateComponent, {
      width: '350px',
    });

    this.service.myData = i;
  }
}
