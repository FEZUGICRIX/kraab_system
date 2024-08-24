import Link from 'next/link';

const Breadcrumbs = ({ pageTitle, previousPages }) => {
  return (
    <div className="nav-title">
      <Link href="/">KOTISIVU</Link>
      {previousPages &&
        previousPages.map((page, index) => (
          <span key={index}>
            <Link href={`/${page}`}>/{page}</Link>
          </span>
        ))}
      /{pageTitle}
    </div>
  );
};

export default Breadcrumbs;
