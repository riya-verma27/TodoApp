import "./EV.css";
export const EventHandling=()=>{
    function handleButtonClick(event){
        console.log(event);
        alert('Hey! I am click event');
    }
    function handleDisplay(user){
        console.log(`hey ${user}, Welcome!`);
    }
    return <>
    {/*Function components with named functions */}
    <button onClick={handleButtonClick}>Click ME!</button>
    <button onClick={()=>handleButtonClick()}>Click ME!</button>
    {/*Passing Arguments to Event handlers */}
    <button onClick={()=>handleDisplay("hello")}>Click ME!</button>
    </>
}