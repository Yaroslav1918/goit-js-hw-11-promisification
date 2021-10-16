const delay = ms => {
 return new Promise((resolve) => {
  resolve(ms)
});
};

const logger = time => console.log(`Resolved after ${time}ms`);