import { useEffect, useState } from "react";

// creating custom Hook
function useCurrencyInfo(currency) {
  const [data, setData] = useState({}); // {} empty object if fetch call is coming then if you loop on this obj then it will not crash
  // when component is mount and when it's life cycle event is trigger then useEffect hook is used.
  useEffect(() => {
    // api call fetch
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json()) //response convert into json
      .then((res) => setData(res[currency])); // holding the response in setData
    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
  // [] dependency array : means is chij mein agar koi bhi change aya toh mein vapase api call karunga
}

export default useCurrencyInfo;
