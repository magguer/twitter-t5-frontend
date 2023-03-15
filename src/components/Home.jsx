import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function Home() {
  const [tweets, setTweets] = useState([]);
  const user = useSelector((state) => state.user);
  // console.log(user);

  useEffect(() => {
    const getHome = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${user.userToken}`,
        },
        method: "get",

        url: "http://localhost:8000/",
      });
      setTweets(response.data.allTweets);
    };
    getHome();
  }, []);

  return (
    <div>
      <h2>HOME</h2>
      {tweets.map((tweet) => (
        <h2 key={tweet.id}>{tweet.text}</h2>
      ))}
    </div>
  );

  //<div class="ms-3 row">
  //   <!--     NavBar -->
  //   <div
  //     style="position: relative"
  //     class="col-2 border-top border-end border-bottom p-0"
  //   >
  //     <%- include("../partials/navbar") %>
  //   </div>
  //   <!-- Home Page -->
  //   <div class="col-9 col-xl-7 p-0">
  //     <!-- Hero Tweet -->
  //     <div class="p-3">
  //       <h5 class="my-4">Home</h5>
  //       <!--           TextArea Tweet -->
  //       <form action="/usuarios/?_method=put" method="post">
  //         <div class="d-flex">
  //           <div class="me-3">
  //             <% if (user.image.includes("http")) { %>
  //             <img
  //               style="
  //                 width: 4rem;

  //                 object-fit: cover;
  //                 border-radius: 100%;
  //               "
  //               class="figure-img img-fluid align-self-center"
  //               alt="image"
  //               src="<%= user.image %>"
  //             />
  //             <!--   coment -->
  //             <% } else {%>
  //             <img
  //               style="
  //                 width: 4rem;

  //                 object-fit: cover;
  //                 border-radius: 100%;
  //               "
  //               class="figure-img img-fluid align-self-center"
  //               alt="image"
  //               src="/img/<%= user.image %>"
  //             />
  //             <%}%>
  //           </div>
  //           <!--           TextArea Tweet -->
  //           <div class="w-100">
  //             <textarea
  //               class="form-control"
  //               placeholder="What's happening?"
  //               name="newTweet"
  //               id="newTweet"
  //               style="height: 100px"
  //             ></textarea>
  //           </div>
  //         </div>
  //         <!--           Button Tweet -->
  //         <div class="d-flex justify-content-end my-3">
  //           <button
  //             class="btn text-light"
  //             type="submit"
  //             style="border-radius: 45px; background-color: #1d9bf0"
  //           >
  //             Tweet
  //           </button>
  //         </div>
  //       </form>
  //     </div>
  //     <% for (const tweet of allTweets) { %>
  //     <!--           comment -->
  //     <%- include("../partials/tweet", { tweet }) %>
  //     <!--           comment -->
  //     <%}%>
  //   </div>
  //   <!-- MoreInfo -->
  //   <div class="d-none d-xl-block col-xl-3 border p-0">
  //     <%- include("../partials/moreinfo", { usersInfo , globalUser }) %>
  //   </div>
  // </div>
}

export default Home;
