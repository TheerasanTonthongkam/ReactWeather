var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();
    alert('not wired');
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              Ta7 React App
            </li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{color: '#FF0000'}}>Home</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{color: '#FF0000'}}>About</Link>
            </li>
            <li>
              <Link to="/example" activeClassName="active" activeStyle={{color: '#FF0000'}}>Example</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Enter city"/>
              </li>
              <li>
                <input type="submit" className="button" value="Search"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;

// var old = (
//   <div>
//     <h2>Nav</h2>
//     <IndexLink to="/" activeClassName="active" activeStyle={{color: '#FF0000'}}>Home</IndexLink>
//     <Link to="/about" activeClassName="active" activeStyle={{color: '#FF0000'}}>About</Link>
//     <Link to="/example" activeClassName="active" activeStyle={{color: '#FF0000'}}>Example</Link>
//   </div>
// )
