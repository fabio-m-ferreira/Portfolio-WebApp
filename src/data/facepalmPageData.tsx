import React from "react";
import IMG1 from "@static/assets/facepalm-login.jpg";
import IMG2 from "@static/assets/facepalm-sign-up.jpg";
import IMG3 from "@static/assets/facepalm-feed.jpg";
import IMG4 from "@static/assets/facepalm-post-detail.jpg";
import IMG5 from "@static/assets/facepalm-new-post.jpg";
import IMG6 from "@static/assets/facepalm-users.jpg";
import IMG7 from "@static/assets/facepalm-user-profile.jpg";
import IMG8 from "@static/assets/facepalm-profile.jpg";
import IMG9 from "@static/assets/facepalm-chat.jpg";
import IMG10 from "@static/assets/facepalm-chat-messages.jpg";

const facepalmPageData = [
  {
    id: 1,
    image: IMG1,
    title: "Login Section",
    description: (
      <h3 className="text-light">
        Here you can Login with Email and Password <br /> Login based on
        Firebase Authentication.{" "}
      </h3>
    ),
  },
  {
    id: 2,
    image: IMG2,
    title: "Sign-Up Section",
    description: (
      <h3 className="text-light">
        Here you can create a new account. A Username, Email, and Password are
        required. Background and Profile Image are optional. In case
        there&apos;s no image chosen, a default image takes place.
      </h3>
    ),
  },
  {
    id: 3,
    image: IMG3,
    title: "Main Tab - App Feed",
    description: (
      <h3 className="text-light">
        Here in the App Feed, you can see the most recent Posts.
      </h3>
    ),
  },
  {
    id: 4,
    image: IMG4,
    title: "Post Details | Post Comments",
    description: (
      <h3 className="text-light">
        Here you can see the Post in more detail and other users&apos; comments.
        You can also add your own comment.
      </h3>
    ),
  },
  {
    id: 5,
    image: IMG5,
    title: "New Post Tab",
    description: (
      <h3 className="text-light">
        Here you can create a new post with an image and a description. Both are
        optional, but at least one field is required.
      </h3>
    ),
  },
  {
    id: 6,
    image: IMG6,
    title: "Users Tab",
    description: (
      <h3 className="text-light">
        Here you can see all the users. You can also Add/Remove a Friend and
        Accept/Decline a Friend Request.
      </h3>
    ),
  },
  {
    id: 7,
    image: IMG7,
    title: "User Profile",
    description: (
      <h3 className="text-light">
        Here you can see a User Profile in more detail, which includes personal
        info, posts and friends. You can also Add/Remove a Friend and
        Accept/Decline a Friend Request.
      </h3>
    ),
  },
  {
    id: 8,
    image: IMG8,
    title: "Profile Tab",
    description: (
      <h3 className="text-light">
        Here you can see your own Profile, which includes personal info, posts
        and friends. You also can change your Background and Profile Images.
      </h3>
    ),
  },
  {
    id: 9,
    image: IMG9,
    title: "Chat Tab",
    description: (
      <h3 className="text-light">
        Here you can see your available Chats. You can only chat with friends
      </h3>
    ),
  },
  {
    id: 10,
    image: IMG10,
    title: "Chat Messages",
    description: (
      <h3 className="text-light">
        Here you can have Real-Time conversations with your friends.
      </h3>
    ),
  },
];

export default facepalmPageData;
