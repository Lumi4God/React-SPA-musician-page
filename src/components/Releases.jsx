import React from "react";
import featuresImage from "../images/social.jpeg";
/* import Video from "../images/minivid-295782-A1uv.mov"; */


const data = [
  { Title: "You Are Jehovah", Date: 2021, Availability: "In all Digital platforms" },
  { Title: "All belongs to You", Date: 2021, Availability: "In all Digital platforms" },
  { Title: "Alagbara Ni O (You Are the most Powerful)", Date: 2022, Availability: "releasing soon"},
  { Title: "Song of Victory", Date: 2022, Availability: "releasing soon" },
  { Title: "No pressure", Date: 2022, Availability: "releasing soon" },
  { Title: "Be with me", Date: 2022, Availability: "releasing soon"},
  { Title: "No one like You", Date: 2022, Availability: "releasing soon" },
  { Title: "Worship Medley", Date: 2022, Availability: "releasing soon" },
  { Title: "Oba tia(Our King)", Date: 2022, Availability: "releasing soon"},
]
/* Link: "https://open.spotify.com/track/0A7Decf5xPOKl1UFipQHig"
Link: "https://open.spotify.com/track/6CqRNfxJAGBAyOFKPYU4c2" */


const Releases = () => {
  return (
    <div id="releases">
      <div className="line"></div>
      <div className="r-heading">
        <h1>Our body of work</h1>
        <p>This are the list of our old but golden and recent releases</p>
      </div>

      <div id="features">
        <div className="features-text">
          {/* <h2>Releases</h2>
          <h3>
            2021 <span>till</span> date
          </h3> */}

          <table>
            <tr>
              <th>Title</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.Title}</td>
                  <td>{val.Date}</td>
                  <td>{val.Availability}</td>
                  <td>{val.Link}</td>
                </tr>
              );
            })}
          </table>
        </div>

        <div className="features-model">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            tempora. Ad tenetur saepe reiciendis dolores vel dignissimos.
            Deserunt esse expedita accusantium dicta, itaque autem vitae ratione
            ipsa repellendus repudiandae suscipit, harum aut excepturi officia
            architecto!
          </p>
          {/* <button>More</button> */}
          {/* <img src={featuresImage} alt="feature" />
          <video src={Video} autoPlay="true" />

          <video loop autoPlay>
          <source
            src="file:///home/user/Documents/REACT:/tribe-of-jones/src/images/minivid-295782-A1uv.mov"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video> */}
        </div>
      </div>
    </div>
  );
};

export default Releases;
