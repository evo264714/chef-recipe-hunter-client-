import React, { useEffect, useState } from 'react';
import Chef from './../Chef/Chef';

const ChefSection = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:2000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
           
           <h2 className='py-6 text-center text-black text-4xl font-bold bg-slate-400'>Check out some of our world class chef's recipes.</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 bg-slate-400'>
                
                {
                    chefs.map(chef => <Chef
                        key={chef.id}
                        chef={chef}
                    >
                    </Chef>)


                }
            </div>
        </div>
    );
};

export default ChefSection;