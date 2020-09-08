import React from 'react';
import PropTypes from 'prop-types';

function Food({name}) {
	return <h1> I like {name}</h1>
}

const foodILike = [
	{
		name : 'kimchi',
		image : 'ttt'
	},
	{
		name : 'kimchi1',
		image : 'ttt'
	},
	{
		name : 'kimchi2',
		image : 'ttt'
	},
	{
		name : 'kimchi3',
		image : 'ttt'
	}
];

function renderFood(dish){
	return <Food name={dish.name}> </Food>
}

Food.PropTypes = {
	name : PropTypes.string.isRequired, 
}

function App() {
  return (
    <div> 
		{foodILike.map(renderFood)}
    </div>
  );
}

export default App;
