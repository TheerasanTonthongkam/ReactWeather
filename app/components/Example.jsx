var React = require('react');
var {Link} = require('react-router');

var Example = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Example</h1>
      <p>Some Example</p>
      <ol>
        <li>
          <Link to='/?city=London'>
            London
          </Link>
        </li>
        <li>
          <Link to='/?city=Bangkok'>
            Bangkok
          </Link>
        </li>
        <li>
          <Link to='/?city=Hatyai'>
            Hatyai
          </Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Example;
