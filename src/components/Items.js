import React from 'react';

const Items = props => {
	return (
		<div className="container tile">		
			{ 
				props.items.map(item => 
					<div key={ item.id } id={ item.id } className="child">	
						<a href={item.thumbnailUrl} className="img-link">{item.thumbnailUrl}</a>
						<img src={item.url} alt={ item.title } className="image is-128x128"/>
					</div>
				)
			}
		</div>
	)
};

export default Items;