import React from 'react';

interface OptionsProps {
  data: Record<string, number>;
}

const Options: React.FC<OptionsProps> = ({ data }) => {
  if (typeof data !== 'object') {
    return <option className="bg-gray-900 text-red-500">Invalid Data</option>;
  }

  return (
    <>
      {Object.keys(data).map((key, index) => (
        <option className="bg-gray-900"
          key={index} value={data[key]}>
          {key}
        </option>
      ))}
    </>
  );
};

export default Options;