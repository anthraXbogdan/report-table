// return ammount of time in h:m format (ex: 4:20)
const getTime = (seconds) => {
  return new Date(seconds * 1000).toISOString().slice(11, 16);
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

export { getTime, getTotalTime, getTotal };
