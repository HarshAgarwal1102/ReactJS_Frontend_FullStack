// Creating First Component here...

/*
Here we are learning rendering...
1. Static Rendering
2. Dynamic Rendering = { }
3. Conditional Rendering
    a) Ternary Operator
    b) If-else, Switch case
    c) Logical Operator
4. Iterative Rendering
*/

import React from 'react';
import './Firstt.css';
export const First = () => {
    const myStyle = {
        color: 'Orange',
        backgroundColor: 'cyan'
    }
    const price = 900;
    const myName = 'Harsh Agarwal'
    const flag = true;



    const logic = (val) => {
        if (val > 18)
            return (<>
                <h3>You are 18+</h3>
            </>)
        else
            return (<>
                <h3>You are a kid.</h3>
            </>)
    }
    // return(<React.Fragment> </React.Fragment>)
    // or
    // return (<></>) -> Short Hand 
    return (<>
        <h1>Here we are learning Rendering...</h1>
        <h3>1. Static Rendering <br /><br />
            2. Dynamic Rendering = &#123; &#125;<br /><br />
            3. Conditional Rendering <br />
            &nbsp; &nbsp; a) Ternary Operator <br />
            &nbsp; &nbsp; b) If-else, Switch case <br />
            &nbsp; &nbsp; c) Logical Operator <br /><br />
            4. Iterative Rendering</h3> <br />
        <h1>Styling Examples...</h1>
        <h3 className="red">Hey.. {myName} here, applied css here</h3>
        <h3 style={myStyle}>This is an example of inline styling</h3>
        <hr />
        <h1>Conditional examples...(Ternary Operator)</h1>
        {price > 9000 ? <h3>Price is greater than 9000 - Discount 20%</h3> : <h3>Price is less than 9000 - No Discount</h3>}
        <hr />
        {flag && <h1>Statement executed bcz of TRUE condition</h1>}
        <hr />
        <h1>If-Else Condition...</h1>
        {logic(19)}
        <hr />
    </>
    )
}