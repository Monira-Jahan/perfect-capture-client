import { Helmet } from 'react-helmet-async';
import img1 from '../../assets/images/auth.png';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
//import img2 from '../../assets/images/Animated Shape.svg'

const Login = () => {
    const { logIn } = useContext(AuthContext);

        const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        }
    return (
        <>
        <Helmet>
                <title>Perfect Capture | Login</title>
            </Helmet>
        <div className="hero min-h-screen bg-base-200 bg-[url('https://i.ibb.co/wJrQk6x/bg-1.jpg')]">
            <div className="hero-content flex-col md:flex-row-reverse   rounded-xl shadow-2xl bg-gray-600 bg-opacity-70 w-[1100px] mx-12 py-8 mt-14">
                <div className="text-center md:w-1/2 md:text-left">
                    <img className="pl-16" src={img1} alt=""/>
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        
                        <div className="form-control mt-6">
                            <input  className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold " type="submit" value="Login" />
                        </div>
                        <button className="btn btn-outline btn-primary  mx-8 px-4 mt-4"><FaGoogle className="mr-3"/>Login With Google</button>
 
 
                    </form>
                    <p className="pl-4 pb-8 text-center font-semibold"><small>New to Perfect Capture? <Link className='link-primary' to="/signup">Create an account</Link> </small></p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;