module.exports = {
  format_date: (date) => {
    // If date doesn't exist, return no value otherwise return date
    if (!date) {
      return "";
    }
    return date.toLocaleDateString();
  },
};
