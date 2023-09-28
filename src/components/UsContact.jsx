import React from "react";
import { useEffect } from "react";

const UsContacts = () => {
  const [contact, setContact] = React.useState([]);
  const fetchContact = async () => {
    const response = await fetch(
      "https://contact.mediusware.com/api/country-contacts/United States/"
    );
    const data = await response.json();

    setContact(data.results);
  };

  useEffect(() => {
    fetchContact();
  }, []);

  return (
    <div
      style={{
        height: "400px",
        overflowY: "scroll",
      }}
    >
      <table className="table table-striped ">
        <thead>
          <tr>
            <th scope="col">Country</th>
            <th scope="col">Number</th>
          </tr>
        </thead>
        <tbody>
          {contact?.map((contact, index) => {
            return (
              <tr key={index}>
                <td>{contact.country.name}</td>
                <td>{contact.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsContacts;
