import React, { useState } from "react";
import "./HeaderHome.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AlignRightOutlined, SearchOutlined } from "@ant-design/icons";

const HeaderHome: React.FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>();
  const [location, setLocation] = useState<string>("");
  const [showToggle, setShowToggle] = useState<boolean>(false);

  const onChangeDate = (dates: any[]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const onChangeLocation = (e: React.FormEvent<HTMLInputElement>) => {
    setLocation(e.currentTarget.value);
  };

  const onClickSearchRoom = () => {
    console.log(startDate, endDate, location);
  };
  const openMenuToggle = () => {
    setShowToggle(!showToggle);
  };
  return (
    <div className="header">
      <div className="header__logo">
        <p>Booking</p>
      </div>
      <div className="header__search">
        <input
          type="text"
          placeholder="Tìm kiếm"
          onChange={onChangeLocation}
          value={location}
        />
        <DatePicker
          selected={startDate}
          onChange={onChangeDate}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          minDate={new Date()}
        />
        <button onClick={onClickSearchRoom}>
          <SearchOutlined />
        </button>
      </div>
      <div className="header__nav">
        <ul>
          <li>
            <a href="/aa">Chủ nhà</a>
          </li>
          <li>
            <a href="/aa">Đăng kí</a>
          </li>
          <li>
            <a href="/aa">Đăng nhập</a>
          </li>
        </ul>
      </div>
      <div className="header__toggle">
        <AlignRightOutlined onClick={openMenuToggle} />
        <div
          className={
            showToggle ? "header__toggle__menu show" : "header__toggle__menu"
          }
        >
          <ul>
            <li>
              <a href="/aa">Chủ nhà</a>
            </li>
            <li>
              <a href="/aa">Đăng kí</a>
            </li>
            <li>
              <a href="/aa">Đăng nhập</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
