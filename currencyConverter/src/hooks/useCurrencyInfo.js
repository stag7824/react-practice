import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
    const [currencyInfo, setCurrencyInfo] = useState({});
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/8d505a4908acae769eb583c8/latest/${currency}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Error fetching data: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                setCurrencyInfo(data["conversion_rates"]);
                console.log("data",data, "currencyInfo",currencyInfo);
            })
            .catch((error) => {
                console.error("Failed to fetch currency info:", error);
                // setCurrencyInfo(null); // Optionally reset currency info or handle error differently
            });
    }, [currency]);
    return currencyInfo; 
}

export default useCurrencyInfo;