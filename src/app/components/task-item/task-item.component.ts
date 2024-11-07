import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Task } from '@models/task';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  task = input.required<Task>();

  removeTask = output<Task>();
}
