import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';
import { useAuth } from '../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const onSubmit = async (data) => {
    try {
      const res = await login(data.email, data.password);
      loginUser(res);
      navigate('/dashboard');
    } catch (err) {
      toast.error("Invalid credentials", {
        position: "top-right",
        autoClose: 3000,
      });
      setError('root', { message: 'Invalid credentials' });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex min-h-screen">

        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-24">
          <div className="max-w-md mx-auto w-full">
            <h2 className="text-2xl font-semibold mb-6">Welcome back</h2>

            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} >
              <div>
                <label className="block mb-1 text-sm font-medium">Email</label>
                <input {...register('email', { required: true })}
                  type="email"
                  placeholder="name@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">Password</label>
                <input  {...register('password', { required: true })}
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2 border border-gray-300 bg-gray-50" />
                <label htmlFor="remember" className="text-sm font-medium text-gray-500">Remember me</label>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
              >
                Sign in
              </button>
            </form>

            <p className="mt-6 text-sm font-normal text-center text-gray-500">© 2024 twentwenty</p>
          </div>
        </div>


        <div className="hidden md:flex w-1/2 bg-blue-600 text-white items-center justify-start p-10">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4">ticktock</h2>
            <p className="text-md font-normal text-gray-200 leading-relaxed">
              Introducing ticktock, our cutting-edge timesheet web application designed to revolutionize how you manage employee work hours.
              With ticktock, you can effortlessly track and monitor employee attendance and productivity from anywhere, anytime, using any internet-connected device.
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

