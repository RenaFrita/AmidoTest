import React from 'react';

export default function List(props) {

  return (
    <ul className="col-xs-4 col-md-4">
      {
        props.items.map(function(item) {
          return (
            <li key={`${item.artistId} ${item.trackId}`} className="well">
              <article>
                <h2>
                  {item.artistName}
                </h2>
                <h3>
                  {item.trackName}
                </h3>
                <img src={item.artworkUrl60} />
              </article>
            </li>
          );
        })
      }
    </ul>
  );
}
