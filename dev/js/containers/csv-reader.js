import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';
import FileReaderInput from 'react-file-reader-input';





class CsvReader extends Component{

    


	handleChange(e, results) {
    const ID = ()=>{
      // Math.random should be unique because of its seeding algorithm.
      // Convert it to base 36 (numbers + letters), and grab the first 9 characters
      // after the decimal.
      return '_' + Math.random().toString(36).substr(2, 9);
    };
    let labels ;
    let tmpData;let tmpString ;
    let arrayOfNewMail =[];
    results.forEach(result => {
     const [e, file] = result;
     const arrayOfData = e.target.result.split("\n");
     let FilteredArrayOfData = arrayOfData.filter((data,index)=> {
           if(index!==0) return data;
     })
        console.log("results::",arrayOfData);


     console.log(labels = arrayOfData[0].split(","));
     console.log(arrayOfData);
     FilteredArrayOfData.map(function(val){
        tmpData = val.split(",");
        tmpString = '';
        labels.forEach(function(label,i){
            tmpString += label+'='+tmpData[i]+'&'
        })
        console.log("",tmpString);

       arrayOfNewMail.push('http://localhost:8081/pdf/'+ID()+'?'+tmpString);

        
        
     })
    
     let ct =0;
     function recCall(){
        setTimeout(function(){
            console.log("timeout");
            fetch(arrayOfNewMail[ct], {
         
            });
            if(ct < arrayOfNewMail.length){ console.log(arrayOfNewMail.length,ct);ct++;recCall();}
            
        }, 10000);
     }

     recCall();
   


    });
  }


	render(){

		return(
				<div>
					<h1>CSV Reader</h1>
					 <FileReaderInput as="binary" id="my-file-input"
                         onChange={this.handleChange}>
          	<button>Select a file!</button>
        	</FileReaderInput>
				</div>
		);
	}



}

export default CsvReader;