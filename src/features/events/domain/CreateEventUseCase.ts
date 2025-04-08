import { Event } from "../data/models/Event";
import { EventDTO} from "../data/models/EventDTO";
import { EventRepository } from "../data/repository/EventRepository";

export class CreateEventUseCase{
    eventRepository: EventRepository

    constructor(){
        this.eventRepository = new EventRepository()
    }

    async execute(_event : Event) : Promise<EventDTO | null> {
        const response : EventDTO | null = await this.eventRepository.create(_event)

        let data = null
        if (response != null){
            data= new EventDTO(response.id, response.title, response.description, response.emitter, response.created_at)
        }
        console.log("creado:" + JSON.stringify(data))
        return data
    }
}