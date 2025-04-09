import { EventListView } from "../../../events/presentation/pages/EventListView"
import { EventListViewModel } from "../../../events/presentation/viewmodels/EventListViewModel"
import { EventRepository } from "../../../events/data/repository/EventRepository";

const Dashboard = () => {

    const repo = new EventRepository();
    const viewModel = new EventListViewModel(repo);

  
    return (
      <div>
        <h1>Dashboard Page</h1>
        <EventListView viewModel={viewModel} />
      </div>
    );
  };
  
  export default Dashboard;
  