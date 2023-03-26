//? HTTP request
const useFetch = async () => {
  const response = await fetch("http://localhost:3002/jsonarray");

  const transformData = await response.json();

  const loadedData = [];

  const MINUTE = 1000 * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const WEEK = DAY * 7;
  const MONTH = WEEK * 4;
  const YEAR = MONTH * 12;

  for (const key in transformData) {
    loadedData.push({
      id: crypto.randomUUID(),
      createdAt: Date.now() - Math.round(Math.random() * YEAR * 10),
      likes: 0,
      isLike: false,
      palette: [
        {
          id: crypto.randomUUID(),
          colorCode: "#" + transformData[key].first,
        },
        {
          id: crypto.randomUUID(),
          colorCode: "#" + transformData[key].second,
        },
        {
          id: crypto.randomUUID(),
          colorCode: "#" + transformData[key].third,
        },
        {
          id: crypto.randomUUID(),
          colorCode: "#" + transformData[key].fourth,
        },
      ],
    });
  }

  return loadedData;
};

export default useFetch;
