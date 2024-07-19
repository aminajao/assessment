import { Button } from '@/components/ui/Button';
import { Input } from '@/components/Input';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

type Values = {
  username: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState<Values>({
    username: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (values.username && values.password !== '') {
      navigate('/dashboard');
    }
  };

  return (
    <div className="grid grid-cols-2 w-full h-full">
      <div className="col-span-1 bg-red-300 flex ml-40 flex-col mt-[5rem] justify-start items-center">
        <div className="mb-20">
          <img src="/assets/logo.svg" alt="Logo" />
        </div>
        <div>
          <h1 className="font-normal mb-1 text-4xl text-center text-[#304050]">
            Welcome Back
          </h1>
          <p className="text-base text-center text-[#304050]">
            Sign into your susio account to get the fun started!
          </p>
          <form className="mt-8" onSubmit={handleSubmit}>
            <div className="mb-4">
              <Input
                className="w-[25rem]"
                type="text"
                placeholder="Enter username"
                label="Username"
                name="username"
                required
                onChange={handleChange}
              />
            </div>
            <div className="mb-8">
              <Input
                type="password"
                required
                placeholder="Enter password"
                label="Password"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center items-center">
              <Button
                onClick={() => handleSubmit}
                text="Login"
                disabled={false}
                loading={false}
                type="submit"
                className="px-14 py-2.5 text-[#fff]"
              />
            </div>
          </form>
          <div className="flex justify-center mt-6">
            <Button
              className="text-[12px]"
              variant="outline"
              text="Forget password"
            />
          </div>
          <div className="text-center mt-10">
            <p className="text-[#304050] text-[16px]">
              You don’t have an account yet? <br />
              Please <span className="text-blue-500 font-bold">reach out </span>
              to us!
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="mt-10"
          src="/assets/woman_flying.svg"
          alt="Woman flying"
        />
      </div>
    </div>
  );
};

export default Login;
