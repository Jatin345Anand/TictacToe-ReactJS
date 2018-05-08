import React from 'react';
import S1 from '../components/square1';
import S2 from '../components/square2';
import S3 from '../components/square3';
import S4 from '../components/square4';
import S5 from '../components/square5';
import S6 from '../components/square6';
import S7 from '../components/square7';
import S8 from '../components/square8';
import S9 from '../components/square9';
import BUTTONS from '../components/buttons';
import BUTTON from '../models/button';
import BUTTONOPERATION from '../models/buttonOperation';
// import MobileOperation from '../../../../react-crud/src/Models/mobileOperation';

class BigSquare extends React.Component{
    constructor(props){
     super(props);
     this.iszeroOrX=true;
     this.GameOver=false;
     this.ButtonArray=[];
     this.BArray2=[];
     this.isplayerNumber=true;
     this.state={
        span:"",h1:"",h2:""
    };
     this.V1=""; this.V2=""; this.V3=""; this.V4=""; this.V5=""; this.V6=""; 
     this.V7=""; this.V8=""; this.V9=""; 
    }
    C1(event){
        console.log(`c1`);
        console.log(event.target.value);
        this.PrintXorZero(event,1);
    }
    PrintXorZero(event,index){
        if(event.target.innerHTML=="" && !this.GameOver){
               
             if(this.iszeroOrX){
                console.log(this.iszeroOrX);
                    event.target.innerHTML="X";
            }
            else{
                console.log(this.iszeroOrX);
                event.target.innerHTML="0";
            }
        this.iszeroOrX=!this.iszeroOrX;
        this.isplayerNumber=!this.isplayerNumber;
       if(index===1){
           console.log(event.target.innerHTML);
           this.V1=event.target.innerHTML;
           console.log(this.V1);
           this.ButtonArray.push(this.V1);
       }
       if(index===2){
        this.V2=event.target.innerHTML;
        this.ButtonArray.push(this.V2);
    }if(index===3){
        this.V3=event.target.innerHTML;
        this.ButtonArray.push(this.V3);
    }if(index===4){
        this.V4=event.target.innerHTML;
        this.ButtonArray.push(this.V4);
    }if(index===5){
        this.V5=event.target.innerHTML;
        this.ButtonArray.push(this.V5);
    }if(index===6){
        
        this.V6=event.target.innerHTML;
        this.ButtonArray.push(this.V6);
        console.log(this.V6);
    }if(index===7){
        this.V7=event.target.innerHTML;
        this.ButtonArray.push(this.V7);
    }if(index===8){
        this.V8=event.target.innerHTML;
        this.ButtonArray.push(this.V8);
    }if(index===9){
        console.log(event.target.innerHTML);
        this.V9=event.target.innerHTML;
        console.log(this.V9);
        this.ButtonArray.push(this.V9);
        console.log(this.V9);
     }  
     this.isGO();
     this.isOverGAme();
    //  this.isGameOver(event.target.innerHTML,index);
     }
     if(this.ButtonArray.length===9){
         this.ButtonArray.forEach((io)=>console.log(io));
     }
    }
     isOverGAme() {
        console.log(`isgameover`);
        if(this.isplayerNumber===false){
            // $scope.PN="ONE";
            console.log(`one`);
            this.setState({span:"ONE"});
            
            // this.span().target.innerHTML="ONE";
        }
        else{
            // $scope.PN="TWO";
            console.log(`two`);
            this.setState({span:"TWO"});
         }
       
        if(this.GameOver===true){
            console.log(`GameOver`);
            this.setState({h1:"GAME OVER",h2: });
             
            // $scope.GO="GAME OVER";
            // $scope.CN="You Win this game ! Congratulation...";
        }
    }
    isGO(){
        if (BUTTONOPERATION.isRow(this.V1, this.V2, this.V3)) {
            this.GameOver = true;
         }
         if (BUTTONOPERATION.isRow(this.V4, this.V5, this.V6)) {
            this.GameOver = true;
         }
         if (BUTTONOPERATION.isRow(this.V7, this.V8, this.V9)) {
            this.GameOver = true;
         }
         if (BUTTONOPERATION.isRow(this.V1, this.V4, this.V7)) {
            this.GameOver = true;
         }
         if (BUTTONOPERATION.isRow(this.V2, this.V5, this.V8)) {
            this.GameOver = true;
         }
         if (BUTTONOPERATION.isRow(this.V3, this.V6, this.V9)) {
            this.GameOver = true;
         }
         if (BUTTONOPERATION.isRow(this.V1, this.V5, this.V9)) {
            this.GameOver = true;
         }
         if (BUTTONOPERATION.isRow(this.V3, this.V5, this.V7)) {
            this.GameOver = true;
         }
    }
    isGameOver(A,B){
//    console.log(`${A} && ${B}`);
//    BUTTONOPERATION.ADD(A,B);
//    this.BArray2=[...this.state.BArray];
//    if(BUTTONOPERATION.GETBUTTONS().length===9){
//        console.log(`full`);
//        this.BArray2=BUTTONOPERATION.GETBUTTONS();
//        this.BArray2.forEach((io)=>console.log(io));
//     }
//     this.Update();
    }
    Update(){
//    this.setState({BArray:this.BArray2});
//    this.state.BArray.forEach((io)=>console.log(io));
    }
    C2(event){
        console.log(`c2`);
        this.PrintXorZero(event,2);
    }
    C3(event){
        console.log(`c3`);
        this.PrintXorZero(event,3);
    }
    C4(event){
        console.log(`c4`);
        this.PrintXorZero(event,4);
    }
    C5(event){
        console.log(`c5`);
        this.PrintXorZero(event,5);
    }
    C6(event){
        console.log(`c6`);
        this.PrintXorZero(event,6);
    }
    C7(event){
        console.log(`c7`);
        this.PrintXorZero(event,7);
    }
    C8(event){
        console.log(`c8`);
        this.PrintXorZero(event,8);
    }
    C9(event){
        console.log(`c9`);
        this.PrintXorZero(event,9);
    }
   
    render(){
        return(
        <div>
            <h1>TIC TAC TOE REACT</h1>
           <h2>Player : <span  id="pn">{this.state.span}</span></h2>  
           
         <BUTTONS 
         C1={this.C1.bind(this)}
         C2={this.C2.bind(this)}
         C3={this.C3.bind(this)}

         C4={this.C4.bind(this)}
         C5={this.C5.bind(this)}
         C6={this.C6.bind(this)}

         C7={this.C7.bind(this)}
         C8={this.C8.bind(this)}
         C9={this.C9.bind(this)}
       
         />
          <h2   id="Ans">{this.state.h2}</h2>
        <h1   id="Winp">{this.state.h1}</h1>
        </div>
        );
    }
}
export default BigSquare;