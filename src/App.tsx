import { Provider } from "react-redux";
import RepositoriesList from "./components/RepositoriesList";
import { store } from "./state";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for a Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
}

export default App;
