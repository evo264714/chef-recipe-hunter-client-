// import React from 'react';
// import { FaFilePdf } from "react-icons/fa";
// import Pdf from "react-to-pdf";
// const ref = React.createRef();

// const Blogs = () => {
//     return (

//         <div className='text-white p-10' style={{ background: 'linear-gradient(to right,#7da5aa,#385253)' }}>
//             <div className='flex justify-center mb-6'>
                
//                 <Pdf targetRef={ref} filename="code-example.pdf">
//         {({ toPdf }) => <button onClick={toPdf} className='btn btn-info'><FaFilePdf className='me-2' />Download PDF</button>}
//       </Pdf>
//             </div>

//             <div ref={ref}>
//             <h2 className='text-2xl font-bold'>1. Differences between uncontrolled and controlled component?</h2>
//             <p className='text-xl font-medium text-black'>Ans: Differences between uncontrolled and controlled components are that uncontrolled components are managed by the browser or user, while controlled components are managed by the application, and controlled components typically offer more flexibility and control over the component's behavior.</p>
//             <h2 className='text-2xl font-bold'>2. How to validate React props using PropTypes?</h2>
//             <p className='text-xl font-medium text-black'>Ans. React provides a package called PropTypes which can be used to validate the props of a component. PropTypes allows you to define the type and shape of the props that a component expects, which can help catch errors and make debugging easier. </p>
//             <h2 className='text-2xl font-bold'>3. Difference between nodejs and express js.</h2>
//             <p className='text-xl font-medium text-black'>Ans: Node.js is a general-purpose runtime environment that allows you to run JavaScript on the server-side, while Express.js is a web application framework that is built on top of Node.js and provides a set of features and APIs for building web applications and APIs.</p>
//             <h2 className='text-2xl font-bold'>4. What is a custom hook, and why will you create a custom hook?</h2>
//             <p className='text-xl font-medium text-black'>Ans: A custom hook is a JavaScript function that starts with the prefix "use" and allows you to reuse stateful logic between components. Custom hooks provide a way to extract reusable logic from components, making your code more modular, easier to test, and more maintainable.</p>
//             </div>
//         </div>

//     );
// };

// export default Blogs;





