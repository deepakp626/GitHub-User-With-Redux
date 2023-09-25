import './App.css';
import { useDispatch ,useSelector } from 'react-redux';
import { getAllData} from "./features/gitUserSlice"

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) =>{
      console.log("statr =>",state.app)
      return state.app;
  })
  if(data.loading) {
    return <h1>{"Loading ..."}</h1>
  }
  if(data.error != null) {
    return <h1>{data.error}</h1>
  }
  return (
      <>
       <h1>hii Deepak</h1>
       <button onClick={()=> dispatch(getAllData())} > Git Github Users</button>
       {
          data.users.map((ele)=>(
            <li key={ele.id}>{ele.login}</li>
          ))
       }
       </>
  );
}

export default App;
