var React = require('react');
var{Link, IndexLink} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className='text-center page-title'>Examples</h1>
      <p>Here are some location examples to try out</p>
      <ol>
        <li>
          <Link to='/?location=Toronto'>Toronto</Link>
        </li>
        <li>
            <Link to='/?location=New York'>New York</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
