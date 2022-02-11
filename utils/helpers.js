module.exports = {
  format_date: date => {
    // How do we format the date and time?
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear() + 5
      } - ${new Date(date).toLocaleTimeString()}`;
  }
};
