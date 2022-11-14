function Joke({ text, likes, onDelete, onLike, onDislike }) {
  return (
    <div>
      <p>{text}</p>
      <p>Likes: {likes}</p>
      <button onClick={onLike}>👍</button>
      <button onClick={onDislike}>👎</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Joke;
