import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class SearchBlock extends Component {

  render() {
    const { t, value, onChange, match, btnLink } = this.props;
    return (
      <div className="searchBlock">
        <div className="row">
          <div className="col-xs-12 flex">
            <div>
              <label>
               Wyszukaj
              </label>
              <input className="input-style" value={value} onChange={onChange}/>
            </div>
            {this.props.children}
           </div>
        </div>
      </div>
      );
  }
}

export default SearchBlock;
