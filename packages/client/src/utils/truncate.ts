const truncate = (str: string) => {
  return `${str.substr(0, 5)}...${str.substr(str.length - 5, 5)}`;
};

export default truncate;
