import './App.css';
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";
import AlertComponent from "./components/AlertComponent";

function App() {
    return (
        <>
            <ClassComponent title={"Exercise 1:"}/>
            <FunctionComponent title={"Exercise 2:"}/>
            <AlertComponent title={"Exercise 3:"} text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại."/>
        </>
    )
}

export default App;
