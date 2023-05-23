import HeadingGroup from "./components/HeadingGroup/HeadingGroup";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <div className="App">
        <Sidebar />
        <main class="main-section">
            <HeadingGroup />
            <Form />
        </main>
    </div>
  );
};
export default App;
