import './style.css';
import { Facebook, GitHub, Instagram, YouTube } from "@mui/icons-material";

const Footer = () => {

    return(
        <div className="footer">
            <div className="icons">
            <a href="https://www.facebook.com/pioneerdjlatinoamerica/"><Facebook /></a>
                <a href="https://www.instagram.com/nexus.bro/?hl=es/"><Instagram /></a>
                <a href="https://www.youtube.com/c/pioneerdjglobal"><YouTube /></a>
                <a href="https://github.com/IonFiz/Proyecto-React-V2"><GitHub /></a>
            </div>

            <div className="textContent">
                
                <h4>Rental For Profesionals</h4>
               
                
            </div>

            <p> &copy; 2022 - Adolfo Daniel</p>

            
        </div>
    )
}

export default Footer


