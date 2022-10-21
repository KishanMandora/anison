function CommentsCard({ comments }) {
  return (
    <div className="p-4">
      <div className="flex w-full">
        <textarea
          type="text"
          placeholder="Add a comment"
          className="w-full border-2 border-x-0 border-t-0 border-neutral-600 bg-secondary-extra-light p-4 text-sm font-light text-stone-50 outline-none focus:border-neutral-200"
        />
        <button className="bg-secondary-dark p-4">Post</button>
      </div>

      <div className="mt-4">
        {comments.length > 1 ? (
          comments.map((comment) => {
            return (
              <div
                key={comment.comment}
                className="my-2 bg-secondary-light p-3"
              >
                <p className="text-sm"> {comment.comment} </p>
                <span className="text-xs italic">by {comment.commenter}</span>
              </div>
            );
          })
        ) : (
          <h3 className="mt-4text-lg">
            No Comments on this video, be the first one to comment
          </h3>
        )}
      </div>
    </div>
  );
}

export { CommentsCard };
