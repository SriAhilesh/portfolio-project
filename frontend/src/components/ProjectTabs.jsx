import React from 'react';

const ProjectTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { label: 'Tech Projects', value: 'tech' },
    { label: 'Design Projects', value: 'design' },
  ];

  return (
    <div className="flex justify-center space-x-4">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => setActiveTab(tab.value)}
          className={`text-lg font-semibold px-6 py-2 rounded-full transition-all duration-300
            ${activeTab === tab.value ? 'bg-teal-500 text-white shadow-lg' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default ProjectTabs;
