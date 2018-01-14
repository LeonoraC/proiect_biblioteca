var React = require('react');
var createReactClass = require('create-react-class');
var DefaultLayout = require('./layout/master');
var inputStyle = {
    border: '0px solid transparent',
    borderBottom: '2px solid #ffffff',
    backgroundColor: 'transparent',
    color: '#ffffff'
    
};
var inputNoStyle = {
    textAlign: 'center',
    border: '0px solid transparent',
    backgroundColor: 'transparent',
    color: '#ffffff'
}
var formStyle ={
    width: '800px',
    color: '#ffffff'
};
var trStyle ={
    height: '50px'
};


var AutoriComponent = createReactClass({
    
    getInitialState: function(){
      return { items: [] }  
    },
    
    
    render: function(){
    
    var listItems = this.props.data.map(function(item){
        return (
            <tr style={trStyle}>
                <td >
                    <input style={inputNoStyle} readOnly = "readonly" type="text" value = {item.id_autor} >
                        
                    </input>
                </td>
                <td >
                    <input style={inputStyle} readOnly = "readonly" type="text" value = {item.nume} >
                        
                    </input>
                </td>
                <td >
                    <input style={inputStyle} readOnly = "readonly" type="text" value = {item.nationalitate} >
                        
                    </input>
                </td>
                <td >
                    <input style={inputStyle} readOnly = "readonly" type="text" value = {item.nr_carti_publicate}>
                        
                    </input>
                </td>
            </tr>
        ); 
    });
        return (
            <DefaultLayout name={this.props.name}>
            <form style={formStyle}>
                <table>
                <tr>
                    <th>Id</th>
                    <th>Nume</th>
                    <th>Nationalitate</th> 
                    <th>Numar de carti publicate</th>
                </tr>
                    {listItems}
                </table>
            </form>
            </DefaultLayout>
        )
    } 
});

module.exports = AutoriComponent;