import React from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const AdminPage = () => {

  return (
    <div className="admin-page flex">
      <Sidebar />
      <div className="flex-1 p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPage;
