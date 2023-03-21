import firebase from './Firebase';
import {getDatabase,ref,push,onValue,child,update,remove} from 'firebase/database';
const App=()=>{   
    const handleClick=()=>{      
        /*
        const db=getDatabase();
        const r=ref(db,"students");
        push(r,{roll:1001,name:'rohit'});
        push(r,{roll:1002,name:'sohit'});
        push(r,{roll:1003,name:'mohit'});
        push(r,{roll:1004,name:'deepak'});
        push(r,{roll:1005,name:'ajeet'});
        console.log("done");
        */


        /*
        const db=getDatabase();
        const r=ref(db,"students");
        onValue(r,(snaphot)=>{
          const data=snaphot.val();
          //console.log(data);
          let row;
          for(let key in data)
          {
            //console.log(key," : ",data[key]);
            row=data[key];
            //console.log(row);
            console.log("Roll : ",row.roll);
            console.log("Name : ",row.name);
            console.log("-----------------");
          }
        });

        */


        /*
        const db=getDatabase();
        const r=ref(db,"students");
        update(child(r,"-NKbCcdw842HT4uR27F0"),{name:'kapil',job:'gamer'});
        console.log("updated");
        */


        const db=getDatabase();
        const r=ref(db,"students");
        remove(child(r,"-NKbCcdw842HT4uR27F0"));
        console.log("deleted");
        

    }
    return(
        <>
            <h1>React App</h1>
            <input type="button" value="Click HERE" onClick={handleClick} />
        </>
    );
}
export default App;