export class Novel {
    id: number;
    name: string;
    genre: string;
    author: string;

    constructor (id: number, name: string, genre: string, author: string) {
        this.id = id;
        this.name = name;
        this.genre = genre;
        this.author = author;
    }
}