import { useLocation } from 'react-router-dom';
import { Accesorios } from "./Accesorios";
import { Macetas } from './Macetas';
import { Mates } from './Mates';


export const ItemList = () => {
    const location = useLocation();
    
    // Verifico si estoy parado en la ruta /accesorios
    const estoyEnAccesorios = location.pathname === '/category/accesorios';
    const estoyEnMacetas = location.pathname === '/category/macetas';
    const estoyEnMates = location.pathname === '/category/mates';
    


    if(estoyEnAccesorios){
        return(
            <div>
            <Accesorios />
            </div>
        );} 
    else 
    {
            
        if(estoyEnMacetas)
        {
            return(
            <div> 
                <Macetas/>
            </div>
        )}

            if(estoyEnMates)
                {
                return(
                    <div> 
                        <Mates/>
                    </div>
                )}
                else{
                    return(
                            <div>
                                <h1>No hay Nada</h1>
                            </div>
                    );}      
            }
}
