import { useEffect, useState } from "react";
import { getTranslate } from "../services";

const initTranslate = {
  heroTitle: "Унікальний додаток",
  heroText: "Зареєструйтесь, щоб отримати доступ",
  newsTitle: "Новини",
  newsTagsListTitle: "Статті за темами",
};

export const useTranslation = (lng = "ua") => {
  const [translation, setTranslation] = useState(initTranslate);
  const [isTranslationLoading, setIsTranslationLoading] = useState(false);

  // const [currentLanguage, setCurrentLanguage] = useState(lng);

  const getTranslationData = async (lng) => {
    console.log("getTranslationData");
    // setIsTranslationLoading(true);
    try {
      console.log(lng, "-------useTranslation LNG");
      const { data } = await getTranslate(lng);
      // console.log(data);
      setTranslation(data);
    } catch (error) {
      console.log(error);
    }
    // setIsTranslationLoading(false);
  };

  useEffect(() => {
    getTranslationData(lng);
  }, [lng]);

  const t = (key) => {
    if (!translation[key]) {
      return key;
    }
    // console.log(translation, 'translation');
    return translation[key];
  };

  return { t, isTranslationLoading };
};

// export default function App() {
//   const { t } = useTranslation();

//   return (
//     <div className="App">
//       <h1>{t("key")}</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
