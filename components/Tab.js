import React, { useContext } from "react";
import { Tab_Context_Provider } from "./Tabs";

function Tab(props) {
  let { activeTab, setActiveTab } = useContext(Tab_Context_Provider);
  let { label, tabIndex, className, activeClassName, children } = props;
  let active = activeTab === tabIndex;
  return (
    <button
      onClick={() => setActiveTab(tabIndex)}
      className={active ? className + " " + activeClassName : className}
    >
      {children}
    </button>
  );
}

export default Tab;
