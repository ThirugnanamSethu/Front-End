import React from "react";
import "../css/comments.css";


class CommentBox extends React.Component {
  state = {
    editButtonDisableToggle: true,
    textComment: "",
    editComment: "",
    counter: 1000001,
  };
/////EditButton
  handleEditButton = (message) => {
    // console.log(message);
    this.setState({
      editButtonDisableToggle: false,
      textComment: message,
    });
    // console.log(this.state.editComment);
  };
/// submit button
  handleSubmitButton() {
    const comm = this.props.editComment;
    comm.message = this.state.textComment;
    this.setState({
      // editButtonDisableToggle: false,
      editButtonDisableToggle: !this.state.editButtonDisableToggle,
      textComment: "",
    });
    this.props.saveComment(comm);
  }
  // delete=()=>{
  //   // const newArray = this.state.comments.filter((f)=> f.id !==id)
  //   // this.setState({newArray})
  //   // delete("id")
  // }



 //  DeleteButton
  handleDeleteButton =()=> {
    // console.log(this.props);
    this.setState({
           textComment:"",
          //  editButtonDisableToggle: !this.state.editButtonDisableToggle,
          //  editButtonDisableToggle:true
    });
    this.props.deleteComment();
  }


        // this.Comments={dele};
    //  const {comments}= this.props
    // const newArray = this.state.array.filter((f)=> f.id !==id)
    // this.setState({newArray})
    // const {editComment}=this.props
    
        // this.setState({
        //   Comments: [
        //     ...this.state.Comments.filter((comt) => comt.id !==dele), //
        //     dele,
        //   ],
        //   saveComment: dele,
        //   editComment: null,
       
      // this.setState({
      //   Comments:dele,
      //   saveComment:null,
      //   editComment:null,
      // })
       // console.log(Comments)
      // this.handleSubmitButton(dele)
      // this.setState({newArray});
      // this.props.saveComment(newArray);
      // delete('id')

      // if(editComment){
      //  ( this.state.comments.filter((commt)=> commt.id!==id))
      // }else{
      //   console.log("tooo") 
      // }
      
  // console.log(id)
  // const  data = this.props.comments.fliter((commt)=> commt.id !== id);
  // console.log(data)
  // this.props.saveComment(dele);
 
 


  
    
  handleSaveButton = () => {
    let comment = {
      id: this.state.counter,
      message: this.state.textComment,
    };
    // console.log(comment.message);
    // console.log(comment.id);

    this.setState({ textComment: "", counter: this.state.counter + 1 });
    this.props.saveComment(comment);
    // console.log(comment.id)
    // console.log(comment.message)
  };

  

componentDidUpdate() {
  
    console.log("Inside COmponent Did mount");
    if (this.props.editComment) {
      console.log("Inside COmponent Did mount Edit");
      if (this.state.editComment !== this.props.editComment.message) {
        this.setState({
          textComment: this.props.editComment.message,
          editComment: this.props.editComment.message,

        });
      }
    }
  }

  

  render() {

    const { editComment } = this.props;
    const {comments}=this.props;
    // const {comments} = this.props
    // console.log(comments)
    // console.log(this.props)

    // console.log(comments)

    return (
      <div className="commment-menu">
        {!editComment ? (
          <form onSubmit={(e) => {e.preventDefault();}} >
           
            <div>
              <input
                className="comment-text"
                value={this.state.textComment}
                onChange={(e) => this.setState({ textComment: e.target.value })}
              
              ></input>
              
             
            </div>


            <div >
              <button 
               className="btn-add"
              onClick={this.handleSaveButton} >
                Add
              </button>
            </div>

          </form>
        ) : (
          <form  onSubmit={(e) => {e.preventDefault();}} >
           
            <div>
              <input
               className="comment-text"
                value={this.state.textComment}
                onChange={(e) => this.setState({ textComment: e.target.value })}
              />
             
               {/* <button 
                onClick={() => this.handleEditButton(editComment.message)} >
                  Edit
                </button> */}
            </div>
            <div >
              
              {this.state.editButtonDisableToggle ? (
                // <button  
                //  onClick={() => this.handleSubmitButton()} >   
                //   Save {" "}
                // </button>
                <button 
                className="btn-edit"
                onClick={() => this.handleEditButton(editComment.message)} >
                  Edit
                </button>
              ) : (
               
              //   <button 
              //   onClick={()=>this.handleDeleteButton()}>
              //    Delete
              //  </button>
                <button 
                className="btn-save" 
                 onClick={() => this.handleSubmitButton()} >   
                  Save {" "}
                </button>
               
               ) }

                 <button 
                  className="btn-delete"
                 onClick={()=>this.handleDeleteButton()}>
                  Delete
                </button>
             
            </div>

          </form>
        )}
      </div>
    );
  }
}
//  < CommentList
// // handleDeleteButton={this.handleDeleteButton()}
// // handleSubmitButton={this.handleSubmitButton}
// // handleEditButton={this.handleEditButton}

// /> 

export default CommentBox;
