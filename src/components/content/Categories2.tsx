import React, { useEffect, useState } from 'react';
import Category2 from './Category2';
import axios from 'axios';

type Category = {
    name: string;
    count: number;
}

const Categories2: React.FC = () => {
    const [selected, setSelected] = useState('All');
    const [categoryList, setCategoryList] = useState<Category[]>([]); // 객체는 제너릭으로 설정한다.
    const handleSelected = (name: string) => {
        setSelected(name);
    }
    // const categoryList = [
    //     {
    //         "name": "All",
    //         "count": 8
    //     },
    //     {
    //         "name": "Front-end",
    //         "count": 4
    //     },
    //     {
    //         "name": "Back-end",
    //         "count": 2
    //     },
    //     {
    //         "name": "Mobile",
    //         "count": 2
    //     },
    // ];
    

    useEffect(() =>{
        axios
            .get('data/category.json')
            .then(res => setCategoryList(res.data) )
            .catch(err => console.log(err));
    },[]);


    return (
        <ul className="categories">
            {categoryList && categoryList.map((category) =>  
                <li key={category.name}>
                    <Category2 
                            // name={category.name}
                            // count={category.count}
                            category={category}
                            click={handleSelected}
                            style={category.name === selected ? // category.name 값을 사용하는 경우 타입정의
                                    'category category--selected'
                                    : 'category'
                            }
                            />
                </li>
            )}
        </ul>
    );
}

export default Categories2;