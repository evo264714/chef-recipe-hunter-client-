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
            <h2 className='text-black text-4xl font-bold mt-10'>Check out some of our world class chef's recipes.</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16'>
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