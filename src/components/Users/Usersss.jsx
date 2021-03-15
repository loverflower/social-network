// import React from "react";
// import s from "./Users.module.css";

// const Users = (props) => {
//   if (props.state.users.length === 0) {
//     props.setUsers([
//       {
//         name: "Serega",
//         id: "11",
//         followed: true,
//         src:
//           "https://st.depositphotos.com/1004592/4965/i/600/depositphotos_49650493-stock-photo-little-owl.jpg",
//         post: "i am god",
//       },
//       {
//         name: "Weka",
//         id: "22",
//         followed: true,
//         src:
//           "https://st.depositphotos.com/1004592/4965/i/600/depositphotos_49650493-stock-photo-little-owl.jpg",
//         post: "i am god",
//       },
//       {
//         name: "Sebastian",
//         id: "33",
//         followed: true,
//         src:
//           "https://st.depositphotos.com/1004592/4965/i/600/depositphotos_49650493-stock-photo-little-owl.jpg",
//         post: "i am god",
//       },
//     ]);
//   }
//   return props.state.users.map((el) => (
//     <div className={s.box} key={el.id}>
//       <div className={s.boxfriend}>{el.name}</div>
//       <img src={el.src} alt="" className={s.img} />
//       <div className={s.post}> {el.post}</div>

//       {el.followed ? (
//         <button onClick={() => props.unfollow(el.id)}>unfollow</button>
//       ) : (
//         <button onClick={() => props.follow(el.id)}>follow</button>
//       )}
//     </div>
//   ));
// };

// export default Users;
