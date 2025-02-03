import "./table.css";
import { Table } from "antd";
import { prospects } from "../Client";

const dataa = [
  {
    name: prospects[0].name,
    xProfile: prospects[0].xProfile,
    website: prospects[0].website,
    status: prospects[0].status,
    key: prospects[0].id,
  },
];



const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "X handle",
    dataIndex: "xProfile",
    key: "xprofile",
  },
  {
    title: "Website",
    dataIndex: "website",
    key: "website",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
];

const Tables = ({data}) => {
  return <Table columns={columns} dataSource={data} className="tab"></Table>;
};

export default Tables;
