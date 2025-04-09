export class Event{

    title: string
    description: number
    emitter: string

    constructor(title:string, description:number, emitter: string){

        this.title = title
        this.description = description
        this.emitter = emitter
    }
}