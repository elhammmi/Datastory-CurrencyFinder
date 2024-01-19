import { ApolloProvider } from "@apollo/client";
import client from "@/apollo-client";
import ShowCurrency from "@/component/ShowCurrency";

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <div>
          <ShowCurrency />
        </div>
      </ApolloProvider>
    </>
  );
};
export default App;
