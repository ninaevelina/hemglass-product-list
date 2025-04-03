import "./products-skeleton.scss";

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
