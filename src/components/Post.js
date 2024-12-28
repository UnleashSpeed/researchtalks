import React from 'react';

const Post = ({ query, answers }) => {
    return (
        <div className="post">
            <h2 className="post-query">{query.title}</h2>
            <p className="post-content">{query.content}</p>
            <div className="post-answers">
                <h3>Answers:</h3>
                {answers.length > 0 ? (
                    answers.map((answer, index) => (
                        <div key={index} className="post-answer">
                            <p>{answer.content}</p>
                            <span className="answer-author">- {answer.author}</span>
                        </div>
                    ))
                ) : (
                    <p>No answers yet.</p>
                )}
            </div>
        </div>
    );
};

export default Post;