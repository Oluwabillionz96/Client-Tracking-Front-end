import Widget from "../../Components/Widgets/Widget";
import { UsergroupAddOutlined } from "@ant-design/icons";
import { prospects } from "../../Components/Client";
import { useState } from "react";
import "./prospects.css";
import AddProspects from "./AddProspects";

function ProspectsCard({ name, website, xHandle, status = "cold" }) {
  return (
    <>
      <div className="prospect-card flexs">
        <div
          className="color"
          style={{
            backgroundColor:
              status === "cold"
                ? "#A3D4F7"
                : status === "warm"
                ? "#FFC04D"
                : "#8BC34A",
            width: "0.875rem",
            height: "100%",
          }}
        ></div>
        <div className="info flexs column">
          <div className="flexs">
            <div className="icon"></div>
            {name}
          </div>
          <div className="flexs">
            <div className="icon"></div>
            {website}
          </div>
          <div className="flexs">
            <div className="icon"></div>
            {xHandle}
          </div>
        </div>
        <div className="img flexs">
          <p>{name.charAt(0).toUpperCase()}</p>
        </div>
      </div>
    </>
  );
}

function Table({ name, status }) {
  return (
    <div className="prospect-table">
      <div className="status">{status}</div>
      <p className="name">{name}</p>
      <div className="logo">{name.charAt(0).toUpperCase()}</div>
    </div>
  );
}

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
  const all = mapper(prospects);
  const cold = prospects.filter((prospect) => prospect.status === "cold");
  const warm = prospects.filter((prospect) => prospect.status === "warm");
  const qualified = prospects.filter(
    (prospect) => prospect.status === "qualified"
  );
  const coldOnly = mapper(cold);
  const warmOnly = mapper(warm);
  const qualifiedOnly = mapper(qualified);
  const [shownProspects, setShownProspects] = useState(all);
  const [add, setAdd] = useState(false);
  return (
    <section className="prospects" onClick={() => setAdd(false)}>
      <button
        id="add-project"
        onClick={(e) => {
          setAdd(true);
          e.stopPropagation();
        }}
      >
        Add project
      </button>
      <h1>Prospects</h1>
      <div className="widget-container flexs">
        <Widget icon={<UsergroupAddOutlined />} item={"All prospects"} />
        <Widget icon={<UsergroupAddOutlined />} item={"Cold Prospects"} />
        <Widget icon={<UsergroupAddOutlined />} item={"Warm Prospects"} />
        <Widget icon={<UsergroupAddOutlined />} item={"Contracts"} />
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
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            setShownProspects(coldOnly);
          }}
        >
          Cold
        </button>
        <button
          onClick={() => {
            setShownProspects(warmOnly);
          }}
        >
          Warm
        </button>
        <button
          onClick={() => {
            setShownProspects(qualifiedOnly);
          }}
        >
          Contract
        </button>
        <button className="change" onClick={() => {}}>
          Change
        </button>
      </div>
      <ul className="prospect-list">{shownProspects}</ul>
      {add && <AddProspects />}
    </section>
  );
};

export default Prospects;
