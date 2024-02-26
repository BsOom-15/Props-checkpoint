// import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards/Cards';
import Logo from './imge/the-best-players-2016-football-lionel-messi-soccer-wallpaper-thumb.jpg'
import LogoTwo from './imge/OIP.jpg'
import LogoThree from './imge/wp6014763.webp'
import LofoFour from './imge/thumb2-4k-dani-alves-abstract-art-brazil-national-team-fan-art.jpg'

function App() {
  return (
    <div>
      <h3 className='text-center text-danger my-5'>Players Cards</h3>
      <div className='Card'>
      <Cards
        name = "Lionel Messi"
        imageUrl = {Logo}
        team = "Inter Miami CF"
        nationality = "Argentina"
        jerseyNumber = "10"
        age = '36 Years'
      />
      <Cards
        name = "Cristiano Ronaldo"
        imageUrl = {LogoTwo}
        team = " Al Nassr"
        nationality = "Portuguese"
        jerseyNumber = "7"
        age = '38 Years'
      />
      <Cards
        name = "Kylian Mbappe"
        imageUrl = {LogoThree}
        team = " Paris Saint-Germain"
        nationality = "French"
        jerseyNumber = "7"
        age = '25 Years'
      />
      <Cards
        name = "Dani Alves"
        imageUrl = {LofoFour}
        team = "Pumas UNAM"
        nationality = "Brazilian"
        jerseyNumber = "33"
        age = '40 Years'
      />
      </div>
      
    </div>
  );
}

export default App;
