import "./App.css";
import Layout from "./shared/components/Layout/layout.tsx";
import MyCard from "./features/sandbox/components/myCard.tsx";
import MyForm from "./features/userForm/components/myForm.tsx";
import MyGOATForm from "./features/randomGOATForm/myGOATForm.tsx";

function App() {
  return (
    <>
      <Layout>
        <h2>Hello World!</h2>
        <MyForm />
        <MyCard />
        <MyGOATForm />
      </Layout>
    </>
  );
}

export default App;
