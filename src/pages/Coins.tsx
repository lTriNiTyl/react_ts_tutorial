import React, { useState } from 'react'

export const Coins = () => {
  const [loading, setLoading] = useState(true);
  const [coinsdata, setCoinsData] = useState<any[]>([]);

  React.useEffect(() => {
    // 비동기 함수를 정의
    const fetchCoins = async () => {
      // API 주소를 변수에 저장.
      const url = 'https://api.coinpaprika.com/v1/tickers';
      // fetch 함수로 API 요청을 보내고 응답을 받는다.
      const response = await fetch(url);
      // 응답을 json 형식으로 파싱
      const data = await response.json();
      setCoinsData(data);
      setLoading(false);
    };
    // 비동기 함수 호출.
    fetchCoins();
    /*
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoinsData(json);
        setLoading(false);
      });
    */
  }, [])
  return (
    <div>
      <h1>Hi Coins! ({coinsdata.length})</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coinsdata.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}) - ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
