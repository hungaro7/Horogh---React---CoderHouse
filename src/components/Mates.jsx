import Mate1 from "../images/set-matero1.png";
import Mate2 from "../images/set-matero2.jpg";
import Mate3 from "../images/set-matero3.jpg";

export const Mates = () => {
    return(
        <div className="container">
            
            <div className="column">
                <h2>Mates disponibles</h2>
            </div>

            <div className="column">
                <img src={Mate1} className="Mate1" alt="mate1" width={"80%"} height={"40%"}/>
            </div>
            <div className="column">
                <img src={Mate2} className="Mate2" alt="mate2" width={"80%"} height={"40%"}/>
            </div>
            <div className="column">
                <img src={Mate3} className="Mate3" alt="mate2" width={"80%"} height={"40%"}/>
            </div>
        </div>
    );
};