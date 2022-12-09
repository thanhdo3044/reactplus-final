import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";

import "./Dashboard.css";
import { ImageUser, ImageWacth, ImageAdd } from "../../components/image";
import { axiosGet } from "../../api/axiosUser";
export const Dashboard: React.FC = () => {
  const navigator = useNavigate();
  const submitLogout = () => {
    navigator("/signup");
  };

  const [isData, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const fetchUsers = await axiosGet();
      setData(fetchUsers.data);
    };
    getData();
  }, []);

  return (
    <div className="Dashboard-container">
      <div className="dashboard-up">
        <div className="img-users-border">
          <div className="border-icon-user">
            <ImageUser />
          </div>
        </div>
        <div className="name-user">
          <div className="box-name-user">
            <div className="name-icon-user">Monica Gamage</div>
            <div className="location-icon-user">@monicagamage</div>
            <div className="button-icon-logout">
              <button className="logout-button" onClick={submitLogout}>
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-in">
        <div className="watch-dow-dashboard">
          <div className="watch-user">
            <div className="box-watch-user">
              <div className="icon-watch">
                <ImageWacth />
              </div>
              <div className="content-watch">Good Afternoon</div>
            </div>
          </div>
        </div>

        <div className="task-list-in-dashboard">
          <div className="task-list-title">
            <p>Tasks List</p>
          </div>
          <div className="car-box-task-list">
            <div className="box-task-todo">
              <div className="title">
                <div className="title-box">Tasks List</div>
                <div className="title-icon">
                  <ImageAdd />
                </div>
              </div>
              <div>
                <div className="list">
                  <span className="color-radio"></span>
                  <p>Cook Rice and Chicken at 10 am</p>
                </div>
                {isData.map((item: any) => {
                  return (
                    <div className="list" key={item.id}>
                      <input
                        type="checkbox"
                        className="color-radio"
                        defaultChecked={item.completed}
                      />
                      <p>
                        {item.name} {moment(item.createdAt).format("hh A")}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
