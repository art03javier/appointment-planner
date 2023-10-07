//ContactsPage.js
import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  // Define state variables for contact info
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  // Callback function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for duplicates and add a new contact if not a duplicate
    const isNameDuplicate = contacts.some((contact) => contact.name === name);
    if (!isNameDuplicate) {
      addContact(name, phone, email);
      // Clear form data
      setName("");
      setPhone("");
      setEmail("");
      setIsDuplicate(false);
    } else {
      setIsDuplicate(true);
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
        {isDuplicate && <p>Name is a duplicate.</p>}
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};


