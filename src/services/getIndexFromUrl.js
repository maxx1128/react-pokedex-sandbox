const pullID = (url) => {
  const urlArray = url.split('/').filter(el => el);
  return urlArray[urlArray.length - 1];
};

export default pullID;
