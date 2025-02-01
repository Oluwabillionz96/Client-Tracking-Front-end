import { Menu } from "antd";
import {
  MenuFoldOutlined,
  ContactsOutlined,
  UsergroupAddOutlined,
  HomeOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";
import "./menulist.css";
import { Link } from "react-router-dom";
function getItem(key, icon, label) {
  return {
    key,
    icon,
    label,
  };
}

const MenuList = () => {
  return (
    <Menu
      className="flexs column menu-list"
      theme="light"
      defaultSelectedKeys={["1"]}
      mode="inline"
      items={[
        getItem(
          1,
          <Link to={"/dashboard"}>
            <HomeOutlined />
          </Link>,
          "Dashboard"
        ),
        getItem(
          2,
          <Link to={"/prospects"}>
            <UsergroupAddOutlined />
          </Link>,
          "Prospects"
        ),
        getItem(
          3,
          <Link>
            <ContactsOutlined />
          </Link>,
          "Clients"
        ),
        getItem(
          4,
          <Link to={"/schedule"}>
            <FieldTimeOutlined />
          </Link>,
          "Shecdule"
        ),
      ]}
    ></Menu>
  );
};

export default MenuList;
