import Maceta2 from "../images/maceta2.jpg";
import Maceta20 from "../images/maceta-pared-n20.png";


export const Macetas = () => {
    return <div className="container">

    <div className="column">
        <img src={Maceta2} className="Maceta2" alt="maceta2" width={"80%"} height={"40%"}/>
    </div>
    <div className="column">
        <img src={Maceta20} className="Maceta20" alt="maceta20" width={"80%"} height={"40%"}/>
    </div>
    <div className="column">
        <img src={Maceta20} className="Maceta20" alt="maceta20" width={"80%"} height={"40%"}/>
    </div>
</div>
};