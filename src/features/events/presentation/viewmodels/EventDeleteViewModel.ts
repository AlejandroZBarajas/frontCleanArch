import { makeAutoObservable } from "mobx";
import { EventRepository } from "../../data/repository/EventRepository";

export class EventDeleteViewModel {
    private repository: EventRepository;
    error: string = "";

    constructor(repo: EventRepository) {
        makeAutoObservable(this);
        this.repository = repo;
    }

    async fetchDeleteAll() {
        try {
            const success = await this.repository.deleteAll();
            if (!success) {
                this.error = "Error al borrar los eventos.";
            }
        } catch (err) {
            this.error = "Error inesperado al borrar los eventos.";
            console.error(err);
        }
    }
}
