import "./navbar.scss";
import wflogo from "../../assets/wflogo.svg";
import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import { useState } from "react";

export default function Navbar(params: any): JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
     return () => (window.onscroll = null);
  }
  console.log(isScrolled);
  
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src={wflogo} alt="Wokeflix Logo" />
          <span>{"Homepage"}</span>
          <span>{"Series"}</span>
          <span>{"Movies"}</span>
          <span>{"New and Popular"}</span>
          <span>{"My List"}</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>{"Settings"}</span>
              <span>{"Logout"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
