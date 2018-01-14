var React = require('react');
var createReactClass = require('create-react-class');
var DefaultLayout = require('./layout/master');
var bodyStyle ={
    backgroundColor: '#222222',
    fontFamily: 'Arial'
}
var divStyle={
    position: 'absolute',
    margin: '400px',
    color: '#ffffff',
    fontSize: '30px'
}


var IndexComponent = createReactClass({
    render: function(){
        return (
            <html>
                <head>
                    <title>
                        {this.props.name}
                    </title>
                    <link rel="stylesheet" type="text/css" href="../client/css/main.css"></link>
                </head>
                <body style={bodyStyle}>
                    <div style={divStyle}>
                        {this.props.name}
                        <br></br>
                        <a href="/autori">
                          <input type="submit" value="Autori"/>
                        </a>
                        
                        <a href="/carti">
                          <input type="submit" value="Carti"/>
                        </a>
                    </div>
                </body>
            </html>
                
        )
    } 
});

module.exports = IndexComponent;