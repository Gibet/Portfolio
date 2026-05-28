// animated loading component for project modal
const loadingSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg" 
    width="48" height="36" 
    viewBox="0 0 32 24"
    className="bars-loader">
    <rect 
      className="morphing-bar morphing-bar-left" 
      width="6" height="20" />
    <rect 
      className="morphing-bar morphing-bar-center" 
      width="6" height="20" x="9" />
    <rect 
      className="morphing-bar morphing-bar-right" 
      width="6" height="20" x="18" />
  </svg>
);

export default loadingSVG;