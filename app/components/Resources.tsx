import React from "react";

interface ResourceProps {
  resources: Array<{ title: string; url: string }>;
}

const Resources: React.FC<ResourceProps> = ({ resources }) => {
  return (
    <div className="resources-tab">
      {resources.map((resource, index) => (
        <button key={index} onClick={() => window.open(resource.url, "_blank")}>
          {resource.title}
        </button>
      ))}
    </div>
  );
};

export default Resources;
