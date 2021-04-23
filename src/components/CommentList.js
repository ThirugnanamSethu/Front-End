import React from "react";
import "../css/comments.css";


class CommentList extends React.Component {
  lineComments() {
    return this.props.comments.sort(function (a,b) {
      return a.id -b.id ;
    });
  }

  render() {
    return (
      <div>
        {this.lineComments().map((comment) => {
          return (
            <div
              key={comment.id}
              onClick={() => this.props.onSelectedComment(comment)}
            >
              {/* <p>{comment.id}</p> */}
              <p className="list">{comment.message}</p>
             
              {/* {console.log(comment.message)} */}
            </div>
          );
        })}
      </div>
    );
  }
}

export default CommentList;
