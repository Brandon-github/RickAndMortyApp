import './Loader.css';


function Loader() {
  return (
    <div className='loader'>
      <div className="loader__container">
        <span className="loader__item"></span>
        <span className="loader__item"></span>
        <span className="loader__item"></span>
        <span className="loader__item"></span>
        <span className="loader__item"></span>
        <span className="loader__item"></span>
        <span className="loader__item"></span>
        <span className="loader__item"></span>
        <span className="loader__item"></span>
        <span className="loader__item"></span>
      </div>
      <h2 className="loader__text">Loading</h2>
    </div>
  );
}

export default Loader;