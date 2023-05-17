import { useState } from 'react';

function ListGroup() {
    // return <h1>List Group</h1>;
    let items = [
        'New York',
        'Lagos',
        'Dublin',
        'Peru',
        'Ghana'
    ];
    // let selectedIndex = 0

    //Event handler
    const handleClick = (event: MouseEvent) => console.log(event)

    const [selectedIndex, setSelectedIndex] = useState(-1);
    

    return <>
        <h1>Listt</h1>
        {items.length === 0 && <p className="">No items found</p>}
        <ul className="list-group">
            {items.map((item, index) =>
            (<li
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            >
                {item}
            </li>
            ))}
        </ul>
    </>;

}

export default ListGroup;