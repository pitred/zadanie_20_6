import React from 'react';

class Title extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <div>
            <h1>To do:</h1>
            <h2>What: {this.props.taskNumber}</h2>
         </div>
      );
   }
}
export default Title;
