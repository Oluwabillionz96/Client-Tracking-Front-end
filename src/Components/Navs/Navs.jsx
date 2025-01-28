import { Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import "./navs.css";

export const LeftNavSide = ({ user = "User", handleClick, toggle }) => {
  return (
    <div className="left flexs">
      <Button
        className="fold"
        type="text"
        icon={toggle ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => handleClick()}
      ></Button>

      <p className="welcome">Welcome {user},</p>
    </div>
  );
};

export const RightNavSide = () => {
  return (
    <div className="right flexs">
      <div></div>
      <div></div>
    </div>
  );
};
