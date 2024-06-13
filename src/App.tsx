import './App.css';
import cat1 from "./images/cat1.png";
import cat2 from "./images/cat2.png";
import cat3 from "./images/cat3.png";
import cat4 from "./images/cat4.png";
import cat5 from "./images/cat5.png";
import cat6 from "./images/cat6.png";
import cat7 from "./images/cat7.png";
import cat8 from "./images/cat8.png";
import cat9 from "./images/cat9.png";
import cat10 from "./images/cat10.png";
import cat11 from "./images/cat11.png";
import cat12 from "./images/cat12.png";
import myava from "./images/myava.png";
import {useState} from "react";
import YouTubeIcon from '@mui/icons-material/YouTube';
import {IconButton} from "@mui/material";
import Button from '@mui/material/Button';


const cats = [cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, cat10, cat11, cat12]
console.log(typeof cats[0])

function App() {
    const [currentCat, setCurrentCat] = useState(myava);

    const handleClick = () => {
        let indexCat = Math.floor(Math.random() * cats.length)
        setCurrentCat(cats[indexCat])
    }

    return (
        <div className='container'>

            <img src={currentCat} alt=""/>
            <h1><em>Нажми на кнопку и получи своего боевого котика</em></h1>
            <Button onClick={handleClick} variant="contained" color="success">
                Создать
            </Button>
            <h2>А так же не забудь посетить мой youtube канал)))</h2>
            <a href="https://www.youtube.com/@MaksTaurter" target="_blank" rel="noopener noreferrer">
                <IconButton>
                    <YouTubeIcon fontSize={"large"}/>
                </IconButton>
            </a>

        </div>
    );
}

export default App;