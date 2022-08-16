import { FormBook } from "./components/FormBook/FormBook";
import { NavBar } from "./components/NavBar/NavBar";
import { Table } from "./components/Table/Table";

function App() {
  return (
    <div className="container">
      <NavBar />
      <FormBook />
      <Table />
    </div>
  );
}

export default App;
