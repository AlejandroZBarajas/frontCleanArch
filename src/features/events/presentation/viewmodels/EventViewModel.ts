
import { makeAutoObservable, runInAction } from "mobx";
import { Event } from "../../data/models/Event";
import { CreateEventUseCase } from "../../domain/CreateEventUseCase";

export class EventViewModel{
    title: string = ''
    description: number = 0
    emitter: string = ''

    error : string | null = null

    isValid : boolean = false

    createEventUseCase: CreateEventUseCase

    constructor(){
        makeAutoObservable(this)
        this.createEventUseCase = new CreateEventUseCase()
    }

    onChangeTitle(title:string){
        this.title = title
    }

    onChangeDescription(desc:number){
        this.description = desc
    }

    onChangeEmitter(emi:string){
        this.emitter=emi
    }

    async doCreateEvent(){
        this.error = null

        if(this.title && this.description && this.emitter){
            const newEvent = new Event(this.title, this.description, this.emitter)

            try{
                const data = await this.createEventUseCase.execute(newEvent)
                this.isValid = true

                runInAction(()=>{
                    if (data !== null ) {
                        this.isValid = true
                    }
                })
            }catch (err: unknown){
                if(err instanceof Error){
                    runInAction(()=>{
                        this.error = err.message || "error creando evento"
                    })
                }
            } 
        } else {
             runInAction(()=>{                   
                 this.error = "error desconocido"  
             })
        }
    }
}