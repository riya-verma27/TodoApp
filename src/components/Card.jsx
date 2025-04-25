//named export
// Named export
import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

export const Card = () => {

  return (
    <ul className= "grid grid-three-cols">
      {seriesData.map((item) => (
        <SeriesCard key={item.id} {...item} />  // Add `return` or use `()` for implicit return
      ))}
    </ul>
  );
};



// we can export multiple components from a file , but we can have only one default export, rest all will 
//be named exports only
//example:
// const header=()=>{
//   return <p>This is the header</p>
// };
// export default header;
// In case of named export, we can't change the component name while importing 
// In case of default export, we can change the component name