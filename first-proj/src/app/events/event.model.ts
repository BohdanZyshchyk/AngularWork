export class Event {
    public name: string;
    public description: string;
    public iamge_url: string;
    public dateStarted: string;
    public visible: boolean;

    constructor(name: string, description: string, iamge_url: string, dateStarted: string, visible: boolean) {
        this.name = name; 
        this.description = description; 
        this.iamge_url = iamge_url; 
        this.dateStarted = dateStarted; 
        this.visible = visible; 
    }
}