function Skeleton() {
  return (
    <article>
      <div className="skeleton-block">
        <div className="skeleton-img skeleton-pulse"></div>
        <div className="skeleton-bottom">
          <div className="skeleton-filter">
            <div className="skeleton-topic skeleton-pulse"></div>
            <div className="skeleton-rating">
              <div className="skeleton-like skeleton-pulse"></div>
              <div className="skeleton-comment skeleton-pulse"></div>
            </div>
          </div>
          <div className="skeleton-title skeleton-pulse"></div>
          <div className="skeleton-author skeleton-pulse"></div>
          <div className="skeleton-date skeleton-pulse"></div>
        </div>
      </div>
    </article>
  );
}

export default Skeleton;
