export const Second =()=>{

    const products = [
        {id: 100, name: 'iPhone', price: 90000},
        {id: 101, name: 'LED', price: 59000},
        {id: 102, name: 'Shoes', price: 20000}
    ]

    const fruits = ['Apple', 'Mango', 'Kiwi'];
    return (<>
    <h1>Iterative Rendering...</h1>

        {fruits.map(fruit=>{
            return (<>
            <p>Fruit is {fruit}</p>
            </>
            );
        })}

        <table border={1}>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Price</td>
                </tr>
            </thead>
            <tbody>
                <>
                {products.map((product,index)=>{
                    return (<>
                    <tr key={index}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                    </tr>
                    </>
                    );
                })}
                </>
            </tbody>
        </table>
    </>)
}