import { Component, OnInit,Input } from '@angular/core';
import {Task} from '../../Task'
import { TASKS } from 'src/app/mock-tasks';
import { faTimes} from '@fortawesome/free-solid-svg-icons';
import { TaskDTO } from 'src/app/dto/task.dto';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  // @Input() task:Task[] =TASKS;
  faTimes=faTimes;
  
  // // task: Task[] =TASKS;
  // constructor() { }

  // ngOnInit(): void {
  // }
  task: TaskDTO[];

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.getTasks();

  }
 public getTasks(){
  this.taskService.getTasks().subscribe((tasks) =>this.task =tasks);
    console.log(this.task)
 }

}
