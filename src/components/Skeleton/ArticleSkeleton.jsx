function ArticleSkeleton() {
  return (
    <article>
      <div className="skeleton-block article-skeleton-block">
        <div className="skeleton-img skeleton-pulse"></div>
        <div className="skeleton-bottom">
          <div className="skeleton-filter">
            <div className="skeleton-topic skeleton-pulse"></div>
            <div className="skeleton-rating">
              <div className="skeleton-comment skeleton-vote skeleton-pulse"></div>
            </div>
          </div>
          <div className="skeleton-title skeleton-pulse"></div>
          <div className="skeleton-author skeleton-pulse"></div>
          <div className="skeleton-date skeleton-pulse"></div>
          <div className="skeleton-text">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ArticleSkeleton;
