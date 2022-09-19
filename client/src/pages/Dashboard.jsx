import { useEffect } from 'react'

export default function Dashboard() {

  const fetchData = async () => {
    try {
      
      const response = await fetch("/api/v1");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchData()
  }, []) 

  return (
    <div>Dashboard page bla</div>
  )
}
