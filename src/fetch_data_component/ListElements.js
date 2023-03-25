import React from "react";

const render_users = (users) => {
  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user, i) => (
          <tr key={i}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const render_coment = (coments) => {
  return(<ul style={{height: "70vh",overflowY: "scroll"}}>
    {coments.map((coment, i) => (
      <li key={i}>
        <p>{coment.name}</p>
        <p>{coment.email}</p>
        <p>{coment.body}</p>
      </li>
    ))}
  </ul>)
};

const render_post = (posts) => {
  return(<ul style={{height: "70vh",overflowY: "scroll"}}>
    {posts.map((coment, i) => (
      <li key={i}>
        <p>{coment.title}</p>
        <p>{coment.body}</p>
      </li>
    ))}
  </ul>)
};

const which_render = {
  users: render_users,
  comments: render_coment,
  posts: render_post,
};

const ListElements = ({ items, reqType }) => {
  return which_render[reqType](items);
};

export default ListElements;
