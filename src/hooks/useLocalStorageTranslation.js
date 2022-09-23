import { useEffect, useState } from 'react';

const LS_KEY = 'language';

export const useLocalStorageTranslation = () => {
  const getLocalData = () => {
    return JSON.parse(localStorage.getItem(LS_KEY)) ?? 'ua';
  };

  const setLocalData = () => {
    return localStorage.setItem(LS_KEY, JSON.stringify(currentLanguage));
  };

  const [currentLanguage, setCurrentLanguage] = useState(getLocalData);

  useEffect(setLocalData, [currentLanguage]);
  // console.log(
  //   currentLanguage,
  //   'currentLanguage useLocalStorageTranslation'
  // );

  return { currentLanguage, setCurrentLanguage };
};
