import "bootstrap/dist/css/bootstrap.min.css";

function LoadingSpiner() {
  return (
    <>
      <div className="d-flex justify-content-center my-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}

export default LoadingSpiner;