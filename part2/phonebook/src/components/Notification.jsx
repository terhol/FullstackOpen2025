const Notification = ({ message, isError }) => {
  if (message === null) {
    return null;
  }
  const notificationStyleInfo = {
    color: "green",
    background: "lightGrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  const notificationStyleError = {
    color: "green",
    background: "lightGrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  const notificationStyle = isError
    ? notificationStyleError
    : notificationStyleInfo;

  return <div style={notificationStyle}>{message}</div>;
};

export default Notification;
