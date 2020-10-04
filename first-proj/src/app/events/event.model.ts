export class Event {
    public name: string;
    public description: string;
    public iamge_url: string;
    public dateStarted: string;

    constructor(name: string, description: string, iamge_url: string, dateStarted: string) {
        this.name = name; 
        this.description = description; 
        this.iamge_url = iamge_url; 
        this.dateStarted = dateStarted; 
    }
}