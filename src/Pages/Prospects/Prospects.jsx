import Widget from "../../Components/Widgets/Widget";
import { UsergroupAddOutlined, PlusCircleFilled } from "@ant-design/icons";
import { prospects } from "../../Components/Client";
import { useState } from "react";
import "./prospects.css";
import AddProspects from "./AddProspects";
import { Cold, Qualified, Warm } from "../../assets/Icons";
import Tables from "../../Components/Table/Table";
import { ProspectsCard } from "./ProspectCard";
import { Table } from "antd";

const data = prospects.map(({ name, xProfile, website, status, id }) => ({
  key: id,
  name,
  xProfile,
  website,
  status: status.charAt(0).toUpperCase() + status.slice(1, status.length),
}));

function mapper(arr) {
  return arr.map((ar) => (
    <li key={ar.id}>
      <ProspectsCard
        name={ar.name}
        website={ar.website}
        xHandle={ar.xProfile}
        status={ar.status}
        table={false}
      />
    </li>
  ));
}

const Prospects = () => {
  const [isGrid, setIsgrid] = useState(true);
  const all = mapper(prospects);
  const allTable = data;
  const cold = prospects.filter((prospect) => prospect.status === "cold");
  const coldTable = data.filter((item) => item.status.toLowerCase() === "cold");
  const warm = prospects.filter((prospect) => prospect.status === "warm");
  const warmTable = data.filter((item) => item.status.toLowerCase() === "warm");
  const qualified = prospects.filter(
    (prospect) => prospect.status === "qualified"
  );
  const qualifiedTable = data.filter(
    (item) => item.status.toLowerCase() === "qualified"
  );
  const [shownProspects, setShownProspects] = useState(all);
  const [showntable, setShownTable] = useState(allTable);
  const [add, setAdd] = useState(false);
  return (
    <section className="prospects" onClick={() => setAdd(false)}>
      <button
        id="add-project"
        className="flexs"
        onClick={(e) => {
          setAdd(true);
          e.stopPropagation();
        }}
      >
        <PlusCircleFilled /> <span>Add project</span>
      </button>
      <h1>Prospects</h1>
      <div className="widget-container flexs">
        <Widget icon={<UsergroupAddOutlined />} item={"All prospects"} />
        <Widget icon={<Cold />} item={"Cold Prospects"} />
        <Widget icon={<Warm />} item={"Warm Prospects"} />
        <Widget icon={<Qualified />} item={"Contracts"} />
      </div>
      <input
        type="text"
        name="project"
        id="project"
        placeholder="Search here"
      />
      <div className="button-container flexs">
        <button
          onClick={() => {
            setShownProspects(all);
            setShownTable(allTable);
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            setShownProspects(mapper(cold));
            setShownTable(coldTable);
          }}
        >
          Cold
        </button>
        <button
          onClick={() => {
            setShownProspects(mapper(warm));
            setShownTable(warmTable);
          }}
        >
          Warm
        </button>
        <button
          onClick={() => {
            setShownProspects(mapper(qualified));
            setShownTable(qualifiedTable);
          }}
        >
          Contract
        </button>
        <div className="change">
          <button
            onClick={() => {
              setIsgrid(() => true);
            }}
            style={{
              backgroundColor: isGrid ? "#393939" : "white",
              color: isGrid ? "white" : "black",
            }}
          >
            <i className="fa fa-th-large" aria-hidden="true"></i>
          </button>
          <button
            onClick={() => {
              setIsgrid(() => false);
            }}
            style={{
              backgroundColor: isGrid ? "white" : "#393939",
              color: isGrid ? "black" : "white",
            }}
          >
            <i className="fa fa-th-list" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      {isGrid ? (
        <ul className="prospect-list">{shownProspects}</ul>
      ) : (
          <Tables data={showntable} />
      )}
      {add && <AddProspects />}
    </section>
  );
};

export default Prospects;
