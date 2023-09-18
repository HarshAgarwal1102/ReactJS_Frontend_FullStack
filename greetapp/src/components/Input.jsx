export const Input = ({lbl, placeholder, inputKey, fn, val}) =>{
    const takeInput =(event)=>{
        console.log('Input Value', event.target.value);
        fn(event.target.value, inputKey);
    }
    return (<div className="form-group">
        <label>{lbl}</label>
        <input value={val} onChange={takeInput} className="form-control" type="text" placeholder={placeholder}/>
    </div>)
}