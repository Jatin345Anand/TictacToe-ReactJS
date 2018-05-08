import React from 'react';
class BUTTONS extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
<div>

     
   
    <div id="DIV">
             <table>
                <tr>
                    <td><button onClick={this.props.C1}></button></td>
                    <td><button onClick={this.props.C2}></button></td>
                    <td><button onClick={this.props.C3}></button></td>
                </tr>
                <tr>
                    <td><button onClick={this.props.C4}></button></td>
                    <td><button onClick={this.props.C5}></button></td>
                    <td><button onClick={this.props.C6}></button></td>
                </tr>
                <tr>
                    <td><button onClick={this.props.C7}></button></td>
                    <td><button onClick={this.props.C8}></button></td>
                    <td><button onClick={this.props.C9}></button></td>
                </tr>
            </table>
        </div>
       
</div>

        );
    }
}
export default BUTTONS;