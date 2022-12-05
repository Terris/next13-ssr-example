const fetchComments = async () =>
  new Promise((resolve) =>
    setTimeout(() => resolve(["Comment 1", "Comment 2", "Comment 3"]), 2000)
  );

export default async function Comments() {
  const comments = (await fetchComments()) as string[];
  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}
