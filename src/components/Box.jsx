import React from 'react'

const Box = (props) => {
  return (
    <div className="s-box">
        <div className="s-b-img">
            <img src={props.image} alt={props.alte} />
        </div>

        <div className="s-b-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi totam quas rem. Atque, quibusdam quae. Eveniet ratione, illo exercitationem velit obcaecati est blanditiis consequatur soluta vel distinctio repellendus dolorum. Rerum et architecto doloremque!</p>
            <a href="#" className="cv-btn">{props.button}</a>
        </div>
    </div>
  )
}

export default Box