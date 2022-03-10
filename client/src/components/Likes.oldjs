import React from "react"

function Likes({ name, tag, img, heart }) {
  return (
    <div className="likes">
      <a href="placeholder">
        <img
          className="likesImg"
          src={
            img ??
            "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
          }
          alt=""
        />
      </a>
      <a href="placeholder " className="likesName">
        {name}
      </a>
      <span className="tag">{tag}</span>
      <div>
        <img
          className="likesIcon"
          src={
            heart
              ? "https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/plugins/rtreact/img/love.png"
              : "https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/plugins/rtreact/img/like.png"
          }
          alt=""
        />
      </div>
    </div>
  )
}

export default Likes
