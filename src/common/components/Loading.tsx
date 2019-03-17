import React, { ReactElement } from 'react';

export const Loading: React.FC<{ children: ReactElement }> = ({ children }): React.ReactElement => (
  <div className="loading">
    <div className="loading-box">
      {children}
    </div>
  </div>
);