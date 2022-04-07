import React from 'react'

const Contact = () => {
  return (
    <div id="subscribe">
      <h3>Subscribe</h3>

      <div className="subscribe-input">
        <input type="email" placeholder="example@gmail.com" />
        <a href="#" >Continue</a>
      </div>

      <div id="contact" className="footerDiv"> &copy; 2022
        <a href="https://github.com/Lumi4God" target="_blank" rel="noreferrer" className="footerDivAnchor"> LumiCode</a> {/* t get copyright symbol &#169; or &copy; */}

        <a href="https://www.linkedin.com/in/olumide-jones-ab2031215/"
          target="_blank" rel="noreferrer" className="footerDiv1">
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/Lumi4God"
          target="_blank" rel="noreferrer" className="footerDiv2">
          <i class="fab fa-github-square"></i>
        </a>
        <a
          href="https://www.instagram.com/tribe_of_jones/"
          target="_blank" rel="noreferrer" className="footerDiv3">
          <i class="fab fa-instagram-square"></i>
        </a>
        <a
          href="https://www.youtube.com/c/Lumigoodboi"
          target="_blank" rel="noreferrer" className="footerDiv4">
          <i class="fab fa-youtube-square"></i>
        </a>
        <a
          href="https://open.spotify.com/artist/3yqkjMHcqHPOqML0JH89mA"
          target="_blank" rel="noreferrer" className="footerDiv5">
          <i class="fab fa-spotify"></i>
        </a>
      </div>
    </div>
  )
}

export default Contact