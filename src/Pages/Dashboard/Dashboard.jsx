import BarChart from "../../Components/Charts/BarChart";
import LineChart from "../../Components/Charts/LineChart";
import PieChart from "../../Components/Charts/PieChart";
import Widget from "../../Components/Widgets/Widget";
import { UsergroupAddOutlined, ContactsOutlined } from "@ant-design/icons";
import Location from "../../Components/Location/Location";
import Table from "../../Components/Table/Table";

const DashBoard = () => {
  return (
    <main>
      <section>
        <h1
          style={{
            fontSize: "3rem",
            lineHeight: "4.5rem",
            margin: "1.4rem 0 1.25rem 2rem",
          }}
        >
          DashBoard
        </h1>
        <div
          className="widget-container flexs"
          style={{ width: "37.5rem", gap: "1.9rem", paddingLeft: "1.5rem" }}
        >
          <Widget icon={<UsergroupAddOutlined />} item="Total Prospects" />
          <Widget icon={<ContactsOutlined />} item="Total Clients" />
        </div>
        <div
          className="chart-container flexs"
          style={{ width: "96%", gap: "3rem", margin: "3.75rem auto 0" }}
        >
          <LineChart />
          <BarChart />
        </div>
        <div
          className="pie-and-shedule flexs"
          style={{ width: "96%", gap: "3rem", margin: "3.75rem auto 7.6rem" }}
        >
          <PieChart />
          <div
            className="shedule"
            style={{
              height: "20rem",
              backgroundColor: "red",
              flex: 1,
              visibility: "hidden",
            }}
          ></div>
        </div>
        <Location />
        <Table />
      </section>
    </main>
  );
};

export default DashBoard;
