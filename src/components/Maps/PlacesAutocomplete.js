import React,{  useState} from "react";
import { TextInput } from '@mantine/core';
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
    getZipCode
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

  const PlacesAutocomplete = ({childToParent}) => {
  
    const[lati, setLat]=useState(0);
    const[lngi, setLng]=useState(0);
    const [city, setCity]=useState("");
    const [country, setCountry]=useState("");
    const [zipcode, setZipcode]=useState(undefined);
  
    
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();

      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        try {
        const { lat, lng } = getLatLng(results[0]);
        
        const cityArray = results[0].address_components.filter((item)=>item.types.includes("locality"));
        const countryArray = results[0].address_components.filter((item)=>item.types.includes("country"))
        const city = cityArray[0].long_name;
        const postal_code = getZipCode(results[0])
        const country = countryArray[0].long_name;
        setLat(lat);
        setLng(lng);
        setCity(city);
        setCountry(country);
        setZipcode(postal_code)
        setValue(description, false);
        childToParent({lat,lng, city, country, postal_code, value})
        } catch (error) {
        console.log("😱 Error: ", error);
        }
    });
    };
  const renderSuggestions = () =>
    data.map((suggestion) => {
    const {
        place_id,
        structured_formatting: { main_text, secondary_text },
    } = suggestion;

      return (
        <li className="places-list1" key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div ref={ref}>
        <TextInput
        label="Ingresa la dirección del sitio" required
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Where are you going?"></TextInput>
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" && <ul className="places-list">{renderSuggestions()}</ul>}

      
      <div>
      </div>
    </div>
  );
};

export default PlacesAutocomplete ;
