import React from 'react';

export default function Item(props) {
  return (
    <li className="well">
      <article>
        <h2>
          {props.artistName}
        </h2>
        <h3>
          {props.collectionName}
        </h3>
        <h4>
          {props.trackName}
        </h4>
        <div className="row">
          <img className="col-xs-2 col-md-2" src={props.artworkUrl60} />
          <p className="col-xs-10 col-md-10">{props.trackPrice} {props.currency}</p>
          <span
            className="col-xs-10 col-md-10 glyphicon glyphicon-heart"
            aria-hidden="true"
            onClick={() => props.add()}
            style={{cursor: 'pointer'}}
          ></span>
        </div>
      </article>
    </li>
  );
}
