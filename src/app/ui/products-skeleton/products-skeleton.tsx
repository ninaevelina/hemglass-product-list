import "./products-skeleton.scss";

// This component is not implemented in the current version of the app but is kept for reference.
// The component was intended to be used as a skeleton loader for the product list, used with <Suspense/>.

export default function ProductsSkeleton() {
  return (
    <section className="skeleton-list">
      <div className="list-item">
        <article className="list-item__card"></article>
      </div>
      <div className="list-item">
        <article className="list-item__card"></article>
      </div>
      <div className="list-item">
        <article className="list-item__card"></article>
      </div>
      <div className="list-item">
        <article className="list-item__card"></article>
      </div>
    </section>
  );
}
