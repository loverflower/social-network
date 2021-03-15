import React from "react";
const ProfileInfo = (props) => {
  console.log(props);
  return (
    <div>
      <div>
        <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" />
      </div>

      {props.state ? (
        <div>
          <span>{props.state.fullName}</span>
          <img src={props.state.photos.large} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProfileInfo;
