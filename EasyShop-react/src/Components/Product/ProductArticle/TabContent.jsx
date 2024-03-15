import React from "react";

function TabContent({ tabNumber, activeTab, children }) {
    return (
      <div
        className={`tab-pane fade ${tabNumber === activeTab ? 'show active' : ''}`}
        id={`ex1-tabs-${tabNumber}`}
        role="tabpanel"
        aria-labelledby={`ex1-tab-${tabNumber}`}
      >
        {children}
      </div>
    );
  }
  export default TabContent