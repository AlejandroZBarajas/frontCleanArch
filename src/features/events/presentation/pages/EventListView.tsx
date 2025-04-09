import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { EventListViewModel } from "../viewmodels/EventListViewModel";
import { EventDeleteViewModel } from "../viewmodels/EventDeleteViewModel";
import "./EventListView.css";

type Props = {
    viewModel: EventListViewModel,
    deleteModel: EventDeleteViewModel
}

export const EventListView = observer (({viewModel, deleteModel} : Props) => {
    useEffect(() => {
        viewModel.fetchAllEvents()
    }, [])



    return (
        <div className="event-page">
          <div className="event-card">
            <h2 className="event-title">Lista de Eventos</h2>
            {viewModel.error && <p className="event-error">{viewModel.error}</p>}
    
            <button className="event-delete-btn"
              onClick={async () => {
                await deleteModel.fetchDeleteAll();
                viewModel.fetchAllEvents(); 
              }}
            >
              Eliminar todos
            </button>
    
            <table className="event-table">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Descripción</th>
                  <th>Emisor</th>
                </tr>
              </thead>
              <tbody>
                {viewModel.events.map((event, index) => (
                  <tr key={index}>
                    <td>{event.title}</td>
                    <td>{event.description}</td>
                    <td>{event.emitter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
})