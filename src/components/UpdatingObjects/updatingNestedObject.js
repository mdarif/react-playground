import { useState } from "react";

export default function UpdatingNestedObject() {
  const [person, setPerson] = useState({
    name: "Mohammad Arif",
    artwork: {
      title: "UI Architect",
      city: "New Delhi",
      image:
        "https://media-exp1.licdn.com/dms/image/C5103AQFaWzcjCdXkIg/profile-displayphoto-shrink_800_800/0/1572578402902?e=1672876800&v=beta&t=Elic9PuS5mqru9h77kTHk927F9vDaPA7S_g1lJ3LnXw",
    },
  });

  function handleNameChange(e) {
    setPerson({
      ...person, // copy the existing person object
      name: e.target.value,
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person, // copy the existing person object
      artwork: {
        ...person.artwork, // copy the artwork object
        title: e.target.value, // update the title property
      },
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person, // copy the existing person object
      artwork: {
        ...person.artwork, // copy the artwork object
        city: e.target.value, // update the city property
      },
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person, // copy the existing person object
      artwork: {
        ...person.artwork, // copy the artwork object
        image: e.target.value, // update the image property
      },
    });
  }

  return (
    <>
      <h2>Updating a nested object </h2>
      <label>
        Name:
        <input value={person.name} onChange={handleNameChange} />
      </label>
      <label>
        Title:
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>
      <label>
        City:
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <label>
        Image:
        <input value={person.artwork.image} onChange={handleImageChange} />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {" by "}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
}
