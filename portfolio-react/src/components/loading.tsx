// animated loading component for project modal
const loadingSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg" 
    width="64" height="48" 
    viewBox="0 0 32 24"
    className="bars-loader">
    <rect 
      className="morphing-bar morphing-bar-left" 
      width="8" height="24" />
    <rect 
      className="morphing-bar morphing-bar-center" 
      width="8" height="24" x="12" />
    <rect 
      className="morphing-bar morphing-bar-right" 
      width="8" height="24" x="24" />
  </svg>
);

export default loadingSVG;