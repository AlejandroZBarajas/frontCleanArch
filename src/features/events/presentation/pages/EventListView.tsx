import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { EventListViewModel } from "../viewmodels/EventListViewModel";
import "./EventListView.css";

type Props = {
    viewModel: EventListViewModel
}

export const EventListView = observer (({viewModel} : Props) => {
    useEffect(() => {
        viewModel.fetchAllEvents()
    }, [])

    const handleDeleteAll = async () => {
        const confirm = window.confirm("¿Seguro? Es irreversible")
        if (!confirm){
            return
        }

        try{
            const response = await fetch(import.meta.env.VITE_API_URL, {
                method: "DELETE"
            })
            if (!response.ok){
                alert("Ocurrió un error al eliminar todos los eventos")
                return
            }

            alert("Eventos eliminados")
            viewModel.fetchAllEvents()
        }catch (error){
            console.error("Error eliminando eventos:", error);
            alert("Error al conectar con la API.");
        }
    }

    return (
        <div className="event-page">
          <div className="event-card">
            <h2 className="event-title">Lista de Eventos</h2>
            {viewModel.error && <p className="event-error">{viewModel.error}</p>}
    
            <button className="event-delete-btn" onClick={handleDeleteAll}>
              Eliminar Todos los Eventos
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