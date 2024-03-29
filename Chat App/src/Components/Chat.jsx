import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import user from "../Data/dummy";
import {
  toggleChat,
  setChatData,
  setSelectedRow,
  setIsLoading,
} from "../Redux/Slice/Chatslice";
import { useDispatch, useSelector } from "react-redux";
import EmptyChat from "./EmptyChat";
// import chatlogo from "../../assets/images/chatlogo.png";
const Chat = () => {
  // redux logic
  const dispatch = useDispatch();
  const { toggle, selectedRow, chatData, isLoading } = useSelector(
    (state) => state.chat
  );
  const [searchInput, setSearchInput] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleSearch = (e) => {
    dispatch(setIsLoading());
    try {
      const searchValue = e.target.value;
      setSearchInput(searchValue);
      setSelectedRow(null);
      const filteredData = user.filter((data) =>
        data.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredUsers(filteredData);
    } catch (error) {
      console.log("error", error);
    } finally {
      dispatch(setIsLoading());
    }
  };

  const handleToggle = () => {
    dispatch(setIsLoading());
    try {
      setTimeout(() => {
        dispatch(toggleChat());
        dispatch(setIsLoading());
      },500);
    } catch (error) {
      console.log(error);
      dispatch(setIsLoading());
    }
  };

  return (
    <>
      {" "}
      <section className="Chat_sec">
        <div className="container" id="containerchat">
          <div className="row ">
            <div className="col-md-12">
              <div className="title_box">
                <h5>Chat</h5>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div class="chat-leftsidebar card">
                <div className="contain_chattoprap">
                  <div class="main_dropbox">
                    <div className="chatlogo">
                      {/* <img src={chatlogo} alt="logo" /> */}
                    </div>
                    <div className="last_box">
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
                                <line
                                  x1="21"
                                  y1="21"
                                  x2="16.65"
                                  y2="16.65"
                                ></line>
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
                                  value={searchInput}
                                  onChange={handleSearch}
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
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        data-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Chat
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        data-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Video Call
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="contact-tab"
                        data-toggle="tab"
                        data-target="#contact"
                        type="button"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        Contact
                      </button>
                    </li>
                  </ul>
                </div>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div
                      class="chat-message-list simplebar-scrollable-y"
                      data-simplebar="init"
                    >
                      <div className="tabbox">
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
                                <div class="simplebar-content">
                                  <div class="p-fdvdfvf4">
                                    <div>
                                      <h5 class="font-size-14 mb-3">
                                        Conversations{" "}
                                        {toggle === true ? (
                                          <span onClick={handleToggle}>
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="15"
                                              height="15"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="#000000"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                            >
                                              <circle
                                                cx="12"
                                                cy="12"
                                                r="10"
                                              ></circle>
                                              <line
                                                x1="12"
                                                y1="8"
                                                x2="12"
                                                y2="16"
                                              ></line>
                                              <line
                                                x1="8"
                                                y1="12"
                                                x2="16"
                                                y2="12"
                                              ></line>
                                            </svg>
                                          </span>
                                        ) : (
                                          <span onClick={handleToggle}>
                                            <img
                                              src="https://cdn-icons-png.flaticon.com/512/262/262038.png"
                                              alt="add-icon"
                                              width="20px"
                                            />{" "}
                                          </span>
                                        )}
                                      </h5>

                                      <ul class="list-unstyled chat-list">
                                        {isLoading ? (
                                          <li className="loading">
                                            <h4>Loading...</h4>
                                          </li>
                                        ) : toggle ? (
                                          (searchInput.trim() === ""
                                            ? user
                                            : filteredUsers
                                          )?.map((data) => (
                                            <li
                                              key={data.id}
                                              className={
                                                selectedRow === data.id
                                                  ? "bg-backform"
                                                  : ""
                                              }
                                              onClick={() => {
                                                dispatch(
                                                  setSelectedRow(data.id)
                                                );
                                                dispatch(setChatData(data));
                                              }}
                                            >
                                              <a href="#">
                                                <div class="d-flex align-items-start">
                                                  <div class="flex-shrink-0 user-img away align-self-center me-3">
                                                    <img
                                                      src={data?.userImg}
                                                      class="rounded-circle avatar-sm"
                                                      alt={data?.name}
                                                    />
                                                    <span
                                                      className={
                                                        data?.mode === "Online"
                                                          ? "user-status-online"
                                                          : "user-status-offline"
                                                      }
                                                    ></span>
                                                  </div>

                                                  <div class="flex-grow-1 overflow-hidden">
                                                    <h5 class="text-truncate font-size-14 mb-1">
                                                      {data?.name}
                                                    </h5>
                                                    <p class="text-truncate mb-0">
                                                      {data?.lastmessage}
                                                    </p>
                                                  </div>
                                                  <div class="flex-shrink-0">
                                                    <div class="font-size-11">
                                                      {data?.duration?.day}{" "}
                                                      {data?.duration?.time}
                                                    </div>
                                                  </div>
                                                </div>
                                              </a>
                                            </li>
                                          ))
                                        ) : (
                                          <li>
                                            <h6>
                                              To start converstation click on
                                              the add icon
                                            </h6>
                                          </li>
                                        )}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    ...fr
                  </div>
                  <div
                    class="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    ...frgdr
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div class="w-100 user-chat mt-4 mt-sm-0 ms-lg-1">
                {selectedRow === null ? (
                  <EmptyChat />
                ) : (
                  <ChatMessage chatData={chatData} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chat;
