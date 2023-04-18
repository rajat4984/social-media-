import "./chatonline.css"

function ChatOnline() {
  return (
    <div className="chatOnline">
        <div className="chatOnlineFriend">
            <div className="chatOnlineImgContainer">
                <img className="chatOnlineImg" src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <div className="chatOnlineBadge"></div>
            </div>
            <span className="chatOnlineName">
               John Doe
            </span>
        </div>

        <div className="chatOnlineFriend">
            <div className="chatOnlineImgContainer">
                <img className="chatOnlineImg" src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <div className="chatOnlineBadge"></div>
            </div>
            <span className="chatOnlineName">
               John Doe
            </span>
        </div>

        <div className="chatOnlineFriend">
            <div className="chatOnlineImgContainer">
                <img className="chatOnlineImg" src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <div className="chatOnlineBadge"></div>
            </div>
            <span className="chatOnlineName">
               John Doe
            </span>
        </div>

    </div>
  )
}

export default ChatOnline