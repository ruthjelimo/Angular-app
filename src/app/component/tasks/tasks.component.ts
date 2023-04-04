import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task';
import { TaskService } from '../../services/task.service';
import { TaskDTO } from 'src/app/dto/task.dto';
// import CancelIcon from '@mui/icons-material/Cancel';
// import {TASKS} from '../../mock-tasks'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  task: TaskDTO[];
  // CancelIcon =CancelIcon;

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.getTasks();

  }
 public getTasks(){
  this.taskService.getTasks().subscribe((tasks) =>this.task =tasks);
    console.log(this.task)
 }

}
