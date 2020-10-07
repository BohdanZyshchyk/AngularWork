export class MyTask {
    public id: string ;
    public theme: string;
    public text_work: string;
    public iamge_url: string;
    public date: string;
    public mark:number;
    public isDone:boolean;

    constructor(id:string, theme: string, text_work: string, iamge_url: string, date: string) {
        this.id = id;
        this.theme = theme; 
        this.text_work = text_work; 
        this.iamge_url = iamge_url; 
        this.date = date;
        this.mark = -1; 
        this.isDone = false;
    }
}