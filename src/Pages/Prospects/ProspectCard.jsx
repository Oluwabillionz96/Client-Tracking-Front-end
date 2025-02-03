export function ProspectsCard({
  name ,
  website,
  xHandle,
  status = "cold",
}) {
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
