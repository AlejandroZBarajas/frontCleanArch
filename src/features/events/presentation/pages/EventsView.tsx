import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import {useNavigate} from "react-router"
import { EventViewModel } from "../viewmodels/EventViewModel";
import "./EventView.css";

type Props = {
    viewModel: EventViewModel
}

export const EventView = observer(({viewModel}: Props) => {
    const navigate = useNavigate()

    useEffect(()=> {
        if(viewModel.isValid){
            navigate("/dashboard")
        }
    },[viewModel.isValid, navigate])

    return (
        <div className="page-container">
            <div className="form-box">
                <h2 className="form-title">Formulario de Evento</h2>
                {viewModel.error && <p className="form-error">{viewModel.error}</p>}
                <form className="form">
                    <div className="form-group">
                        <label className="form-label">Título</label>
                        <input
                            type="text"
                            value={viewModel.title}
                            onChange={(e) => viewModel.onChangeTitle(e.target.value)}
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Descripción</label>
                        <input
                            type="number"
                            value={viewModel.description}
                            onChange={(e) => viewModel.onChangeDescription(Number(e.target.value))}
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Emisor</label>
                        <input
                            type="text"
                            value={viewModel.emitter}
                            onChange={(e) => viewModel.onChangeEmitter(e.target.value)}
                            className="form-input"
                            required
                        />
                    </div>
                    <button
                        type="button"
                        className="form-button"
                        onClick={() => viewModel.doCreateEvent()}
                    >
                        Crear Evento
                    </button>
                </form>
            </div>
        </div>

      );
})

export default EventView;