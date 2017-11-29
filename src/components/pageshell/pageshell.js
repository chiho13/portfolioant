import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const PageShell = Page => {
  return props =>
    <div className="pageShell">
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={props.match.path === '/portfolio' ? 'SlideIn' : 'SlideOut'}
      >
        <Page {...props} />
      </ReactCSSTransitionGroup>
    </div>;
};
export default PageShell;