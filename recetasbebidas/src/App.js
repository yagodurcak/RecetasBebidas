import "./App.css"

import CategoryProvider from "./context/CategoryContext";
import Form from "./components/Form";
import Header from "./components/Header";
import ModalProvider from "./context/Modal";
import RecetasProvider from "./context/RecetasContext";
import Tragos from "./components/Tragos";

function App() {
  return (

    <CategoryProvider>
      <RecetasProvider>
        <ModalProvider>
        <Header />
        <Form/>
        <Tragos/>
        </ModalProvider>
      </RecetasProvider>
    </CategoryProvider>

  );
}

export default App;
