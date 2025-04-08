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
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-2xl shadow-md w-96">
            <h2 className="text-2xl font-bold text-center text-gray-700">Formulario de Evento</h2>
            {viewModel.error && <p className="text-red-500 text-center mt-2">{viewModel.error}</p>}
            <form className="mt-4">
              <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-1">Título</label>
                <input
                  type="text"
                  value={viewModel.title}
                  onChange={(e) => viewModel.onChangeTitle(e.target.value)}
                  className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-1">Descripción</label>
                <input
                  type="text"
                  value={viewModel.description}
                  onChange={(e) => viewModel.onChangeDescription(e.target.value)}
                  className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-1">Emisor</label>
                <input
                  type="text"
                  value={viewModel.emitter}
                  onChange={(e) => viewModel.onChangeEmitter(e.target.value)}
                  className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="button"
                className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition"
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