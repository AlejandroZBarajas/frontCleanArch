import { createBrowserRouter } from "react-router-dom";
import EventView from "../../features/events/presentation/pages/EventsView";
import Dashboard from "../../features/dashboard/presentation/pages/Dashboard";
import { EventViewModel } from "../../features/events/presentation/viewmodels/EventViewModel";

const eventViewModel = new EventViewModel()

export const navigationWrapper = createBrowserRouter([
    {
        path: "/",
        element: <EventView viewModel={eventViewModel} />
    },{
        path:"/dashboard",
        element:<Dashboard/>
    }
])