const Notification = ({ message }) => {
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

  return <div style={notificationStyleInfo}>{message}</div>;
};

export default Notification;
