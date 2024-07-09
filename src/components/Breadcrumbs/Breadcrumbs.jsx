import { Link } from 'react-router-dom';

const Breadcrumbs = ({ pageTitle, previousPage }) => {
  return (
    <div className="nav-title">
      <Link to="/">HOMEPAGE</Link>
      {previousPage && (
        <Link to={`/${previousPage}`}>/{previousPage}</Link>
      )}
      /{pageTitle}
    </div>
  );
};

export default Breadcrumbs;
