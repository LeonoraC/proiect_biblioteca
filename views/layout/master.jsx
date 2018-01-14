var React = require('react');
var createReactClass = require('create-react-class');
var bodyStyle ={
    backgroundColor: '#444444',
    fontFamily: 'Arial'
}


var MasterLayout = createReactClass({
    render: function(){
        return (
            <html>
                <head>
                    <title>
                        {this.props.name}
                    </title>
                </head>
                <body style={bodyStyle}>
                    {this.props.children}
                    <a href="../">
                      <input type="submit" value="Inapoi"/>
                    </a>
                </body>
            </html>
        )
    } 
});

module.exports = MasterLayout;