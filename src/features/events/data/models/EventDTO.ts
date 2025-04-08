export class EventDTO{
    id: number
    title: string
    description: string
    emitter: string
    created_at: string

    constructor(id:number, title:string, description:string, emitter: string, created_at:string){
        this.id = id
        this.title = title
        this.description = description
        this.emitter = emitter
        this.created_at = created_at
    }
}