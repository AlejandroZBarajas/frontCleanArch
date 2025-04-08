export class Event{

    title: string
    description: string
    emitter: string

    constructor(title:string, description:string, emitter: string){

        this.title = title
        this.description = description
        this.emitter = emitter
    }
}