import { Modal } from 'bootstrap';
import File01 from './component/File01'
// import Practice from './components/practice';
// import * as ReactDOMClient from 'react-dom/client';
// import Model from './components/Model';
// import Delete from './components/delete'
export default function App() {
  const post = [  {id:1,name:"Raj"},
                  {id:2,name:"Dev"}
     ] ;
  return (   
     <>
     <File01 post={post}/>
     {/* <Practice post={post}/> */}
     {/* <Delete/> */}
     </>
    )
}




// import File01 from './components/File01'

// export default function App() {
//   const post = [  {id:1,title:"Raj"},
//            {id:2,title:"Dev"}
//      ] ;
//   return (   
//      <>
//      {/* <File01 id={41} title={"Raj"} /> */}
//      <File01 post={post}/>
//      </>
//     )
// }
