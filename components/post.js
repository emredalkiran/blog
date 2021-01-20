import React from 'react'
import PropTypes from 'prop-types';
import Image from 'next/image'

const Post = React.forwardRef((content, ref) => 
   (
     <a ref={ref} href={content.href}>    
      <div className="card post">
       
          <Image
            src="/images/plan-small.jpg"
            alt="Planning picture"
            width={400}
            height={300}
            className="">
          </Image>
        <h3>{ content.content.title }</h3>
        <p className="card-description ">{ content.content.description }</p>
      </div>
    </a>

  ))
Post.displayName = 'Post'

Post.propTypes = {
  content: PropTypes.object.isRequired
}

export default Post
