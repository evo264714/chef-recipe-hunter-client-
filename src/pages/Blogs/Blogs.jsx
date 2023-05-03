import React from 'react';

const Blogs = () => {
    return (
        <div className='text-white p-10' style={{background: 'linear-gradient(to right,#7da5aa,#385253)'}}>
            <h2 className='text-2xl font-bold'>1. Differences between uncontrolled and controlled component?</h2>
            <p className='text-xl font-medium text-black'>Ans: Differences between uncontrolled and controlled components are that uncontrolled components are managed by the browser or user, while controlled components are managed by the application, and controlled components typically offer more flexibility and control over the component's behavior.</p>
            <h2 className='text-2xl font-bold'>2. How to validate React props using PropTypes?</h2>
            <p className='text-xl font-medium text-black'>Ans. React provides a package called PropTypes which can be used to validate the props of a component. PropTypes allows you to define the type and shape of the props that a component expects, which can help catch errors and make debugging easier. </p>
            <h2 className='text-2xl font-bold'>3. Difference between nodejs and express js.</h2>
            <p className='text-xl font-medium text-black'>Ans: Node.js is a general-purpose runtime environment that allows you to run JavaScript on the server-side, while Express.js is a web application framework that is built on top of Node.js and provides a set of features and APIs for building web applications and APIs.</p>
            <h2 className='text-2xl font-bold'>4. What is a custom hook, and why will you create a custom hook?</h2>
            <p className='text-xl font-medium text-black'>Ans: A custom hook is a JavaScript function that starts with the prefix "use" and allows you to reuse stateful logic between components. Custom hooks provide a way to extract reusable logic from components, making your code more modular, easier to test, and more maintainable.</p>
        </div>
    );
};

export default Blogs;