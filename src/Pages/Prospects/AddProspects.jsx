import "./addProspects.css";
const AddProspects = () => {
  return (
    <section className="add-prospect">
      <header>
        <h2>Add a prospect</h2>
        <p>
          Fill in prospect details to build and maintain . comprehensive
          prospect records.
        </p>
      </header>
      <form action="" className="flexs column">
        <div className="flexs">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" placeholder="John Doe" />
        </div>
        <div className="flexs">
          <label htmlFor="website">website:</label>
          <input
            type="text"
            name="website"
            id="website"
            placeholder="www.website.com"
          />
        </div>
        <div className="flexs">
          <label htmlFor="xhandle">X: </label>
          <input
            type="text"
            name="xhandle"
            id="xhandle"
            placeholder="@prospect"
          />
        </div>
        <div className="flexs">
          <label htmlFor="image">Image:</label>
          <input type="file" name="image" id="image" placeholder="@prospect" />
        </div>
      </form>
      <button>Reset</button>
      <button>Save</button>
    </section>
  );
};

export default AddProspects;
