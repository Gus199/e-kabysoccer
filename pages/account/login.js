import { FaUser } from 'react-icons/fa'
import { useForm } from 'react-hook-form';
import { signIn, useSession } from 'next-auth/react';
import { getError } from '../../utils/error';
import { ToastContainer, toast } from 'react-toastify'
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css'
import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
// import AuthContext from '@/context/AuthContext'
import styles from '@/styles/AuthForm.module.css'

export default function LoginPage() {
  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

//   const { login, error } = useContext(AuthContext)

//   useEffect(() => error && toast.error(error))
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
const submitHandler = async ({ email, password }) => {
  try {
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });
    if (result.error) {
      toast.error(result.error);
    }
  } catch (err) {
    toast.error(getError(err));
  }
};
  return (
    <Layout title='User Login'>
      <div className={styles.auth}>
        <h1>
          <FaUser /> Log In
        </h1>
        <ToastContainer />
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register('email', {
              required: 'Please enter email',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: 'Please enter valid email',
              },
            })}
            className="w-full"
            id="email"
            autoFocus
          ></input>
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
          </div>

          <div>
             <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register('password', {
              required: 'Please enter password',
              minLength: { value: 6, message: 'password is more than 5 chars' },
            })}
            className="w-full"
            id="password"
            autoFocus
          ></input>
          {errors.password && (
            <div className="text-red-500 ">{errors.password.message}</div>
          )}
          </div>

          <input type='submit' value='Login' className='btn' />
        </form>

        <p>
          Don't have an account? <Link href='/account/register'>Register</Link>
        </p>
      </div>
    </Layout>
  )
}