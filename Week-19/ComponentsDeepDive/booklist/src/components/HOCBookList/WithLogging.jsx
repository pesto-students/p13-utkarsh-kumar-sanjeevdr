import React from 'react'

const WithLogging = (WrappedComponent) => {
    class WithLogging extends React.Component {  
      
      // componentDidMount() {
      //   console.log('Component was mounted');
      // }

      // componentDidUpdate() {
      //   console.log('Component was updated');
      // }
  
      render() {
        console.log('Component was rendered');
        return <WrappedComponent {...this.props} />;
      }
    }  
    return WithLogging;
  };

export default WithLogging