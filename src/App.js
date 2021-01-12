import logo from './logo.svg';
import './App.scss';
import {ModalContextProvider} from "./ModalContext";
import ModalOpeningComponent from "./ModalOpeningComponent";
import Modals from "./Modal/Modals";

function App() {
    return (
        <ModalContextProvider>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <ModalOpeningComponent/>
                </header>
                <Modals/>
            </div>
        </ModalContextProvider>
    );
}

export default App;
