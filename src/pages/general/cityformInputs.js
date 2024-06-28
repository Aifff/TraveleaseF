//Helps in CreateCard component form 

import { useState } from "react";

function FormInputs({suggestions, setCity}) {

  const [inputValue, setInputValue] = useState("");
  const [suggestedValue, setSuggestedValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setSuggestedValue(findClosestMatch(value));
    
    const closestMatch = findClosestMatch(value);
    setSuggestedValue(closestMatch);

    // If the typed value is not in the suggestions, save it as the city
    if (!closestMatch && value.trim() !== "") {
      setCity(value);
    }

  };

  const handleSelectSuggestion = (suggestion) => {
    setInputValue(suggestion);
    setSuggestedValue("");
    setCity(suggestion);
  };

  const findClosestMatch = (value) => {
    if (!value) return "";

    const closestMatch = suggestions.find((suggestion) =>
      suggestion.toLowerCase().startsWith(value.toLowerCase())
    );

    return closestMatch || "";
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type something..."
          className="border-2 border-gray-500 px-4 py-2  w-full"
        />
        {suggestedValue && (
          <div>
            <button onClick={() => handleSelectSuggestion(suggestedValue)}>
              {suggestedValue}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default FormInputs;
