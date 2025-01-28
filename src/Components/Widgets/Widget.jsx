import "./widgets.css";

const Widget = ({ item, amount = 0, icon, height = 100, width }) => {
  return (
    <div className="flexs widget" style={{ height: height, width: width }}>
      <div className="icon">{icon}</div>
      <div className="details">
        <p className="item">{item}</p>
        <p className="amount">{amount}</p>
      </div>
    </div>
  );
};

export default Widget;
