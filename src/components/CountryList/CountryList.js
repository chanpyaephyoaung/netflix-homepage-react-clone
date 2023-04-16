import React from "react";
import classes from "./CountryList.module.css";
import phoneData from "../../CountryData";
import CountryItem from "./CountryItem";

const CountryList = React.forwardRef((props, ref) => {
  const handleClick = (e, countryCode) => {
    const countryItem = e.target.closest(`li`);
    props.onPhoneCodeChange(countryItem.innerText, countryCode);
  };

  const phoneCodeList = phoneData.map(item => {
    return (
      <CountryItem
        onClick={e => handleClick(e, item.country_code)}
        key={item.country_name}
        countryName={item.country_name}
        phoneCode={item.phone_code}
      />
    );
  });
  return (
    <div
      ref={ref}
      className={`${classes["country-list__wrapper"]} ${!props.onShow ? classes.hidden : ""}`}
    >
      <ul className={classes["country-list"]}>{phoneCodeList}</ul>
    </div>
  );
});

export default CountryList;
