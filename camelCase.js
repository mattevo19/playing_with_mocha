const toCamelCase = (str) => {
  return str
    .split(/[_-]/)
    .map((word, i) => {
      return i > 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word;
    })
    .join("");
};

export default toCamelCase;
