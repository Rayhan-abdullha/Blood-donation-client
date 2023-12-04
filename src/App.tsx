import {
  RouterProvider,
} from "react-router-dom";
import router from "./routes/routes";
import { useEffect } from 'react';
import { useAppDispatch } from "./redux/Hook";
import { decodedToken } from "./lib/decodedToken";
import { addUser } from "./redux/features/users/userSlice";
import { Toaster } from "react-hot-toast";

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const storedToken = localStorage.getItem('blood-auth-token');
    if (storedToken) {
      const user = decodedToken(storedToken)
      console.log(user)
      dispatch(addUser(user))
    }
  }, [dispatch])

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}

export default App