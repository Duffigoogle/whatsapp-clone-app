import React, { useState, useEffect } from "react";
import Search from "../../public/assets/search";
import { Dropdown } from "semantic-ui-react";
import { useRouter } from "next/router";
import Link from "next/link";

const SearchBar = ({ signOut, user }) => {
  const router = useRouter();
  const [drop, setDrop] = useState(false);
  const dropdownOptions = () => [
    {
      key: "signout",
      text: (
        <div className="dropdown">
          <span onClick={signOut}>Sign Out</span>
        </div>
      ),
    },
  ];

  useEffect(() => {
    console.log(user.photoURL);
  }, [])
  return (
    <div className="search-bar-holder">
      <div className="user-details">
        <div className="contact-avatar" onClick={() => setDrop(!drop)}>
          <div className={`status-ring no-status`}>
            <img
              src={
                user.photoURL != null
                  ? user.photoURL
                  : require("../../public/assets/new_profile.png")
              }
              alt="avatar"
            />
          </div>

          <p className="online-status">&bull;</p>
        </div>
        <p>{user.displayName}</p>
      </div>

      <Link href="/search">
        <div className="search">
          <img src={require("../../public/assets/icons/add-chat.svg")} />
          {/* <input type="text" placeholder="Search or start a new chat" /> */}
        </div>
      </Link>

      {drop ? (
        <div className="dropdown">
          <Link href="/profile">
            <div>Profile</div>
          </Link>
          <div onClick={signOut}>Sign Out</div>
        </div>
      ) : null}

      {/* <Dropdown
        trigger={
          <div>
            <img src={require("../../public/assets/icons/dot_menu.svg")} />
          </div>
        }
        // options={dropdownOptions()}
      /> */}
    </div>
  );
};
export default SearchBar;
