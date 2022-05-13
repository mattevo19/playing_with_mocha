const generateHashtag = (str) => {
  const cut = (x) => {
    return x
      .split(" ")
      .filter((x) => x != "")
      .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
      .join("");
  };

  return cut(str).length >= 140 || cut(str).length < 1 ? false : "#" + cut(str);
};
export default generateHashtag;
