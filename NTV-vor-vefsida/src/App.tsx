import "./App.css";
import Layout from "./shared/components/Layout/layout.tsx";
import MyCard from "./features/sandbox/components/myCard.tsx";
import MyForm from "./features/userForm/components/myForm.tsx";
import MyGOATForm from "./features/randoGOATForm/myGOATForm.tsx";

function App() {
  return (
    <>
      <Layout>
        <h2>Hello World!</h2>
        <MyGOATForm />
        <MyForm />
        <MyCard />
      </Layout>
    </>
  );
}

export default App;