import React from 'react';
import { FaFilePdf, FaQuoteLeft, FaBookOpen } from "react-icons/fa";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blogs = () => {
    return (
        <div className='min-h-screen p-6 md:p-10' style={{ 
            background: 'linear-gradient(135deg, #7da5aa 0%, #385253 50%, #2a3f40 100%)',
            fontFamily: "'Inter', sans-serif"
        }}>
            {/* Header Section */}
            <div className='text-center mb-12'>
                <div className='flex items-center justify-center gap-3 mb-4'>
                    <FaBookOpen className='text-3xl text-yellow-300' />
                    <h1 className='text-4xl md:text-5xl font-bold text-white' style={{
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                        fontFamily: "'Playfair Display', serif"
                    }}>
                        Developer Insights
                    </h1>
                </div>
                <p className='text-xl text-yellow-100 opacity-90 max-w-2xl mx-auto'>
                    Expert answers to common React and Node.js questions
                </p>
            </div>

            {/* PDF Download Button */}
            <div className='flex justify-center mb-12'>
                <Pdf targetRef={ref} filename="react-development-guide.pdf">
                    {({ toPdf }) => (
                        <button 
                            onClick={toPdf} 
                            className='flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-bold text-lg hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-red-400'
                            style={{
                                boxShadow: '0 8px 25px rgba(220, 38, 38, 0.4)'
                            }}
                        >
                            <FaFilePdf className='text-2xl' />
                            Download PDF Guide
                        </button>
                    )}
                </Pdf>
            </div>

            {/* Content Section */}
            <div 
                ref={ref}
                className='max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12'
                style={{
                    border: '1px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1), 0 8px 24px rgba(0,0,0,0.15)'
                }}
            >
                {/* Question 1 */}
                <div className='mb-12 p-6 rounded-2xl' style={{
                    background: 'linear-gradient(145deg, #f8fafc, #f1f5f9)',
                    borderLeft: '6px solid #3b82f6'
                }}>
                    <div className='flex items-start gap-4 mb-4'>
                        <div className='flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg'>
                            1
                        </div>
                        <h2 className='text-2xl md:text-3xl font-bold text-gray-800' style={{
                            fontFamily: "'Playfair Display', serif"
                        }}>
                            Differences between uncontrolled and controlled components?
                        </h2>
                    </div>
                    <div className='flex gap-4'>
                        <FaQuoteLeft className='text-blue-400 text-xl mt-1 flex-shrink-0' />
                        <p className='text-lg text-gray-700 leading-relaxed'>
                            Uncontrolled components are managed by the browser or user, while controlled components are managed by the application. Controlled components typically offer more flexibility and control over the component's behavior, as their state is handled by React through props and callbacks.
                        </p>
                    </div>
                </div>

                {/* Question 2 */}
                <div className='mb-12 p-6 rounded-2xl' style={{
                    background: 'linear-gradient(145deg, #f8fafc, #f1f5f9)',
                    borderLeft: '6px solid #10b981'
                }}>
                    <div className='flex items-start gap-4 mb-4'>
                        <div className='flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg'>
                            2
                        </div>
                        <h2 className='text-2xl md:text-3xl font-bold text-gray-800' style={{
                            fontFamily: "'Playfair Display', serif"
                        }}>
                            How to validate React props using PropTypes?
                        </h2>
                    </div>
                    <div className='flex gap-4'>
                        <FaQuoteLeft className='text-green-400 text-xl mt-1 flex-shrink-0' />
                        <p className='text-lg text-gray-700 leading-relaxed'>
                            React provides a package called PropTypes which can be used to validate the props of a component. PropTypes allows you to define the type and shape of the props that a component expects, which can help catch errors and make debugging easier. This is especially useful in larger applications with multiple developers.
                        </p>
                    </div>
                </div>

                {/* Question 3 */}
                <div className='mb-12 p-6 rounded-2xl' style={{
                    background: 'linear-gradient(145deg, #f8fafc, #f1f5f9)',
                    borderLeft: '6px solid #f59e0b'
                }}>
                    <div className='flex items-start gap-4 mb-4'>
                        <div className='flex-shrink-0 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg'>
                            3
                        </div>
                        <h2 className='text-2xl md:text-3xl font-bold text-gray-800' style={{
                            fontFamily: "'Playfair Display', serif"
                        }}>
                            Difference between Node.js and Express.js
                        </h2>
                    </div>
                    <div className='flex gap-4'>
                        <FaQuoteLeft className='text-yellow-400 text-xl mt-1 flex-shrink-0' />
                        <p className='text-lg text-gray-700 leading-relaxed'>
                            Node.js is a general-purpose runtime environment that allows you to run JavaScript on the server-side, while Express.js is a web application framework built on top of Node.js. Express.js provides a robust set of features and APIs specifically for building web applications and APIs, making development faster and more structured.
                        </p>
                    </div>
                </div>

                {/* Question 4 */}
                <div className='p-6 rounded-2xl' style={{
                    background: 'linear-gradient(145deg, #f8fafc, #f1f5f9)',
                    borderLeft: '6px solid #8b5cf6'
                }}>
                    <div className='flex items-start gap-4 mb-4'>
                        <div className='flex-shrink-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg'>
                            4
                        </div>
                        <h2 className='text-2xl md:text-3xl font-bold text-gray-800' style={{
                            fontFamily: "'Playfair Display', serif"
                        }}>
                            What is a custom hook, and why will you create a custom hook?
                        </h2>
                    </div>
                    <div className='flex gap-4'>
                        <FaQuoteLeft className='text-purple-400 text-xl mt-1 flex-shrink-0' />
                        <p className='text-lg text-gray-700 leading-relaxed'>
                            A custom hook is a JavaScript function that starts with the prefix "use" and allows you to reuse stateful logic between components. Custom hooks provide a way to extract reusable logic from components, making your code more modular, easier to test, and more maintainable. They help in avoiding code duplication and keeping components clean and focused.
                        </p>
                    </div>
                </div>

                {/* Footer Note */}
                <div className='mt-12 p-6 text-center rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200'>
                    <p className='text-gray-600 text-lg'>
                        <strong>Pro Tip:</strong> Always document your custom hooks and PropTypes for better team collaboration!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;