import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

type SearchBarProps = {
  onSearch: (city: string) => void; // Callback function to pass the city
};

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [cityInput, setCityInput] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (cityInput.trim()) {
      onSearch(cityInput); // Pass the city input to the parent
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex">
      <button
        type="submit"
        onSubmit={handleSubmit}
        className="bg-white  p-4 rounded-tl-md rounded-bl-md focus:outline-none focus:ring-2 focus:border-sky-200"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <input
        className="bg-white p-2 min-w-[250px] rounded-tr-md rounded-br-md w-full focus:outline-none focus:ring-2 focus:border-sky-200"
        onChange={(e) => setCityInput(e.target.value)}
        placeholder="Enter the name of the city"
      ></input>
    </form>
  );
};
