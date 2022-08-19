import React, { useState, useContext } from "react";
import { Tab_Context_Provider } from "./Tabs";

function Tab(props) {
  let { activeTab, setActiveTab } = useContext(Tab_Context_Provider);
  let { label, tabIndex, className, activeClassName, children } = props;
  let active = activeTab === tabIndex;
  return (
    <div
      className={active ? className + " " + activeClassName : className}
      onClick={() => setActiveTab(tabIndex)}
    >
      {label ? label : children}
    </div>
  );
}

export default Tab;
