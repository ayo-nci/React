function Message() {
    const name = 'Mosh';
    if (name) return <h1 className="">Hello {name}</h1>
    return <h1 className="">Hello world</h1>
}

export default Message;