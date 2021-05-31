
import { parse } from 'fast-xml-parser';


// export default function PostUser(_fname: any ,_lname: string, _email: string, _phone: string,  _cityID: string , _districtID: string, _subdivisionid: string, _userAddress: string ,_password: string) {
 
//      var params='fname='+ _fname +'&lname='+ _lname+'&email='+ _email+'&phone='+ _phone+'&password='+ _password+'&cityid='+ _cityID +'&districtid='+ _districtID+'&subdivisionid='+ _subdivisionid+'&address='+ _userAddress
//     let url = `https://cors-anywhere.herokuapp.com/https://www.pkfoodstreet.com/webapi.asmx/AddNewUser`


//     // XMLHTTP - IMPLEMENTATION
//     var xhr = new XMLHttpRequest();
//     let xmlObject
//     let PostData = () => {
//         xhr.open("POST", url, true);
//         xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

//         xhr.onreadystatechange = function () { // Call a function when the state changes.
//             if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
//                 // Request finished. Do processing here.
//                 xmlObject = parse(xhr.responseText)
//                 console.log(xmlObject)
//                 // setresponse(xmlObject.int)
//             }else {
//                 console.log("error posting data")
//             }
//         }
//         xhr.send(params);
//     }
  
//     console.log("Post User Function")
// }  


const PostUser2 = (_fname: any ,_lname: string, _email: string, _phone: string,  _cityID: string , _districtID: string, _subdivisionid: string, _userAddress: string ,_password: string) => {
    var params='fname='+ _fname +'&lname='+ _lname+'&email='+ _email+'&phone='+ _phone+'&password='+ _password+'&cityid='+ _cityID +'&districtid='+ _districtID+'&subdivisionid='+ _subdivisionid+'&address='+ _userAddress

    let url = `https://cors-anywhere.herokuapp.com/https://www.pkfoodstreet.com/webapi.asmx/AddNewUser`


    // XMLHTTP - IMPLEMENTATION
    var xhr = new XMLHttpRequest();
    let xmlObject
    let PostData = () => {
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

        xhr.onreadystatechange = function () { // Call a function when the state changes.
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                // Request finished. Do processing here.
                xmlObject = parse(xhr.responseText)
                console.log(xmlObject)
                // setresponse(xmlObject.int)
            }else {
                console.log("error posting data")
            }
        }
        xhr.send(params);
    }
  
    console.log("Post User Function2")

}

export default PostUser2;

async function PostUser3(_fname: any ,_lname: string, _email: string, _phone: string,  _cityID: string , _districtID: string, _subdivisionid: string, _userAddress: string ,_password: string) {
    let params='fname='+ _fname +'&lname='+ _lname+'&email='+ _email+'&phone='+ _phone+'&password='+ _password+'&cityid='+ _cityID +'&districtid='+ _districtID+'&subdivisionid='+ _subdivisionid+'&address='+ _userAddress
    let url = `https://cors-anywhere.herokuapp.com/https://www.pkfoodstreet.com/webapi.asmx/AddNewUser`


    // XMLHTTP - IMPLEMENTATION
    var xhr = new XMLHttpRequest();
    let xmlObject
    let PostData = () => {
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

        xhr.onreadystatechange = function () { // Call a function when the state changes.
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                // Request finished. Do processing here.
                xmlObject = parse(xhr.responseText)
                console.log(xmlObject)
                // setresponse(xmlObject.int)
            }else {
                console.log("error posting data")
            }
        }
        xhr.send(params);
    }
  
    console.log("Post User Function3")

    PostData();
}