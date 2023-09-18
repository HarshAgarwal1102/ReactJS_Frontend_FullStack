export const Message = ({msg, classStyle}) =>{
    const myClass = `alert alert-${classStyle} text-center`;
    return (<h1 className={myClass}>{msg}</h1>)
}