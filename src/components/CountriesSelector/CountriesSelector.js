import React from "react";
import * as S from "./style";
import CheckBox from "components/CheckBox";
import { NATIONALITIES as countries } from "constant";

const CountriesSelector = ({ setUserCountries, userCountries }) => {
  // Country checkboxes' onChange event handler.
  const onCountryValueChange = (countryCode) => {
    // Based on if the value is present in the userCountries array,
    // add or remove changed checkbox's value.
    if (!userCountries.includes(countryCode))
      setUserCountries([...userCountries, countryCode]);
    else
      setUserCountries(
        userCountries.filter((countryCodeObj) => countryCodeObj != countryCode)
      );
  };

  return (
    <S.Filters>
      {countries?.map(({ country, nat }) => {
        return (
          <CheckBox
            value={nat}
            label={country}
            onChange={onCountryValueChange}
            key={nat}
          />
        );
      })}
    </S.Filters>
  );
};

export default CountriesSelector;
