export const Button = ({msg,cssClass, fn}) =>{
    return (<button onClick={fn} className={cssClass}>{msg}</button>)
}