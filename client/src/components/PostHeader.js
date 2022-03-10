import React from 'react'
import Comments from './Comments'
import dateformat from 'dateformat'
function PostHeader({time,img,name,description,media,avatar,post_id}) {
  console.log(media?.slice(-4))
  let pimg = ''
  let pvideo = ''
  let paudio = ''
  if(media?.slice(-4) == '.png' || media?.slice(-4) == '.jpg' || media?.slice(-3) == '.jpeg'){
     pimg = media;
  }else if(media?.slice(-4) == '.mp4'){
     pvideo = media;
  }else{
     paudio = media; 
  }
  return (
    <div className="Post">
      <div className="post-header">
          <div className="media">
            <div className="user_img">
              <img className="postImg" src={img ??"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"}alt=""/>
            </div>
          <div className="Info">
            <div className="UserName">
              <a href="https://">{name}</a>
              <span>posted an update</span>
            </div>
            <div className="Time">{dateformat(time)}</div>
          </div>
          </div>
      </div>
      <div className="PostBody">
        <div className="Body">
          <p className="description">{description}</p>
          <div className="mypost">
            {pimg != '' ? <img src={`${pimg}`} alt="post_12"></img>
            :
            paudio != '' ?
          <audio controls>
            <source src={`${paudio}`} type="audio/mpeg"></source>
          </audio>
          :
          pvideo != '' ?
          <video controls>
            <source src={`${pvideo}`} type="video/mp4"></source>
          </video>
          :
          ''
          }
          </div>
        </div>
        <div className="PostFooter">
          <div className="LikesComments">
            <Comments post_id={post_id} username={name} avatar={avatar} />
          </div>  
        </div>
      </div>
    </div>
  )
}

export default PostHeader