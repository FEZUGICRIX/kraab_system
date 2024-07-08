import { Link } from 'react-router-dom';

const Breadcrumbs = ({ pageTitle }) => {
  return (
    <div className="nav-title">
      <Link to="/">HOMEPAGE</Link>/{pageTitle}
    </div>
  );
};

export default Breadcrumbs;
