// return ammount of time in h:m format (ex: 4:20)
const getTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - hours * 3600) / 60);
  return `${hours}:${minutes}`;
};

// return ammount of time in h m format (ex: 16h 20m)
const getTotalTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - hours * 3600) / 60);
  return `${hours}h ${minutes}m`;
};

const getTotal = (state, target) => {
  const targetArray = [];
  state.map((item) => {
    targetArray.push(item[target][target]);
  });
  const uniqueTargetMembers = new Set(targetArray);
  return uniqueTargetMembers.size;
};

const getDate = (dateISOString) => {
  const month = dateISOString.slice(5, 7);
  const day = dateISOString.slice(8, 10);
  const year = dateISOString.slice(0, 4);
  return `${month}/${day}/${year}`;
};

export { getTime, getTotalTime, getTotal, getDate };
