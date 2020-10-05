import * as uuid from 'uuid';
export class Event {
    public id: string ;
    public name: string;
    public description: string;
    public iamge_url: string;
    public dateStarted: string;
    public visible: boolean;

    constructor(id:string, name: string, description: string, iamge_url: string, dateStarted: string, visible: boolean) {
        this.id = id;
        this.name = name; 
        this.description = description; 
        this.iamge_url = iamge_url; 
        this.dateStarted = dateStarted; 
        this.visible = visible; 
    }
}