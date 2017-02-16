export class Todo {
  id: string;
  text: string;

  constructor(text: string) {
    this.id = `id-${Math.random()}`;
    this.text = text;
  }
};
