import React from 'react';

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          {
            this.props.css.map((cssLink) =>
              <link rel="stylesheet" href={`/${cssLink}`} />
            )
          }
        </head>
        <body>
          <nav>
            #webperf Sandbox
          </nav>

          {this.props.children}

          {
            this.props.js.map((jsResource) =>
              <script src={`/${jsResource}`} />
            )
          }
        </body>
      </html>
    );
  }
};

export default DefaultLayout;
