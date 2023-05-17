import { useState } from 'react';

interface ListGroupProps {
    heading: string;
    items: string[];
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: ListGroupProps) {
    // return <h1>List Group</h1>;

    // let selectedIndex = 0

   

    const [selectedIndex, setSelectedIndex] = useState(-1);
    

    return <>
        <h1>{heading}</h1>
        {items.length === 0 && <p className="">No items found</p>}
        <ul className="list-group">
            {items.map((item, index) =>
            (<li
                key={index}
                onClick={() => {
                    setSelectedIndex(index);
                    onSelectItem(item);
                }}
                className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            >
                {item}
            </li>
            ))}
        </ul>
    </>;

}

export default ListGroup;