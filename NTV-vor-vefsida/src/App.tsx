import "./App.css";
import Layout from "./components/Layout/layout";
import MyCard from "./components/myCard.tsx";
import MyForm from "./components/myForm.tsx";

function App() {
  return (
    <>
      <Layout>
        <h2>Hello World!</h2>
        <MyCard />
        <MyCard />
        <MyForm />
      </Layout>
    </>
  );
}

export default App;
