import React, { useState, useEffect, useRef, useCallback } from "react";
import CountryList from "../../CountryList/CountryList";
import classes from "./EmailPhoneInput.module.css";
import ErrorText from "./ErrorText";
import Input from "./Input";

//Hook that alerts clicks outside of the passed ref
function useOutsideAlerter(ref, showCountryList, hideCountryListFunc) {
  useEffect(() => {
    //Proceed only if the country list is shown and if the phone code wrapper element is not clicked
    function handleClickOutside(event) {
      if (showCountryList && !event.target.closest(`.phone-code__wrapper`)) {
        if (ref.current && !ref.current.contains(event.target)) {
          // hide the country list
          hideCountryListFunc();
          console.log("Clicked Outside!");
          return;
        }
      } else return;
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, showCountryList, hideCountryListFunc]);
}

export default function EmailPhoneInput() {
  const [inputValue, setInputValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [phoneCodeMode, setPhoneCodeMode] = useState(false);
  const [phoneCode, setPhoneCode] = useState("+95");
  const [showCountryList, setShowCountryList] = useState(false);
  const [isInputValid, setIsInputValid] = useState({
    isInvalid: false,
    error: "",
    isErrorInitiated: false,
  });
  const [countryLogo, setCountryLogo] = useState("");
  const [countryFlagList, setCountryFlagList] = useState([]);

  const countryListRef = useRef(null);
  useOutsideAlerter(countryListRef, showCountryList, () => setShowCountryList(false));

  // GeoLocation API
  const getCurrentLocation = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
    };
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  const fetchCurrentCountryLogo = useCallback(async () => {
    try {
      // Geolocation
      const geolocationData = await getCurrentLocation();
      const { latitude: lat, longitude: long } = geolocationData.coords;

      // Reverse Geocoding
      const curCountryRes = await fetch(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&format=json&apiKey=564ae217dbfa4295898b948e40828e42`
      );
      if (!curCountryRes.ok)
        throw new Error(`Could not find your location ${curCountryRes.status}`);
      const curCountryData = await curCountryRes.json();
      console.log(curCountryData);
      const curCountryCode = curCountryData.results[0].country_code;
      setCountryLogo(`https://flagcdn.com/${curCountryCode}.svg`);

      // Fetching all countries flags from restcountries.com
      const countryFlagsRes = await fetch("https://restcountries.com/v3.1/all");
      const countryFlagsData = await countryFlagsRes.json();
      const countryList = countryFlagsData
        .map(data => ({
          country_code: data.altSpellings[0],
          country_flag: data.flags.svg,
        }))
        .sort((a, b) => {
          if (a.country_code < b.country_code) {
            return -1;
          }
          if (a.country_code > b.country_code) {
            return 1;
          }
          return 0;
        });
      setCountryFlagList(countryList);
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  useEffect(() => {
    fetchCurrentCountryLogo();
  }, [fetchCurrentCountryLogo]);

  const handleChange = e => {
    setInputValue(e.target.value);
    if (e.target.value) {
      // Check if the input value is a number
      if (Number.isFinite(+e.target.value)) {
        setPhoneCodeMode(true);
        // Validate phone number
        if (isInputValid.isErrorInitiated && e.target.value.length <= 4) {
          setIsInputValid({
            isInvalid: true,
            error: "Please enter a valid phone number.",
            isErrorInitiated: true,
          });
        }
        if (e.target.value.length > 4) {
          setIsInputValid({
            isInvalid: false,
            error: false,
            isErrorInitiated: true,
          });
        }
      }
      // Check if the input value is not a number
      else if (!Number.isFinite(+e.target.value)) {
        setPhoneCodeMode(false);
        // Validate email
        if (
          isInputValid.isErrorInitiated &&
          (e.target.value.length <= 5 || !e.target.value.includes("@"))
        ) {
          console.log("sucker!");
          setIsInputValid({
            isInvalid: true,
            error: "Please enter a valid email.",
            isErrorInitiated: true,
          });
        }

        if (e.target.value.length > 5 && e.target.value.includes("@")) {
          console.log("Valid!");
          setIsInputValid({
            isInvalid: false,
            error: false,
            isErrorInitiated: true,
          });
        }
      }
    }
    // Show Error if the input is empty
    else if (!e.target.value) {
      setPhoneCodeMode(false);
      setIsInputValid({
        isInvalid: true,
        error: "Please enter a valid email or phone number.",
        isErrorInitiated: true,
      });
    }
  };

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = e => {
    if (!e.target.value) {
      setIsFocus(false);
      setIsInputValid({
        isInvalid: true,
        error: "Please enter a valid email or phone number.",
        isErrorInitiated: true,
      });
    }

    if (e.target.value) {
      // Validate phone number
      if (Number.isFinite(+e.target.value) && e.target.value.length < 4) {
        setIsInputValid({
          isInvalid: true,
          error: "Please enter a valid phone number.",
          isErrorInitiated: true,
        });
      }

      // Validate email
      if (
        !Number.isFinite(+e.target.value) &&
        (e.target.value.length <= 5 || !e.target.value.includes("@"))
      ) {
        setIsInputValid({
          isInvalid: true,
          error: "Please enter a valid email.",
          isErrorInitiated: true,
        });
      }
    }
  };

  const handleClick = () => {
    setShowCountryList(prevState => !prevState);
  };

  // Changing country flag
  const changeCountryLogo = code => {
    const flagSource = countryFlagList.find(({ country_code }) => country_code === code);
    console.log(flagSource);
    setCountryLogo(flagSource.country_flag);
  };

  const handlePhoneCodeChange = (val, countryCode) => {
    // Slice off the passed string from the '+' (e.g 'name +95' => +95)
    const phoneCode = val.substring(val.indexOf("+"));
    // Slice off the passed string from the index[0] to until before the '+' sign
    // const countryName = val.slice(0, val.indexOf("+") - 1);
    changeCountryLogo(countryCode);
    setPhoneCode(phoneCode);
    setShowCountryList(false);
  };

  return (
    <div className={classes["form__controls--email"]}>
      <Input
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        hasError={isInputValid.error}
        focusState={isFocus}
        value={inputValue}
        className={`form--sign-in__input ${isInputValid.error ? "error-border" : ""}`}
        id={"signInEmailPhone"}
        label={"Email or phone number"}
        darkInput={true}
      >
        {phoneCodeMode && (
          <div
            onClick={handleClick}
            className={`phone-code__wrapper ${classes["phone-code__wrapper"]}`}
          >
            <img src={countryLogo} alt="flag" className={classes["phone-code__country-logo"]}></img>
            <span className={classes["phone-code__text"]}>{phoneCode}</span>
            <span
              className={`${classes["phone-code__dropdown__arrow"]} ${
                showCountryList ? classes.flip : ""
              }`}
            ></span>
          </div>
        )}
      </Input>

      <CountryList
        ref={countryListRef}
        onPhoneCodeChange={(val, code) => handlePhoneCodeChange(val, code)}
        onShow={showCountryList}
      />

      {isInputValid.isInvalid && (
        <ErrorText errSource="sign-in-form">{isInputValid.error}</ErrorText>
      )}
    </div>
  );
}
