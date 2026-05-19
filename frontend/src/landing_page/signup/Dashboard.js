import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "../../../../dashboard/src/components/Funds";
import Holdings from "../../../../dashboard/src/components/Holdings";

import Orders from "../../../../dashboard/src/components/Orders";
import Positions from "../../../../dashboard/src/components/Positions";
import Summary from "../../../../dashboard/src/components/Summary";
import WatchList from "../../../../dashboard/src/components/WatchList";
import { GeneralContextProvider } from "../../../../dashboard/src/components/GeneralContext";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
