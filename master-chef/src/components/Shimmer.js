import {
  ShimmerPostList,
  ShimmerButton,
  ShimmerCategoryItem,
} from "react-shimmer-effects";

const Shimmer = ({ page }) => {
  if (page === "RestaurantMenu") {
    return (
      <section className="menu-section">
        <div className="container">
          <div className="menu-holder">
            <ShimmerCategoryItem
              hasImage
              imageType="thumbnail"
              imageWidth={100}
              imageHeight={100}
              title
            />
            <ShimmerCategoryItem
              hasImage
              imageType="thumbnail"
              imageWidth={100}
              imageHeight={100}
              title
            />
            <ShimmerCategoryItem
              hasImage
              imageType="thumbnail"
              imageWidth={100}
              imageHeight={100}
              title
            />
            <ShimmerCategoryItem
              hasImage
              imageType="thumbnail"
              imageWidth={100}
              imageHeight={100}
              title
            />
            <ShimmerCategoryItem
              hasImage
              imageType="thumbnail"
              imageWidth={100}
              imageHeight={100}
              title
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="search-section">
        <div className="container">
          <div className="filter">
            <ShimmerButton size="lg" />
            <ShimmerButton size="lg" />
          </div>
          <div className="filter">
            <ShimmerButton size="lg" />
            <ShimmerButton size="lg" />
          </div>
        </div>
      </section>
      <section className="restaurant-section shimmer">
        <div className="container">
          <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={2} gap={30} />
        </div>
      </section>
    </>
  );
};
export default Shimmer;
