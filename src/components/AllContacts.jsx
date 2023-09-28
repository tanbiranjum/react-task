import React from "react";
import { useEffect } from "react";

const AllContacts = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [isDialogueOpen, setIsDialogueOpen] = React.useState(false);
  const [contact, setContact] = React.useState([]);
  const [selectedContact, setSelectedContact] = React.useState({});
  const fetchContact = async () => {
    const response = await fetch(
      "https://contact.mediusware.com/api/contacts/"
    );
    const data = await response.json();
    setContact(data.results);
  };

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
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
                <td>
                  <button
                    onClick={() => {
                      alert(
                        `Country ${contact.country.name} and Number ${contact.phone}}`
                      );
                    }}
                  >
                    Details
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllContacts;
