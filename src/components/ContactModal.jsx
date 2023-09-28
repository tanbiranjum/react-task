import React, { useEffect } from "react";
import Modal from "react-modal";
import { useSearchParams } from "react-router-dom";
import AllContacts from "./AllContacts";
import UsContacts from "./UsContact";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ContactModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [allContact, setAllContact] = React.useState(false);
  const [usContact, setUsContact] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    if (searchParams.has("allContact")) {
      searchParams.delete("allContact");
      setSearchParams(searchParams);
    } else if (searchParams.has("usContact")) {
      searchParams.delete("usContact");
      setSearchParams(searchParams);
    }
    setIsOpen(false);
  }

  // track the url search string change
  useEffect(() => {
    if (searchParams.get("allContact")) {
      setIsOpen(true);
      if (usContact) setUsContact(false);
      setAllContact(true);
    }

    if (searchParams.get("usContact")) {
      setIsOpen(true);
      if (allContact) setAllContact(false);
      setUsContact(true);
    }
  }, [searchParams.has("allContact"), searchParams.has("usContact")]);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Us Contact"
      >
        <button
          onClick={closeModal}
          style={{
            backgroundColor: "#46139f",
          }}
        >
          close
        </button>
        <button
          onClick={() => {
            setUsContact(false);
            setAllContact(true);
          }}
          style={{
            backgroundColor: "#46139f",
          }}
        >
          All Contacts
        </button>
        <button
          onClick={() => {
            setAllContact(false);
            setUsContact(true);
          }}
          style={{
            backgroundColor: "#ff7f50",
          }}
        >
          Us Contacts
        </button>
        {allContact && <AllContacts />}
        {usContact && <UsContacts />}
        <form></form>
      </Modal>
    </div>
  );
};

export default ContactModal;
