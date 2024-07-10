import { Link } from 'react-router-dom';

const Breadcrumbs = ({ pageTitle, previousPages }) => {
  return (
    <div className="nav-title">
      <Link to="/">HOMEPAGE</Link>
      {previousPages && previousPages.map((page, index) => (
        <span key={index}>
          <Link to={`/${page}`}>/{page}</Link>
        </span>
      ))}
      /{pageTitle}
    </div>
  );
};

export default Breadcrumbs;
