import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }: any) => {
  //this line just to test git when checkout from a branch that different master branch
  //this line code after checkout
  const token = true
  return <div>{token ? children : <Navigate to='/login' replace={true} />}</div>
}

export default PrivateRoute
