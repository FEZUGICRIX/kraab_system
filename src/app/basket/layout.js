import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import styles from './page.module.scss';

export default function BasketLayout({ children }) {
  return (
    <>
      <Breadcrumbs pageTitle="ostoskassi" />
      <div className="container">
        <h1 className={styles.basketTitle}>Ostoskassi</h1>
        {children}
      </div>
    </>
  );
}
