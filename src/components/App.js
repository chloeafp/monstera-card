import PlantItem from "./PlantItem";
import monstera from '../assets/monstera.jpg'
import styled from 'styled-components';


const plant = {

		name: 'Monstera',
		isLiked: false,
		light: 2,
		water: 3,
		cover: monstera,

}



function App() {

const Card = styled.div `

border: solid 2px black;
border-radius: 10px;
height: 317px;
width: 200px;
margin: 20px auto;
display: flex;
align-items: center;

`


  return (
    <Card>
      <PlantItem plant={plant}/>
    </Card>
  )

}

export default App;
