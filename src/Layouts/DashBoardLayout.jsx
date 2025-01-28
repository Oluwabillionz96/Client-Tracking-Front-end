import { Button, Collapse, Layout, Menu, theme } from "antd";
const { Header, Sider, Content } = Layout;
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import MenuList from "../Components/MenuList/MenuList";
import "./layout.css";
import { useState } from "react";
import { LeftNavSide, RightNavSide } from "../Components/Navs/Navs";
import DashBoard from "../Pages/DashBoard/DashBoard";

const DashBoardLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <Layout>
      <Sider className="flexs sidebar" collapsed={isCollapsed}>
        <MenuList />
      </Sider>
      <Layout>
        <Header className="flexs head">
          <LeftNavSide
            handleClick={() => setIsCollapsed(!isCollapsed)}
            toggle={isCollapsed}
          />
          <RightNavSide />
        </Header>
        <Content>
          <DashBoard />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashBoardLayout;
