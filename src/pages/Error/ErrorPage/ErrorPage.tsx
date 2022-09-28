import '../Error.css'
import { Link } from 'react-router-dom';


function ErrorPage() {
  return (
    <div className="error">
      <h2 className='error__title'>Pag not found</h2>
      <Link to="/" className='button'>Return</Link>
    </div>
  );
}

export default ErrorPage;