import { Menu } from "antd";
import {
  MenuFoldOutlined,
  ContactsOutlined,
  UsergroupAddOutlined,
  HomeOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";
import "./menulist.css";
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
        getItem(1, <HomeOutlined />, "Dashboard"),
        getItem(2, <UsergroupAddOutlined />, "Prospects"),
        getItem(3, <ContactsOutlined />, "Clients"),
        getItem(4, <FieldTimeOutlined />, "Shecdule"),
      ]}
    ></Menu>
  );
};

export default MenuList;
