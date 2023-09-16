import React from "react";

function BlogTopDestination() {
  return (
    <div className="blogFullContainer">
      <div className="container">
        <div className="blog-image-container">
          <img
            src={process.env.PUBLIC_URL + "/images/blog/top6place.jpg"}
            alt="Manali"
          />
        </div>

        <div className="blog-content-body">
          <h1 className="blog-header">
            Top 6 holiday destinations in India to tour
          </h1>

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
              <h3 className="blog-list-header">
                {" "}
                1) Darjeeling, West Bengal :-
              </h3>
              <p className="blog-para">
                Darjeeling is one of the most beautiful places of West Bengal.
                Which is also known as Queens of the Himalaya, where the British
                used to go to spend their vacations. Its gigantic Himalaya
                mountains, greenery, beautiful places and mixed culture makes
                this city unusual and desirable for people. Here, one can
                discover Bengali, Nepalese and Tibetan mixed dishes, which are
                mouth watery at their positions. Except foods, the prominent
                places in Darjeeling are Peace Pagoda, Darjeeling Rangeet
                Ropeway, Mahakal Temple, Tiger hills, Kanchenjunga, Darjeeling
                Himalaya Railway Trip, Buddhist Monastery, 80 tea plantation so
                on and so forth. If someone visits any of these places, it will
                be worthwhile for sure.
              </p>
            </li>
            <li>
              <h3 className="blog-list-header">
                {" "}
                2) Kalimpong, West Bengal :-
              </h3>
              <p className="blog-para">
                Kalimpong is another hill station that is approx 51 kilometres
                away from Darjeeling and it will take almost 2 hours to visit.
                Kalimpong is popularly known for its valley views, monasteries,
                temples and altitude which is 4100ft, more than Darjeeling and
                Gangtok. Besides that, places which can be seen here are Pine
                View Nursery, Delo View Park, Durpin Monastery, St. Theresa
                Catholic Church, Bankim Chandra Park, Katherine Graham Memorial
                Chapel, Mangal Dham Temple and many more.
              </p>
            </li>

            <li>
              <h3 className="blog-list-header"> 3) Gangtok, Sikkim :-</h3>
              <p className="blog-para">
                Gangtok is widely famous not because it is the capital of Sikkim
                but because of its pilgrimage centre, monasteries, geographical
                area and culture. Sikkim comes in the North-eastern part of
                India and Sikkim’s neighbourhoods are equally lovely with
                extremely breathtaking views. Though the places to visit in
                Gangtok are Tashi View Point, Enchey Monastery, Gonjang
                Monastery, Hanuman Temple, M.G Marg, Gangtok Ropeway, Ban Jhakri
                Falls Park and also Lal Bazar Road to have some good food and
                native clothes.
              </p>
            </li>
            <li>
              <h3 className="blog-list-header"> 4) Yercaud, Tamil Nadu :-</h3>
              <p className="blog-para">
                Are you a hill station lover? If yes, it can be the perfect
                holiday destination for you and your family. Yercaud was
                developed by the erstwhile governor Sir Thomas Munroe in 1842.
                And it is located in South India, where places especially lakes
                are highly known for their natural elegance. If someone seeks
                perennial relaxation and peace, you must visit these sites.
                Sites such as Emerald Lake, Pagoda Point, Anna Park, Killiyur
                Falls, Bear’s Cave, Shevaroy Hills, Tipperary Viewpoint etc.
              </p>
            </li>
            <li>
              <h3 className="blog-list-header">
                {" "}
                5) Mukteshwar, Uttarakhand :-
              </h3>
              <p className="blog-para">
                Today, people are more into adventures activities like camping
                and tripping on big mountains with a bunch of friends. Here,
                Mukteshwar right fits in with 7500ft altitude. The most
                important languages here are Hindi, English, Sanskrit and
                Kumaoni dialects. Mukteshwar citizens still celebrate most of
                the events with F3 folk dance, folk songs and feasts. Along with
                all of these the prominent places one can see are Mukteshwar
                Mahadev Temple, Mukteshwar Kumaon Hills, Bhalugaad and Chauli ki
                Jali.
              </p>
            </li>

            <li>
              <h3 className="blog-list-header">
                {" "}
                5) Panchgani, Maharashtra :-
              </h3>
              <p className="blog-para">
                Panchgani is another mount beauty located in Maharashtra that is
                highly known for the Table Land. Panchgani is hidden with five
                hills therefore its name is after these hills, where Panch means
                “paach” and gani means “hills”. Most supreme foods of Panchgani
                are vada pav, misal pav, Gujarat thali, Strawberries and so
                more. Besides food, the places to visit are Table Land, Parsi
                Point, Sydney Point, Dhom Dam, Kates point, Hollywood Wax Museum
                etc. And if one visits Panchgani so he or she can get an
                opportunity to visit Mahabaleshwar once as it’s just 39 minutes
                away from each other.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BlogTopDestination;
