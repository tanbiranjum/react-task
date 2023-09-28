import React, { useEffect, useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [lists, setLists] = useState([]);
  const [sortedList, setSortedList] = useState([]);

  const handleClick = (val) => {
    setShow(val);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const updatedList = [
      ...lists,
      { name: name, status: status.toLowerCase() },
    ];
    setLists(updatedList);

    const activeList = updatedList.filter((list) => list.status === "active");
    const completedList = updatedList.filter(
      (list) => list.status === "completed"
    );
    const otherList = updatedList.filter(
      (list) => list.status !== "active" && list.status !== "completed"
    );

    const updatedSortedList = [...activeList, ...completedList, ...otherList];

    setSortedList(updatedSortedList);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            className="row gy-2 gx-3 align-items-center mb-4"
            onSubmit={onFormSubmit}
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Status"
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {show === "all" &&
                sortedList.map((list, index) => {
                  return (
                    <tr key={index}>
                      <td>{list.name}</td>
                      <td>{list.status}</td>
                    </tr>
                  );
                })}
              {show !== "all" &&
                lists.map((list, index) => {
                  if (show === "active") {
                    if (list.status === "active") {
                      return (
                        <tr key={index}>
                          <td>{list.name}</td>
                          <td>{list.status}</td>
                        </tr>
                      );
                    }
                  } else if (show === "completed") {
                    if (list.status === "completed") {
                      return (
                        <tr key={index}>
                          <td>{list.name}</td>
                          <td>{list.status}</td>
                        </tr>
                      );
                    }
                  }
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
