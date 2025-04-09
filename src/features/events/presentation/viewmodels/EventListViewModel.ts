import { makeAutoObservable } from "mobx";
import { EventDTO } from "../../data/models/EventDTO";
import { EventRepository } from "../../data/repository/EventRepository";

export class EventListViewModel{
    events : EventDTO[] = []
    error :string =""

    private repository: EventRepository

    constructor(repo: EventRepository){
        makeAutoObservable(this)
        this.repository = repo
    }

    async fetchAllEvents(){
        try{
            const data = await this.repository.getAll()
            if(data){
                this.events = data
            } else {
                this.error = "no se pudieron obtener los eventos"
            }
        }catch (err){
            this.error = "error al obtener los eventos"
            console.error(err)

        }
    }
}