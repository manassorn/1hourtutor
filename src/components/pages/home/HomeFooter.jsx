import React from "react";

class HomeFooter extends React.Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
    }
    
    render() {
      return <div className="p-3 border-top bg-light">
          บริษัท วันอาวติวเตอร์ จำกัด
          copyright © 2021
      </div>

    }
}

export default HomeFooter