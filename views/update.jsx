var React = require('react');
var createReactClass = require('create-react-class');
var DefaultLayout = require('./layout/master');
var bodyStyle ={
    backgroundColor: '#444444',
    fontFamily: 'Arial'
}
var divStyle={
    position: 'absolute',
    margin: '400px',
    color: '#ffffff',
    fontSize: '30px'
}


var UpdateComponent = createReactClass({
    render: function(){
        return (
            <html>
                <head>
                    <title>
                        Succes
                    </title>
                </head>
                <body style={bodyStyle}>
                    <div style={divStyle}>
                        {this.props.message}
                        <br></br>
                        <a href="/carti">
                          <input type="submit" value="Inapoi"/>
                        </a>
                    </div>
                </body>
            </html>
                
        )
    } 
});

module.exports = UpdateComponent;