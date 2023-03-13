const MINUTE = 1000 * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = WEEK * 4;
const YEAR = MONTH * 12;

const getRandomData = () => {
  return {
    id: crypto.randomUUID(),
    createdAt: Date.now() - Math.round(Math.random() * YEAR * 10),
    likes: 0,
    isLike: false,
    palette: [
      { code: getColorCode() },
      { code: getColorCode() },
      { code: getColorCode() },
      { code: getColorCode() },
    ],
  };
};

const getColorCode = () => {
  let colorCode = "#";
  for (let i = 0; i < 6; i++) {
    colorCode += Math.round(Math.random() * 0xf).toString(16);
  }
  return colorCode;
};

const useDummy = (length = 1) => {
  const dummyData = [];
  for (let i = 0; i < length; i++) {
    dummyData.push(getRandomData());
  }

  return dummyData;
};

export default useDummy;
