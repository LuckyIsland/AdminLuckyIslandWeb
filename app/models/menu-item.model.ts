export class MenuItem {
    Id: number;
    Name: string;
    IsOpen: boolean;
    Childs: MenuItem[] = [];

    constructor(id: number, name: string) {
        this.Id = id;
        this.Name = name;
    }

    addChild(item: MenuItem) {
        this.Childs.push(item);
    }
}