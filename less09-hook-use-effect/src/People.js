import React, {useEffect, useState} from 'react';


function People(){

    const [people, setPeople] = useState([
        {id:1, name:"John", age:20},
        {id:2, name:"Steve", age:30},
        {id:3, name:"Sally", age:30}
    ]);

    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNextPerson = () => {
        setCurrentIndex((prevIndex) => {
            return (prevIndex + 1) % people.length;
        });
    };

    const handlePrevPerson = () => {
        setCurrentIndex((prevIndex) => {
            return (prevIndex - 1 + people.length) % people.length;
        });
    };

    useEffect(() => {
        const timer = setInterval(handleNextPerson, 3000);
        console.log("Something Happened!");
        return () => {
            clearInterval(timer);
        };
    }, [people, handleNextPerson]);

        
    return (
        <div>
            <div>
                <h2>
                    {people[currentIndex].name} is {people[currentIndex].age} years old
                </h2>
            </div>

            <button onClick={handlePrevPerson}>prev</button>
            <button onClick={handleNextPerson}>next</button>
        </div>
    );

}
export default People;