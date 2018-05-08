import BUTTON from './button';
const BUTTONOPERATION ={
 BA:[],
 ADD:function(V,I){
     var b1= new BUTTON(V,I);
     this.BA.push(b1);
 },
 GETBUTTONS:function(){
     return this.BA;
 },
 
 isRow: function (A, B, C) {
    console.log(this.isNotBlank(A));
    console.log(this.isNotBlank(B));
    console.log(this.isNotBlank(C));

    if (this.isNotBlank(A) && this.isNotBlank(B) && this.isNotBlank(C)) {
        console.log(A, B, C);
        console.log(this.isSameValue(A, B, C));
        if (this.isSameValue(A, B, C)) {

            return true;
        }

        return false;
    }
},
isNotBlank: function (button) {

    if (button == "") {
        return false;
    } else {
        return true;
    }
},

isSameValue: function (one, two, three) {
    if ((one == two && one == three)) {
        return true;
    } else {
        return false;
    }
}
}
export default BUTTONOPERATION;