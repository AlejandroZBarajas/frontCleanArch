import { Event } from "../models/Event";
import { EventDTO } from "../models/EventDTO";

export class EventRepository{
    async create(_event: Event): Promise<EventDTO | null >{
        console.log(import.meta.env.API_URL)
        try{
            if(!_event.title || !_event.description || !_event.emitter){
                console.warn("faltan datos");
                return null;
            }
            const response = await fetch(import.meta.env.API_URL, {
                method: 'POST',
                body: JSON.stringify({
                    title: _event.title,
                    description: _event.description,
                    emitter: _event.emitter
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            
            if(!response.ok){
                console.error("error al crear evento:", response.statusText)
                return null
            } 
                
            const data: EventDTO = await response.json();
            return data;
            
        } catch(error){
            console.error("error al crear evento", error)
            return null
        }
    }
}