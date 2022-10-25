import Router from "./Router";
import TopNavigation from "./TopNavigation";

const ContentContainer = () => {
  return (
    <div className="content-container">
      <TopNavigation />
      <div className="content-list">
        <Router />
      </div>
      {/* <BottomBar /> */}
    </div>
  );
};

export default ContentContainer;
