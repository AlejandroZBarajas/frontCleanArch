import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import {useNavigate} from "react-router"
import { EventViewModel } from "../viewmodels/EventViewModel";

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
        
        <div>
          <h2>Formulario</h2>
          {viewModel.error && <p className="form-error">{viewModel.error}</p>}
          <form className="form">
            <div className="form-group">
              <label className="form-label">Title</label>
              <input
                type="text"
                value={viewModel.title}
                onChange={(e) => viewModel.onChangeTitle(e.target.value)}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Body</label>
              <input
                type="text"
                value={viewModel.body}
                onChange={(e) => viewModel.onChangeBody(e.target.value)}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">UserID</label>
              <input
                type="number"
                value={viewModel.userId}
                onChange={(e) => viewModel.onChangeUserId(e.target.value)}
                className="form-input"
                required
              />
            </div>
            <button
              type="button"
              className="form-button"
              onClick={() => viewModel.doCreateNote()}
            >
              Crear Nota
            </button>
          </form>
        </div>
      </div>
      );
})

export default EventView;