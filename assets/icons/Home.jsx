import { Home01Icon } from "hugeicons-react-native";
    
const Home = (props) => {
  return (
    <Home01Icon 
      size={24} 
      height={props.height}
      width={props.width}
      color={props.color}
      strokeWidth={props.strokeWidth}
      variant={"stroke"}
    />
  )
}
  
export default Home;
  