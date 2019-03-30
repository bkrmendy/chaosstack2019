import React, { useState } from "react";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo-hooks";
import { useQuery } from 'react-apollo-hooks'

// import { users, test } from "./dummy";
// import { Test } from "./Test";
// import { LeaderBoard } from "./LeaderBoard";

const client = new ApolloClient({
  uri: "https://eu1.prisma.sh/bertalan-kormendy-81b12c/backend/dev"
});



// const ASD = () => {
//   const { data, error } = useQuery()
//   return (
//     <ApolloProvider client={client}>
//       {
//         error && <strong>Error</strong>
//       }
//       {
//         data && <p>{JSON.stringify(data)}</p>
//       }
//     </ApolloProvider>
//   );
// }

const App = () => {
  // const [submitted, setSubmitted] = useState(false);
  // const onSubmit = (answers, userName) => {
  //   alert(userName + "'s answers are: " + answers.join(" "));
  //   setSubmitted(true);
  // };
  return (
    <ApolloProvider client={client}>
      <ASD />
    </ApolloProvider>
  )
};

export default App;
