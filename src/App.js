import React from "react";
import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";


// import ReactDom from "react-dom";

class App extends React.Component{
    state = { comments: [], editComment: null, saveComment: null };
    
    getComment = (comment) => {
        // console.log(comment);
        // console.log(this.state.comments)
        // console.log(this.state.editComment)

        this.setState({
           editComment: comment,
         });
      };
      
  deleteComment = () => {
    this.setState({
      editComment: null,
      comments: this.state.comments.filter(
        (comment) => comment.id !== this.state.editComment.id
      ),
    });
  };
    
      saveComment = (comment) => {

        // console.log(comment, this.state.comments);
        // let ss = this.state.comments.filter((comt) => comt.id === comment.id);
        let ss = this.state.comments.find((comt) => comt.id === comment.id);
        // console.log(ss); // [{id: 3 ,message : 'message'}]
        // console.log(ss)
        // if (ss.length > 0) {
        if (ss) {
          this.setState({
            comments: [
              ...this.state.comments.filter((comt) => comt.id !== comment.id), //
              comment,
            ],
            saveComment: comment,
            editComment: null,
          });
        } else {
          this.setState({
            comments: [...this.state.comments, comment],
            saveComment: comment,
            
          });
          // console.log(this.setState.comments)
        }
      };
    
    //   test() {
    //     let ss = this.getComment;
    //     ss();
    //     // console.log(ss)
    //   }
    
   render(){
        return(
            <>
        <CommentBox
          saveComment={this.saveComment}
          editComment={this.state.editComment}
          deleteComment={this.deleteComment}
          comments={this.state.comments}

         
        />
        <CommentList
          comments={this.state.comments}
          onSelectedComment={this.getComment}
          
          
        />
            </>
        )
    }
  }
export default App;