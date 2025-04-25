//Passing JSX as props in React
function Profile() {
    return (
        <div>
            <h1>Profile Card Challenege</h1>
            {/*The greetings prop is not a string, but a JSX element.
             It is passed as a prop and rendered inside <p>{props.greetings}</p>, which means React 
             will display the JSX content inside <p>. */}
            <ProfileCard name="Alice" age={30} greetings={
                <div>
                    <strong>Hi Alice, Have a wonderful day!</strong>
                </div>
            }>
                <p>Hobbies: Reading and Dancing</p>
                <button>Contact</button>
            </ProfileCard>
            <ProfileCard name="John" age={25} greetings={
                <div>
                    <strong>Hi John, Have a wonderful day!</strong>
                </div>
            }>
                <p>Hobbies: Singing and Dancing</p>
                <button>Contact</button>
            </ProfileCard>
        </div>
    )
}
export default Profile;

function ProfileCard(props) {
    return <>
        <h2>Name: {props.name}</h2>
        <p>Age : {props.age}</p>
        <p>{props.greetings}</p>
        {/*The <p> and <button> inside <ProfileCard> are considered children of ProfileCard.
          React automatically assigns these to props.children.
          Inside ProfileCard, {props.children} will render these elements. */}
        <div>{props.children}</div>
    </>
}