import { Component, computed, inject, signal } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { TaskService } from '@services/task.service';
import { Task } from '@models/task';
import { TaskItemComponent } from '@components/task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    TaskItemComponent,
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  readonly taskTitle = signal('');
  readonly searchTerm = signal('');
  private readonly taskService = inject(TaskService);

  readonly tasks = this.taskService.tasks;

  readonly filterdTasks = computed(() => {
    return this.taskService.tasks().filter((task) => {
      return task.title.includes(this.searchTerm().toLowerCase());
    });
  });

  addTask() {
    const title = this.taskTitle().trim();

    if (!title) {
      return;
    }
    this.taskService.addTask({ title });
    this.taskTitle.set('');
  }

  removeTask(task: Task) {
    this.taskService.removeTask(task);
  }
}
