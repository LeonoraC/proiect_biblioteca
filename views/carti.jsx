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

var CartiComponent = createReactClass({
    getInitialState: function(){
      return { items: [] }  
    },
    
    
    
    render: function(){
    
    var listItems = this.props.data.map(function(item){
        return (
            <tr style={trStyle}>
                <td> 
                     <input style={inputNoStyle} type="text" name="id" value={item.id_carte} readOnly = "readonly"></input>
                </td>
                
                <td> 
                    <input style={inputStyle} type="text" name="titlu" value={item.titlu} ></input>
                </td>
                
                <td> 
                    <input style={inputStyle} type="text" name="gen" value={item.gen} ></input>
                </td>
                
                <td> 
                    <input style={inputStyle} type="text" name="nota" value={item.nota}></input>
                </td>
                
                <td> 
                    <input style={inputStyle} type="text" name="citita" value={item.citita}></input> 
                </td>
                
                <td> 
                    <input style={inputNoStyle} type="text" name="id_autor" value={item.id_autor} readOnly = "readonly"></input> 
                </td>
            </tr>
            
        ); 
    });
        return (
            <DefaultLayout name={this.props.name}>
            <form style={formStyle} action="/update" method="post">
                <table>
                    <tr style={trStyle}>
                        <th>Id carte</th>
                        <th>Titlu</th> 
                        <th>Gen</th>
                        <th>Nota</th>
                        <th>Citita</th> 
                        <th>Id Autor</th>
                    </tr>
                    {listItems}
                </table>
                <br></br>
                <input type="submit" name="submit" value="Salveaza"></input>
            </form>
            </DefaultLayout>
        )
    } 
});

module.exports = CartiComponent;