import { useEffect, useState } from "react";
import { toast, Bounce } from 'react-toastify';

const ChatMessage = ({ chatData }) => {
  const [chatMessage, setChatMessage] = useState(null);
  const [chatMessageData, setChatMessageData] = useState(null);
  const [showMessage, setShowMessage] = useState([]);

  const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes} ${amOrPm}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChatMessageData((prev) => ({
      ...prev,
      [name]: value,
      time: getCurrentTime()
    }))
    console.log("chatData", chatMessageData);
  };

  const handleSubmit = () => {
    if(chatMessageData === null){
      toast.error("Message cannot be empty!!",{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
        return;
    }
    try {
      setShowMessage((prev) => [
        ...prev,
        chatMessageData
      ]);
      setChatMessageData(null)
      toast.success("Message Sended Successful",{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    } catch (error) {
      console.log(error);
      toast.error("Failed to send data",{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
  }

  useEffect(() => {
    setChatMessage(chatData);
  }, [chatData]);
  // console.log("chatMessage", chatMessage);
  return (
    <>
   
          <div class="card" id="cardnewbgempty">
            <div class="p-3 border-bottom">
              <div class="row">
                <div class="col-xl-4 col-7">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0 avatar me-3 d-sm-block d-none">
                      <img
                        src={chatMessage?.userImg}
                        alt={chatMessage?.name}
                        class="topimgbox"
                      />
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-14 mb-1 text-truncate">
                        <a href="#" class="text-body">
                          {chatMessage?.name}
                        </a>
                      </h5>
                      <p class="text-muted text-truncate mb-0">
                        <i class="fas fa-circle"></i>
                        {chatMessage?.mode}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-8 col-5">
                  <ul class="list-inline user-chat-nav text-end mb-0">
                    <li class="list-inline-item">
                      <div class="dropdown show">
                        <a
                          class=" dropdown-toggle"
                          href="#"
                          role="button"
                          id="dropdownMenuLink"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#fff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                          </svg>
                        </a>

                        <div
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuLink"
                          style={{ padding: "0px" }}
                        >
                          <a
                            class="dropdown-item"
                            href="#"
                            style={{ padding: "0px" }}
                          >
                            {" "}
                            <input
                              type="text"
                              class="form-control bg-light rounded"
                              placeholder="Search..."
                            />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li class="list-inline-item">
                      <div class="dropdown">
                        <button
                          class="btnselectbox  dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#fff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="19" cy="12" r="1"></circle>
                            <circle cx="5" cy="12" r="1"></circle>
                          </svg>
                        </button>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                          x-placement="bottom-start"
                        >
                          <a class="dropdown-item" href="#">
                            Profile
                          </a>
                          <a class="dropdown-item" href="#">
                            Archive
                          </a>
                          <a class="dropdown-item" href="#">
                            Muted
                          </a>
                          <a class="dropdown-item" href="#">
                            Delete
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div
                class="chat-conversation p-3 simplebar-scrollable-y"
                data-simplebar="init"
              >
                <div class="simplebar-wrapper">
                  <div class="simplebar-height-auto-observer-wrapper">
                    <div class="simplebar-height-auto-observer"></div>
                  </div>
                  <div class="simplebar-mask">
                    <div class="simplebar-offset">
                      <div
                        class="simplebar-content-wrapper"
                        tabindex="0"
                        role="region"
                        aria-label="scrollable content"
                      >
                        <div class="simplebar-content" id="simpleid">
                          <ul class="list-unstyled mb-0">
                            <li class="chat-day-title">
                              <div class="title">Today</div>
                            </li>
                            <li className="left_col">
                              <div class="conversation-list">
                                <div class="ctext-wrap">
                                  <div class="chat-avatar">
                                    <img
                                      src={chatMessage?.userImg}
                                      alt="avatar-2"
                                    />
                                  </div>
                                  <div class="ctext-wrap-content">
                                    <h5 class="conversation-name">
                                      <a href="#" class="user-name">
                                        {chatMessage?.name}
                                      </a>{" "}
                                      <span class="time">10:00</span>
                                    </h5>
                                    <p class="mb-0">
                                      {chatMessage?.message1?.sender}
                                    </p>
                                  </div>
                                  <div class="dropdown show">
                                    <a
                                      class="btn dropdown-toggle"
                                      href="#"
                                      role="button"
                                      id="dropdownMenuLink"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    >
                                      <i class="fas fa-ellipsis-v"></i>
                                    </a>
                                    <div class="dropdown-menu">
                                      <a class="dropdown-item" href="#">
                                        Copy
                                      </a>
                                      <a class="dropdown-item" href="#">
                                        Save
                                      </a>
                                      <a class="dropdown-item" href="#">
                                        Forward
                                      </a>
                                      <a class="dropdown-item" href="#">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li class="right">
                              <div class="conversation-list">
                                <div class="ctext-wrap">
                                  <div class="chat-avatar">
                                    <img
                                      src={chatMessage?.you?.img}
                                      alt={chatMessage?.you?.name}
                                    />
                                  </div>
                                  <div class="ctext-wrap-content">
                                    <h5 class="conversation-name">
                                      <a href="#" class="user-name">
                                        {chatMessage?.you?.name}
                                      </a>{" "}
                                      <span class="time">10:02</span>
                                    </h5>
                                    <p class="mb-0">
                                      {chatMessage?.message1?.you}
                                    </p>
                                  </div>
                                  <div class="dropdown show">
                                    <a
                                      class="btn dropdown-toggle"
                                      href="#"
                                      role="button"
                                      id="dropdownMenuLink"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    >
                                      <i class="fas fa-ellipsis-v"></i>
                                    </a>
                                    <div class="dropdown-menu">
                                      <a class="dropdown-item" href="#">
                                        Copy
                                      </a>
                                      <a class="dropdown-item" href="#">
                                        Save
                                      </a>
                                      <a class="dropdown-item" href="#">
                                        Forward
                                      </a>
                                      <a class="dropdown-item" href="#">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="left_col">
                              <div class="conversation-list mb-0">
                                <div class="ctext-wrap">
                                  <div class="chat-avatar">
                                    <img
                                      src={chatMessage?.userImg}
                                      alt="avatar-2"
                                    />
                                  </div>
                                  <div class="ctext-wrap-content">
                                    <h5 class="conversation-name">
                                      <a href="#" class="user-name">
                                        {chatMessage?.name}
                                      </a>{" "}
                                      <span class="time">10:04</span>
                                    </h5>
                                    <p class="mb-0">
                                      {chatMessage?.message2?.sender}
                                    </p>
                                  </div>
                                  <div class="dropdown show">
                                    <a
                                      class="btn dropdown-toggle"
                                      href="#"
                                      role="button"
                                      id="dropdownMenuLink"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    >
                                      <i class="fas fa-ellipsis-v"></i>
                                    </a>
                                    <div class="dropdown-menu">
                                      <a class="dropdown-item" href="#">
                                        Copy
                                      </a>
                                      <a class="dropdown-item" href="#">
                                        Save
                                      </a>
                                      <a class="dropdown-item" href="#">
                                        Forward
                                      </a>
                                      <a class="dropdown-item" href="#">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <li class="right">
                                  <div class="conversation-list">
                                    <div class="ctext-wrap">
                                      <div class="chat-avatar">
                                        <img
                                          src={chatMessage?.you?.img}
                                          alt={chatMessage?.you?.name}
                                        />
                                      </div>
                                      <div class="ctext-wrap-content">
                                        <h5 class="conversation-name">
                                          <a href="#" class="user-name">
                                            {chatMessage?.you?.name}
                                          </a>{" "}
                                          <span class="time">10:06</span>
                                        </h5>
                                        <p class="mb-0">
                                          {chatMessage?.message2?.you}
                                        </p>
                                      </div>
                                      <div class="dropdown show">
                                        <a
                                          class="btn dropdown-toggle"
                                          href="#"
                                          role="button"
                                          id="dropdownMenuLink"
                                          data-toggle="dropdown"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                        >
                                          <i class="fas fa-ellipsis-v"></i>
                                        </a>
                                        <div class="dropdown-menu">
                                          <a class="dropdown-item" href="#">
                                            Copy
                                          </a>
                                          <a class="dropdown-item" href="#">
                                            Save
                                          </a>
                                          <a class="dropdown-item" href="#">
                                            Forward
                                          </a>
                                          <a class="dropdown-item" href="#">
                                            Delete
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>

                                <div class="ctext-wrap">
                                  <div class="chat-avatar">
                                    <img
                                      src={chatMessage?.userImg}
                                      alt="avatar-2"
                                    />
                                  </div>
                                  <div class="ctext-wrap-content">
                                    <h5 class="conversation-name">
                                      <a href="#" class="user-name">
                                        {chatMessage?.name}
                                      </a>{" "}
                                      <span class="time">10:04</span>
                                    </h5>
                                    <p class="mb-0">
                                      <div class="message-img mt-3 mb-0">
                                        <div class="message-img-list">
                                          <a class="d-inline-block" href="">
                                            <img
                                              src={
                                                chatMessage?.message3?.sender
                                              }
                                              alt="holi-pic"
                                              class="rounded"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </p>
                                  </div>
                                  <div class="dropdown show">
                                    <a
                                      class="btn dropdown-toggle"
                                      href="#"
                                      role="button"
                                      id="dropdownMenuLink"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    >
                                      <i class="fas fa-ellipsis-v"></i>
                                    </a>
                                    <div class="dropdown-menu">
                                      <a class="dropdown-item" href="#">
                                        Copy
                                      </a>
                                      <a class="dropdown-item" href="#">
                                        Save
                                      </a>
                                      <a class="dropdown-item" href="#">
                                        Forward
                                      </a>
                                      <a class="dropdown-item" href="#">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li class="right">
                              <div class="conversation-list">
                                <div class="ctext-wrap">
                                  <div class="chat-avatar">
                                    <img
                                      src={chatMessage?.you?.img}
                                      alt={chatMessage?.you?.name}
                                    />
                                  </div>
                                  <div class="ctext-wrap-content">
                                    <h5 class="conversation-name">
                                      <a href="#" class="user-name">
                                        {chatMessage?.you?.name}
                                      </a>{" "}
                                      <span class="time">10:02</span>
                                    </h5>
                                    <p class="mb-0">
                                      {chatMessage?.message3?.you}
                                    </p>
                                  </div>
                                  <div class="dropdown show">
                                    <a
                                      class="btn dropdown-toggle"
                                      href="#"
                                      role="button"
                                      id="dropdownMenuLink"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    >
                                      <i class="fas fa-ellipsis-v"></i>
                                    </a>
                                    <div class="dropdown-menu">
                                      <a class="dropdown-item" href="#">
                                        Copy
                                      </a>
                                      <a class="dropdown-item" href="#">
                                        Save
                                      </a>
                                      <a class="dropdown-item" href="#">
                                        Forward
                                      </a>
                                      <a class="dropdown-item" href="#">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li className="left_col">
                              <div class="conversation-list">
                                <div class="ctext-wrap">
                                  <div class="chat-avatar">
                                    <img
                                      src={chatMessage?.userImg}
                                      alt={chatMessage?.name}
                                    />
                                  </div>
                                  <div class="ctext-wrap-content">
                                    <h5 class="conversation-name">
                                      <a href="#" class="user-name">
                                        {chatMessage?.name}
                                      </a>{" "}
                                      <span class="time">10:06</span>
                                    </h5>
                                    <p class="mb-0">
                                      {chatMessage?.message4?.sender}
                                    </p>
                                  </div>
                                  <div class="dropdown show">
                                    <a
                                      class="btn dropdown-toggle"
                                      href="#"
                                      role="button"
                                      id="dropdownMenuLink"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    >
                                      <i class="fas fa-ellipsis-v"></i>
                                    </a>
                                    <div class="dropdown-menu">
                                      <a class="dropdown-item" href="#">
                                        Copy
                                      </a>
                                      <a class="dropdown-item" href="#">
                                        Save
                                      </a>
                                      <a class="dropdown-item" href="#">
                                        Forward
                                      </a>
                                      <a class="dropdown-item" href="#">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li class="right">
                              <div class="conversation-list">
                                <div class="ctext-wrap">
                                  <div class="chat-avatar">
                                    <img
                                      src={chatMessage?.you?.img}
                                      alt={chatMessage?.you?.name}
                                    />
                                  </div>
                                  <div class="ctext-wrap-content">
                                    <h5 class="conversation-name">
                                      <a href="#" class="user-name">
                                        {chatMessage?.you?.name}
                                      </a>{" "}
                                      <span class="time">10:02</span>
                                    </h5>
                                    <p class="mb-0">
                                      {chatMessage?.message4?.you}
                                    </p>
                                  </div>
                                  <div class="dropdown show">
                                    <a
                                      class="btn dropdown-toggle"
                                      href="#"
                                      role="button"
                                      id="dropdownMenuLink"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    >
                                      <i class="fas fa-ellipsis-v"></i>
                                    </a>
                                    <div class="dropdown-menu">
                                      <a class="dropdown-item" href="#">
                                        Copy
                                      </a>
                                      <a class="dropdown-item" href="#">
                                        Save
                                      </a>
                                      <a class="dropdown-item" href="#">
                                        Forward
                                      </a>
                                      <a class="dropdown-item" href="#">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            {
                              Array.isArray(showMessage) && showMessage?.map((data, id) => (
                                <li class="right" key={id}>
                              <div class="conversation-list">
                                <div class="ctext-wrap">
                                  <div class="chat-avatar">
                                    <img
                                      src={chatMessage?.you?.img}
                                      alt={chatMessage?.you?.name}
                                    />
                                  </div>
                                  <div class="ctext-wrap-content">
                                    <h5 class="conversation-name">
                                      <a href="#" class="user-name">
                                        {chatMessage?.you?.name}
                                      </a>{" "}
                                      <span class="time">{data?.time}</span>
                                    </h5>
                                    <p class="mb-0">
                                      {data?.message}
                                    </p>
                                  </div>
                                  <div class="dropdown show">
                                    <a
                                      class="btn dropdown-toggle"
                                      href="#"
                                      role="button"
                                      id="dropdownMenuLink"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    >
                                      <i class="fas fa-ellipsis-v"></i>
                                    </a>
                                    <div class="dropdown-menu">
                                      <a class="dropdown-item" href="#">
                                        Copy
                                      </a>
                                      <a class="dropdown-item" href="#">
                                        Save
                                      </a>
                                      <a class="dropdown-item" href="#">
                                        Forward
                                      </a>
                                      <a class="dropdown-item" href="#">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                              ))
                            }
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="simplebar-placeholder"></div>
                </div>
                <div class="simplebar-track simplebar-horizontal">
                  <div class="simplebar-scrollbar"></div>
                </div>
              </div>
            </div>
            <div class="p-3 chat-input-section">
              <div class="row">
                <div class="col">
                  <div class="position-relative">
                    <input
                      type="text"
                      class="form-control chat-input"
                      placeholder="Enter Message..."
                      name="message"
                      value={chatMessageData?.message || ""}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="col-auto">
                  <button type="submit" class="btn btn-primary chat-send w-md" onClick={handleSubmit}>
                    <span class="d-none d-sm-inline-block me-2">Send</span>{" "}
                    {/* <i class="mdi mdi-send float-end"></i> */}
                  </button>
                </div>
              </div>
            </div>
          </div>
       
    </>
  );
};

export default ChatMessage;
