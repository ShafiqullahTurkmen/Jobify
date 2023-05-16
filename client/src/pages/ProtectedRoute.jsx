import { useAppContext } from '../context/appContext'
import { Navigate } from 'react-router-dom'
import Loading from '../components/Loading';
export default function ProtectedRoute({children}) {
  const { user, userLoading } = useAppContext();

  if (userLoading) return <Loading />

  if (!user) {
    return <Navigate to='/landing'/> 
  }
  return children
}
