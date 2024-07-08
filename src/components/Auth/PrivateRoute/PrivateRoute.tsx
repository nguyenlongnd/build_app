import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }: any) => {
  const token = true
  return <div>{token ? children : <Navigate to='/login' replace={true} />}</div>
}

export default PrivateRoute
