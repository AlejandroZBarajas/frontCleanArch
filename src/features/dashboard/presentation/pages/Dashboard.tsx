import { EventListView } from "../../../events/presentation/pages/EventListView"
import { EventListViewModel } from "../../../events/presentation/viewmodels/EventListViewModel"
import { EventRepository } from "../../../events/data/repository/EventRepository";
import { EventDeleteViewModel } from "../../../events/presentation/viewmodels/EventDeleteViewModel";

const Dashboard = () => {

    const repo = new EventRepository();
    const viewModel = new EventListViewModel(repo);
    const deleteViewModel = new EventDeleteViewModel(repo)

  
    return (
      <div>
        <EventListView viewModel={viewModel} deleteModel={deleteViewModel} />
      </div>
    );
  };
  
  export default Dashboard;
  