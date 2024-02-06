import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import DashboardMessages from './components/DashboardMessages/DashboardMessages';
import DashboardTasks from './components/DashboardTasks/DashboardTasks';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="/messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
      <Route path="/messages2" element={<DashboardMessages />}></Route>
    </Routes>
  );
}

export default App;
