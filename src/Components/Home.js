import React from "react";

const Home = () => {
  return (
    <div>
      <div className="container my-5">
        <h2>Add a Note</h2>

        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Title:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              {" "}
              Note :
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <hr />

      <div className="container my-5">
        <h2>Your Notes</h2>
      </div>
    </div>
  );
};

export default Home;
