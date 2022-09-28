import { Link } from 'react-router-dom';
import '../Error.css';

function Error404() {
  return (
    <div className="error">
      <h2 className='error__title'>Error 404</h2>
      <p className='error__subtitle'>Route not found</p>
      <Link to="/" className='button'>Return</Link>
    </div>
  );
}

export default Error404;