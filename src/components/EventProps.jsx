export const EventProps = ()=>{
    const HandleWelcomeUser = (user)=>{
        alert(`Hey! ${user}`);
    }
    const handleHover = ()=>{
        alert("Hey! Thanks for hovering me.");
    }
    return(<>
    <WelcomeUser onClick ={()=>HandleWelcomeUser('John')}
        onMouseEnter = {handleHover}/>
    </>
    )
}

const WelcomeUser =(props)=>{
    const {onClick, onMouseEnter} = props;
    return <>
        <button onClick={onClick}>Click ME!</button>
        <button onMouseEnter={onMouseEnter}>Hover ME!</button>
    </>

}