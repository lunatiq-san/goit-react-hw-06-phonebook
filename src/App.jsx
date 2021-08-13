import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

function App() {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('contacts')) ?? [];
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const changeFilter = event => {
  //   setFilter(event.currentTarget.value);
  // };

  // const deleteContact = contactId => {
  //   setContacts(prevContacts => [
  //     ...prevContacts.filter(contact => contact.id !== contactId),
  //   ]);
  // };

  // const formSubmitHandler = ({ name, number }) => {
  //   const contact = {
  //     id: v4(),
  //     name,
  //     number,
  //   };

  //   if (
  //     contacts.find(
  //       ({ name }) => name.toLowerCase() === contact.name.toLowerCase(),
  //     )
  //   ) {
  //     alert(`${name} is already in contacts`);
  //   } else {
  //     setContacts(prevState => [contact, ...prevState]);
  //   }
  // };

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      {/* ^^^ onSubmit={formSubmitHandler} */}
      <h2>Contacts</h2>
      <Filter />
      {/* ^^^ value={filter} onChange={changeFilter} */}
      <ContactList
      // contacts={getVisibleContacts()}
      // onDeleteContact={deleteContact}
      />
    </Container>
  );
}

// Получает все состояние redux state, возвращает обьект (свойства обьекта = пропсы компонента)
const mapStateToProps = state => ({
  a: 5,
  b: 10,
});

// Передает методы для отправки action
const mapDispatchToProps = dispatch => {
  // Возвращаем обьект с пропсами
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// function App() {
//   const [contacts, setContacts] = useState(() => {
//     return JSON.parse(localStorage.getItem('contacts')) ?? [];
//   });
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const changeFilter = event => {
//     setFilter(event.currentTarget.value);
//   };

//   const deleteContact = contactId => {
//     setContacts(prevContacts => [
//       ...prevContacts.filter(contact => contact.id !== contactId),
//     ]);
//   };

//   const formSubmitHandler = ({ name, number }) => {
//     const contact = {
//       id: v4(),
//       name,
//       number,
//     };

//     if (
//       contacts.find(
//         ({ name }) => name.toLowerCase() === contact.name.toLowerCase(),
//       )
//     ) {
//       alert(`${name} is already in contacts`);
//     } else {
//       setContacts(prevState => [contact, ...prevState]);
//     }
//   };

//   const getVisibleContacts = () => {
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedFilter),
//     );
//   };

//   return (
//     <Container>
//       <h1>Phonebook</h1>
//       <ContactForm onSubmit={formSubmitHandler} />
//       <h2>Contacts</h2>
//       <Filter value={filter} onChange={changeFilter} />
//       <ContactList
//         contacts={getVisibleContacts()}
//         onDeleteContact={deleteContact}
//       />
//     </Container>
//   );
// }

// export default App;
