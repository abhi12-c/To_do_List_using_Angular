import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  arr: any = [];

  InputTask = new FormGroup({
    task_id: new FormControl(''),
    taskname: new FormControl(''),
    summary: new FormControl(''),
    priority: new FormControl('Medium'),
    status: new FormControl('To DO'),
  });
  constructor(private dialogRef: MatDialogRef<UpdateComponent>) {}
  onSubmitTask() {
    if ((localStorage.getItem('array') as any) != null) {
      this.arr = JSON.parse(localStorage.getItem('array') as any);
      if (
        this.arr.some((el: any) => el.task_id === this.InputTask.value.task_id)
      ) {
        alert('opps ! TaskId Already Exist');

        return;
      }
      if (
        this.arr.some(
          (el: any) =>
            el.taskname.toUpperCase() ==
            this.InputTask.value.taskname?.toUpperCase()
        )
      ) {
        alert('opps ! Task Name Already Exist ');
        return;
      }

      this.arr.push(this.InputTask.value);
    } else {
      this.arr.push(this.InputTask.value);
      localStorage.setItem('array', JSON.stringify(this.arr));
    }
    this.InputTask = new FormGroup({
      task_id: new FormControl(''),
      taskname: new FormControl(''),
      summary: new FormControl(''),
      priority: new FormControl('Medium'),
      status: new FormControl('To DO'),
    });
    localStorage.setItem('array', JSON.stringify(this.arr));
    this.dialogRef.close();
    location.reload();

    console.log(this.arr);
  }
  cancel() {
    this.dialogRef.close();
  }
}
