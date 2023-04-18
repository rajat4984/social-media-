import "./message.css";

function Message({ own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <p className={own ? "messageText own" : "messageText"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi
 
        </p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  );
}

export default Message;
