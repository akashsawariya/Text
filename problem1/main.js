function wordCount(str) {
  const splitObj = {};

  const strLower = str.toLowerCase();
  for (let i in strLower) {
    const ch = strLower[i];
    splitObj[ch] = (splitObj[ch] || 0) + 1;
  }

  Object.keys(splitObj).forEach((key, i) => {
    if (splitObj[key] === " ") {
      delete splitObj[key];
    }
  });

  console.log(splitObj);
}

wordCount("Akash Sawariya");
