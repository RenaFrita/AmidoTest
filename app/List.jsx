import React from 'react';
import Item from './Item.jsx'

export default function List(props) {
  const items = props.items.map((item) =>
    <Item
      key={`${item.artistId} ${item.trackId}`}
      artistName={item.artistName}
      trackName={item.trackName}
      artworkUrl60={item.artworkUrl60}
      shortDescription={item.shortDescription}
      trackPrice={item.trackPrice}
      collectionName={item.collectionName}
      currency={item.currency}
      add={() => props.add(item)}
    />
  );

  let content;
  if (props.items.length) content = items;
  else if (props.query !== '') content = <li>No results found</li>;

  return (
    <ul className="col-xs-8 col-md-8">
      {content}
    </ul>
  );
}
