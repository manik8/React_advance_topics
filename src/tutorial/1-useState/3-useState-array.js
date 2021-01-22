import React, {Fragment, useState} from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => {
      return person.id !== id;
    });

    setPeople(newPeople);
  } 
  return <Fragment>
    {
      people.map((person) => {
        const {id, name} = person;
        return <div key={id} className="item">
          <h4>{name}</h4>
          <button onClick={() => removeItem(id)}>remove</button>
        </div>
      })
    }
    <button className="btn" onClick={() => setPeople([])}>clear items</button>
  </Fragment>;
};

export default UseStateArray;
