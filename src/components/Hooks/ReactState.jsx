import { useState } from "react";

export const ReactState = () => {
    const [count, setCount] = useState(0);

    const handleButtonClick = () => {
        setCount(() => count + 1); // Fix applied
    };

    return (
        <section>
            <h1>{count}</h1>
            <button onClick={handleButtonClick}>Increment</button>
        </section>
    );
};

