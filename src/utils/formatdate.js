const formatdate = (date) => {
  const year = date.getFullYear();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  return year + "-" + month + "-" + day;
};


module.exports = formatdate;
