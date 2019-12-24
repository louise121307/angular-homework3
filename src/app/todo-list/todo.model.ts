export class Todo {

  private key = 0;
  private title = '';
  private completed = false;

  constructor(key: number, title: string, completed?: boolean) {
    this.key = key;
    this.title = title || '';
    if (typeof completed === 'boolean') {
      this.completed = completed;
    }
  }

  getKey(): number {
    return this.key;
  }

  getTitle(): string {
    return this.title;
  }

  getCompleted(): boolean {
    return this.completed;
  }

  getStatus(): string {
    if (this.completed) { return 'DONE'; } else { return 'OPEN'; }
  }

  setTitle(title: string): void {
    this.title = title;
  }

  setCompleted(completed: boolean): void {
    this.completed = completed;
  }

  toggleCompletion(): void {
    this.completed = !this.completed;
  }

}
