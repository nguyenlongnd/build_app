import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <div>Dashboard is parent</div>;
      <Outlet />
    </div>
  );
};

export default Dashboard;
