function ListGroup() {
    // return <h1>List Group</h1>;
    const items = [
        'New York',
        'Lagos',
        'Dublin',
        'Peru',
        'Ghana'
    ];



    return <>
        <h1>List</h1>
        <ul className="list-group">
            {items.map((item, index) => (<li key={index} className="list-group-item">{item}</li>))}
        </ul>
    </>;

}

export default ListGroup;