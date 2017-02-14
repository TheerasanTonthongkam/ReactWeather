var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return (
    <div>
      <h2>Nav</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={{color: '#FF0000'}}>Home</IndexLink>
      <Link to="/about" activeClassName="active" activeStyle={{color: '#FF0000'}}>About</Link>
      <Link to="/example" activeClassName="active" activeStyle={{color: '#FF0000'}}>Example</Link>
    </div>
  )
};

module.exports = Nav;
