import React from "react";
export const LeaderBoard = ({ users }) => (<table>
  <tbody>
    <tr>
      <th>Username</th>
      <th>Score</th>
    </tr>
    {users.map((user, index) => (<tr key={index}>
      <td>{user.name}</td>
      <td>{user.score}</td>
    </tr>))}
  </tbody>
</table>);
