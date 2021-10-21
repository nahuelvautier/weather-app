const Message = ({ msg, bgColor }) => {
  let styles = {
    margin: "10% auto",
    padding: "10rem",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: bgColor,
  }

  return (
    <div style={styles}>
      <p>{msg}</p>
    </div>
  )
}

export default Message;

