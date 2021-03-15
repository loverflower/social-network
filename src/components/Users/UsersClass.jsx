// import React from "react";
// import s from "./Users.module.css";
// import * as axios from "axios";
// import assepts from "./../../components/images/assepts.png";

// class UsersClass extends React.Component {
//   componentDidMount() {
//     axios
//       .get(
//         `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.state.pageSize}`
//       )
//       .then((answer) => {
//         console.log(answer);
//         this.props.getAmountOfUsers(answer.data.totalCount);
//         this.props.setUsers(answer.data.items);
//       });
//   }

//   setCurrentPage(u) {
//     this.props.definePage(u);
//     axios
//       .get(
//         `https://social-network.samuraijs.com/api/1.0/users?page=${u}&count=${this.props.state.pageSize}`
//       )
//       .then((answer) => {
//         return this.props.setUsers(answer.data.items);
//       });
//   }
//   render() {
//     const pagesCount = Math.ceil(
//       this.props.state.totalUserCount / this.props.state.pageSize
//     );

//     let mass = [];
//     for (let i = 1; i <= pagesCount; i++) {
//       mass.push(i);
//     }

//     return (
//       <div>
//         {mass.map((u) => {
//           return (
//             <span
//               onClick={() => {
//                 this.setCurrentPage(u);
//               }}
//               className={this.props.state.currentPage === u && s.active}
//             >
//               {u}
//             </span>
//           );
//         })}
//         {this.props.state.users.map((el) => (
//           <div className={s.box} key={el.id}>
//             <div className={s.boxfriend}>{el.name}</div>
//             <img
//               src={el.photos.small !== null ? el.photos.small : assepts}
//               alt=""
//               className={s.photos}
//             />
//             <div className={s.post}> {el.post}</div>

//             {el.followed ? (
//               <button onClick={() => this.props.unfollow(el.id)}>
//                 unfollow
//               </button>
//             ) : (
//               <button onClick={() => this.props.follow(el.id)}>follow</button>
//             )}
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default UsersClass;
