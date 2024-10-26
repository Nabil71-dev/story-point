import React from 'react';
import Options from './Options';

interface SelectorProps {
  label: string;
  options: Record<string, number>; 
  value: string | number | null;
  setState: (value: string) => void;
}

const Selector: React.FC<SelectorProps> = ({ label, options, value, setState }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setState(value);
  };

  return (
    <div className="bg-gray-900 py-4 rounded-lg">
      <div className="relative bg-inherit">
        <label
          htmlFor="selector"
          className="absolute cursor-text left-0 -top-3 text-sm text-gray-300 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
        >
          {label ? label : 'Type inside me'}
        </label>

        <select
          onChange={handleChange}
          value={value || ''}
          id="selector"
          className="peer bg-transparent h-14 w-full rounded-lg placeholder-transparent ring-2 px-2 focus:ring-sky-600 focus:outline-none text-gray-100 bg-gray-900"
        >
          <option className="bg-gray-900" value="" disabled>
            Select one
          </option>
          {options ? (
            <Options data={options} />
          ) : (
            <option className="bg-gray-900"  disabled>No options available</option>
          )}
        </select>
      </div>
    </div>
  );
};

export default Selector;
