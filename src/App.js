import { Routes, Route } from 'react-router-dom';
import YourInfo from './pages/YourInfo';
import SelectPlan from './pages/SelectPlan';
import AddOns from './pages/AddOns';
import Summary from './pages/Summary';
import ThankYou from './pages/ThankYou';
import NotFound from './pages/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<YourInfo />} />
        <Route path='/select-plan' element={<SelectPlan />} />
        <Route path='/add-ons' element={<AddOns />} />
        <Route path='/summary' element={<Summary />} />
        <Route path='/thank-you' element={<ThankYou />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};
export default App;
