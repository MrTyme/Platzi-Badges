import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './styles/BadgesList.css';

class BadgesListItem extends Component {
  render() {
    return (
      <div className="BadgesListItem">
        <img
          className="BadgesListItem__avatar"/>

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

export default class BadgesList extends Component {
  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              
                <li key={badge.id}>
                    <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>
                    
                        <BadgesListItem badge={badge} />
                    </Link>
                </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
