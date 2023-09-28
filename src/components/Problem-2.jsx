import React from "react";
import ContactModal from "./ContactModal";
import { useNavigate } from "react-router-dom";

const Problem2 = () => {
  const navigate = useNavigate();

  const showAllContact = () => {
    navigate({ search: "allContact=true" });
  };

  const showUsContact = () => {
    navigate({ search: "usContact=true" });
  };

  return (
    <div className="container #container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={showAllContact}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={showUsContact}
          >
            US Contacts
          </button>
          <ContactModal/>
        </div>
      </div>
    </div>
  );
};

export default Problem2;
