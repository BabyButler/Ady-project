import React,{useEffect} from 'react'
import { useDispatch,useSelector} from 'react-redux'
import {getAllPosts,getAllComments,commentDeleted,deletePost} from '../Redux/Action/Action'
import UpdateComments from './comments/moda.updateComment'
import PostHeader from './PostHeader'
import Posts from './posts/post'
import Logo from '../img/blank-avatar.png';
import dateformat from 'dateformat'
function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllPosts())
    dispatch(getAllComments())
  }, [])
  const deletComment = (ID) => {
    dispatch(commentDeleted(ID))
  }
  const deletedPost = (ID) => {
    dispatch(deletePost(ID))
  }
  

  const posts = useSelector((state) => state.UserReducer.posts)
  const comments = useSelector((state) => state.UserReducer.comments)
  const current_user = JSON.parse(localStorage.getItem('current_user'))
  return (
    <div className="container-fluid">
      <div>
        <div className="d-flex justify-content-center m-3">
          <Posts />
        </div>
          {posts?.map(data => 
          <div className="container card Home">
           
                        {data.username == current_user.username ?
                          <div className="btn-close" onClick={() => deletedPost(data._id)}></div>
                         : 
                         current_user.role == 'admin' || current_user.username == data.username ?
                          <div className="btn-close" onClick={() => deletedPost(data._id)}></div>
                         :
                         ''
                        }
               <div className="postHeader">
                <div className="activity-time">{data.email}</div>
            </div>
            <div >
              <PostHeader time={data.createdAt} avatar={data.avatar} post_id={data._id} description={data.description} name={data.username} media={data.media} />
              {comments?.map(comment => {
                if(comment.post_id == data._id) {
                  
                  return(
                    <div className='comment card-body d-flex'> 
                    <div className=""> 
                      {comment.avatar ? <span className="avatar">{comment.avatar}</span> : <span className="avatar-empty"><img className="likesImg" src={Logo} alt="Logo" /></span>}
                      <span className="">{comment.username}</span>
                    </div>
                    <div className="inside-comments">
                      <span className="commentaire">{comment.comment}</span>
                      <span className="">{dateformat(comment.createdAt)}</span>
                    </div>
                      <div className="div-action">
                      <span className="action d-flex">
                        {comment.username == current_user.username ?
                        <div className='d-flex justify-content-around'>
                          <span className="btn" onClick={()=> deletComment(comment._id)}> <i class="fas fa-trash-alt"></i></span>
                          <UpdateComments comment={comment.comment} id={comment._id} />
                        </div>
                         : 
                         current_user.role == 'admin' || current_user.username == data.username ?
                         <div className='d-flex justify-content-around'>
                           <span className="btn" onClick={()=> deletComment(comment._id)}> <i class="fas fa-trash-alt"></i></span>
                         </div>
                         :
                         ''
                         }
                        
                      
                      </span>
                      </div>
                    </div> 
                  )
                }
                 
              }
                
                ) }
            </div>
          </div>
          )}
      </div>
    </div>
  )
}

export default Home