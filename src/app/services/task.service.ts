import { Injectable, signal } from '@angular/core';
import { Task } from '@models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  readonly tasks = signal<Task[]>([]);

  addTask(task: Task) {
    this.tasks.update((tasks) => [...tasks, task]);
  }

  removeTask(task: Task) {
    this.tasks.update((tasks) => tasks.filter((t) => t !== task));
  }

  constructor() {}
}
