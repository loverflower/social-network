import React, { useState } from "react";
import s from "./Users.module.css";
import assepts from "./../../components/images/assepts.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

  let mass = [];
  for (let i = 1; i <= pagesCount; i++) {
    mass.push(i);
  }
  const totalPageIn = 20;
  let [portion, handlePortion] = useState(1);
  const portionStart = (portion - 1) * totalPageIn + 1;
  const portionEnd = portion * totalPageIn;
  const numberLatestportion = Math.ceil(props.totalUserCount / totalPageIn);

  const nextPortion = function () {
    handlePortion(portion + 1);
  };

  const prevPortion = function () {
    handlePortion(portion - 1);
  };
  return (
    <div>
      {portion === 1 ? "" : <button onClick={prevPortion}>Prev</button>}

      {mass
        .filter((u) => {
          return u >= portionStart && u <= portionEnd;
        })
        .map((u) => {
          return (
            <span
              onClick={() => {
                props.setCurrentPage(u);
              }}
              className={(props.currentPage === u && s.active, s.pages)}
            >
              {u}
            </span>
          );
        })}
      {portion === numberLatestportion ? (
        ""
      ) : (
        <button onClick={nextPortion}>Next</button>
      )}
      {props.users.map((el) => (
        <div className={s.box} key={el.id}>
          <div className={s.boxfriend}>{el.name}</div>
          <NavLink to={/profile/ + el.id}>
            <img
              src={el.photos.small !== null ? el.photos.small : assepts}
              alt=""
              className={s.photos}
            />
          </NavLink>
          <div className={s.post}> {el.post}</div>

          {el.followed ? (
            <button
              disabled={props.isTooglingFollowingMass.some(
                (id) => id === el.id
              )}
              onClick={() => {
                props.setUserUnFollowCreator(el.id);
                // props.isToogleFollowing(el.id, true);
                // axios
                //   .delete(
                //     `https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
                //     {
                //       withCredentials: true,
                //       headers: {
                //         "API-KEY": "5db89f3a-0182-4b71-878f-62d40e90c6ed",
                //       },
                //     }
                //   )
                //   .then((res) => {
                //     if (res.data.resultCode === 0) props.unfollow(el.id);
                //     props.isToogleFollowing(el.id, false);
                //   });
                // setTimeout(() => {
                //   props.unfollow(el.id);
                //   props.isToogleFollowing(el.id, false);
                // }, 5000);
                // console.log(props.isTooglingFollowingMass);
              }}
            >
              unfollow!
            </button>
          ) : (
            <button
              disabled={props.isTooglingFollowingMass.some(
                (id) => id === el.id
              )}
              onClick={() => {
                props.setUserFollowCreator(el.id);
                // props.isToogleFollowing(el.id, true);
                // axios
                //   .post(
                //     `https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
                //     {},
                //     {
                //       withCredentials: true,
                //       headers: {
                //         "API-KEY": "5db89f3a-0182-4b71-878f-62d40e90c6ed",
                //       },
                //     }
                //   )
                //   .then((res) => {
                //     if (res.data.resultCode === 0) props.follow(el.id);
                //     props.isToogleFollowing(el.id, false);
                //   });
                // setTimeout(() => {
                //   props.follow(el.id);
                //   props.isToogleFollowing(el.id, false);
                // }, 5000);
              }}
            >
              follow
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Users;
