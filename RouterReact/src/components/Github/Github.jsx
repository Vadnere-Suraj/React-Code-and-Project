import { useLoaderData } from "react-router-dom";

function Github() {

    const data = useLoaderData();
    // const [data,setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Vadnere-Suraj').then(response => response.json()).then(response => setData(response))
    // }, []);


  return (
    <div className='py-10 flex items-center justify-center'>
        <div className='bg-gray-600 rounded-3xl px-10 py-8 w-2/3 flex text-white'>
        
        <img src={data.avatar_url} className='border border-2 rounded-full' width={300}/> 
        <h2 className='text-3xl text-right w-full'>Github Followers : {data.followers}</h2>
        </div>
    </div>
  )
}

export default Github

export const gitHubInfoLoader = async () => {
     const response = await fetch('https://api.github.com/users/Vadnere-Suraj');
     return response.json();
}
