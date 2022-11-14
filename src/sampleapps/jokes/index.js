import { useState } from "react";
// import "./joke.css";
import Joke from "./joke";
import JokeForm from "./jokeform";

let id = 3;

function JokeSampleApp() {
  const initialState = [
    {
      id: 1,
      text: "I'm afraid for the calendar. Its days are numbered.",
      likes: 0,
    },
    {
      id: 2,
      text: "I used to be addicted to soap, but I'm clean now.",
      likes: 0,
    },
  ];
  const [jokes, setJokes] = useState(initialState);

  const handleAddJoke = (text) => {
    setJokes([
      {
        id: id++,
        text,
        likes: 0,
      },
      ...jokes,
    ]);
  };

  const handleDelete = (id) => {
    setJokes(jokes.filter((joke) => joke.id !== id));
  };

  const handleLike = (id) => {
    setJokes(
      jokes.map((joke) => {
        if (joke.id === id) {
          return {
            ...joke,
            likes: joke.likes + 1,
          };
        } else {
          return joke;
        }
      })
    );
  };

  const handleDislike = (id) => {
    setJokes(
      jokes.map((joke) => {
        if (joke.id === id) {
          return {
            ...joke,
            likes: joke.likes - 1,
          };
        } else {
          return joke;
        }
      })
    );
  };

  const handleSort = () => {
    /**
     * Array.prototype.sort()
     *
     * The sort() method sorts the elements of an array in place
     * and returns the reference to the 'same array', now sorted.
     *
     * The default sort order is ascending,
     */
    setJokes([...jokes].sort((a, b) => b.likes - a.likes));
  };

  return (
    <div className="">
      <h1>Dad Jokes</h1>

      <button onClick={handleSort}>Sort</button>

      <JokeForm onAddJoke={handleAddJoke} />

      {jokes.map((joke) => (
        <Joke
          key={joke.id}
          onLike={() => handleLike(joke.id)}
          onDislike={() => handleDislike(joke.id)}
          onDelete={() => handleDelete(joke.id)}
          {...joke}
        />
      ))}
    </div>
  );
}

export default JokeSampleApp;
