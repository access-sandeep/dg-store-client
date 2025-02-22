import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="container">
        <div id="error-page" className="row text-center align-middle m-5">
            <div className="col-12 text-bg-primary p-3">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <p>
                    <Link to={`/`} className="link-dark">Go to Home page</Link>
                </p>
            </div>
        </div>
    </div>
    
  );
}