import React from "react";

function BlogTopSightseeingDehradun() {
  return (
    <div className="blogFullContainer">
      <div className="container">
        <div className="blog-image-container">
          <img
            src={process.env.PUBLIC_URL + "/images/blog/dehradun.jpg"}
            alt="Manali"
          />
        </div>

        <div className="blog-content-body">
          <h1 className="blog-header">Top 6 sightseeing places in Dehradun</h1>

          <p className="blog-description">
            In this world, everything and everyone has marvellous beauty inside
            them. But, does anyone ever think what can be the beauty of a
            country? If yes then what it is? Well, it can be so many things but
            predominantly it’s the biological places, which can amazed us with
            their elegance. And these places are often used as holiday
            destinations, trips and pilgrimage for most of them.
          </p>

          <ul>
            <li>
              <h3 className="blog-list-header"> 1) Robber Cave :-</h3>
               <img src={process.env.PUBLIC_URL + "/images/blog/Robber-Cave.jpg"} alt="Robber Cave" />
              <p className="blog-para">
                This place is usually known for couples, but anyone who is into
                the beauty of caves can visit here. It is 14km away from IBST
                Dehradun, which takes almost 45m to visit there, with no entry
                fees.
              </p>
            </li>
            <li>
              <h3 className="blog-list-header">
                {" "}
                2) Dehradun-Mussoorie Ropeway :-
              </h3>
              <img src={process.env.PUBLIC_URL + "/images/blog/Dehradun-Mussoorie-Ropeway.png"} alt="Dehradun-Mussoorie Ropeway " />
              <p className="blog-para">
                According to TOI, this place will be one of the best tourist
                places. Because Dehradhun-Mossorrie project is being constructed
                from several years and it will finished in some. By which,
                anyone can travel from Dehradun to directly Massorrie. Which
                will hardly take 12-15 minutes to transport 1000-1200 people to
                the destiny in a single time. And this claimed to be more
                convenient than roadways, which contains hours to visit.
              </p>
            </li>

            <li>
              <h3 className="blog-list-header"> 3) Shiv Mandir :-</h3>
              <img src={process.env.PUBLIC_URL + "/images/blog/Shiv-Mandir.png"} alt="Shiv Mandir" />
              <p className="blog-para">
                This red mandir is also called Prakasheshwar Mahadev Mandir, and
                while going to Massorrie, this temple falls on the way. Most
                serious thing about this temple is ‘ No Donations’ yes people
                are not allowed to donate when they come for the Visit. In
                Dehradun, there are plenty of temples, such as, Sura devi, Manak
                sidh, Mandu shidh, Sai mandir so on and so forth, but out of
                all, Shiv Mandir is the most prominent one. It will take
                approximately one hour to visit from IBST Dehradun.
              </p>
            </li>
            <li>
              <h3 className="blog-list-header"> 4) Dehradun zoo :-</h3>
              <img src={process.env.PUBLIC_URL + "/images/blog/Dehradun-zoo.png"} alt="Dehradun zoo" />
              <p className="blog-para">
                Dehradun zoo aka Malsi deer park is located at the Mussoorie
                road, 14km away from the IBST Dehradun. This zoo is widely
                notable for the variety of birds, deers, snakes and leopards.
                Besides this, there is an aquarium and the funark, this whole
                zoo is internally designed like some adventures place. One can
                enjoy the whole scenery by having 20 rupees ticket per person
                for adults and 10 rupees per kid.
              </p>
            </li>
            <li>
              <h3 className="blog-list-header"> 5) Lachhiwala :-</h3>
              <img src={process.env.PUBLIC_URL + "/images/blog/Lachhiwala.png"} alt="Lachhiwala" />
              <p className="blog-para">
                Lachhiwala aka Nature park, is a well-known picnleopardsin Harid
                war-Rishikesh, 22kms awayy from Dehradun. This place equally
                provides serenity and joy to every visitor. Except this, there
                are some manmade water pools, in which every visitor gets soaked
                to feel the relaxation.
              </p>
            </li>

            <li>
              <h3 className="blog-list-header"> 5) Sahastradhara :-</h3>
              <img src={process.env.PUBLIC_URL + "/images/blog/Sahastradhara.png"} alt="Sahastradhara" />
              <p className="blog-para">
                Sahastradhara is a place with the beauty of nature, people visit
                there to see the charm of those small waterfalls, mountains and
                caves. It is 14km away from the Dehradun station. At first, it
                wass just a place, where small waterfalls used to be glimpsed by
                people. But, now there are hotels, food courts and also special
                ropeways have made to watch the essence of mountains. And for
                ropeways, they charge per person 150rupees Well, now you must be
                wondering of visiting there, so, fortunately, this place is very
                flexible, when it comes to travelling. And there are numerous
                modes to reach there, such as aeroplanes, buses and the cheapest
                one is the train.
              </p>
            </li>
          </ul>
        </div>

        <div className="place-route">
            <div className="blog-section">
                <h2 className="blogContentHeader"> Fastest mode:- Aeroplane </h2>
                <p className="blog-para">From Mumbai to Dehradun</p>
                <p className="blog-para">Time:- 1h55m</p>
                <p className="blog-para">Fare:- Approx 11000 rupees</p>
            </div>

            <div className="blog-section">
                <p className="blog-para">From Mumbai to New Delhi(flight), New Delhi to Dehradun (by bus)</p>
                <p className="blog-para">Time:- 14 hours</p>
                <p className="blog-para">FFare:- Approx 5500rupees</p>
            </div>

            <div className="blog-section">
                <h2 className="blogContentHeader"> Cheapest mode:- Train </h2>
                <p className="blog-para">From Mumbai to New Delhi, New Delhi to Dehradun</p>
                <p className="blog-para">Time:- 27h40 minutes</p>
                <p className="blog-para">Fare:- 2100 rupees</p>
            </div>

            <div className="blog-section">
                <p className="blog-para">From Mumbai to New Delhi (by train) New Delhi to Dehradun( by bus)</p>
                <p className="blog-para">Time:- 25h15m</p>
                <p className="blog-para">FFare:- 2400</p>
            </div>
        </div>  
      </div>
    </div>
  );
}

export default BlogTopSightseeingDehradun;
