import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from '../service.service';

const dataSource = JSON.parse(localStorage.getItem('array') as any);

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  data = JSON.parse(localStorage.getItem('array') as any);
  index: any;
  displayedColumns: string[] = [
    'task_id',
    'taskname',
    'summary',
    'status',
    'priority',
    'deldetails',
    'updetails',
  ];
  InputTask = new FormGroup({
    task_id: new FormControl(),
    taskname: new FormControl(''),
    summary: new FormControl(''),
    priority: new FormControl('Medium'),
    status: new FormControl('To DO'),
  });

  constructor(
    private dialogRef: MatDialogRef<UpdateComponent>,
    private service: ServiceService
  ) {
    this.InputTask = new FormGroup({
      task_id: new FormControl(dataSource[this.service.myData].task_id),
      taskname: new FormControl(dataSource[this.service.myData].taskname),
      summary: new FormControl(dataSource[this.service.myData].summary),
      priority: new FormControl(dataSource[this.service.myData].priority),
      status: new FormControl(dataSource[this.service.myData].status),
    });
  }

  ngOnInit() {}

  onSubmitTask() {
    this.index = this.service.myData;

    console.log(dataSource[this.index]);
    dataSource[this.index].task_id = this.InputTask.value.task_id;
    dataSource[this.index].taskname = this.InputTask.value.taskname;
    dataSource[this.index].summary = this.InputTask.value.summary;
    dataSource[this.index].priority = this.InputTask.value.priority;
    dataSource[this.index].status = this.InputTask.value.status;
    localStorage.setItem('array', JSON.stringify(dataSource));

    this.dialogRef.close();
    window.location.reload();
  }

  cancel() {
    this.dialogRef.close();
  }
}
