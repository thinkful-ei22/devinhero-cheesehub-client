import React from 'react';

export default function CheeseList(props){

  const cheeseListItems = props.cheeses.map(cheese => (<li>{cheese}</li>));

  return(

    <ul>
      {cheeseListItems}
    </ul>
  );
}