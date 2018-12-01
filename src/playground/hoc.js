// Higher Order Component (HOC) - A component (HOC) that renders another component
// Benefits: Reuse code, Render hijacking, Prop manipulation, Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedContent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share.</p>}
      <WrappedContent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedContent) => {
  return (props) => (
    <div>
    
      {/* !props.isAuthenticated && <p>Please login to view info.</p> || <WrappedContent {...props} /> */}

      {props.isAuthenticated ? (
        <WrappedContent {...props} />
      ) : (
        <p>Please login to view the info.</p>
      )}

    </div>
  )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details" />, document.getElementById('app'));
