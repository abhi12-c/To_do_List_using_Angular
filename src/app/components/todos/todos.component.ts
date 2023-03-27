import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
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
    // 'deldetails',
    // 'updetails',
    'action',
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
  async addTask() {
    this.matDialog.open(TaskComponent, {
      width: '660px',
      height: '700px',
      data: this.dataSource,
    });
  }
  updateRecord(i: any) {
    this.service.myData = i;
    this.matDialog.open(UpdateComponent, {
      width: '660px',
      height: '700px',
      data: this.dataSource,
    });
  }
}
