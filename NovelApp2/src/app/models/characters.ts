export class Character {
    id: number;
    name: string;
    role: string;
    race: string; 
    age: number;
    gender: string;
    novelname: string;

    constructor (id: number, name: string, role: string, race: string, age: number, gender: string, novelname: string) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.race = race;
        this.age = age;
        this.gender = gender;
        this.novelname = novelname;
    }
}