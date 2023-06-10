import { Helmet } from "react-helmet-async";
import img1 from '../../assets/images/auth.png';
import { Link } from 'react-router-dom';


const SignUp = () => {
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 bg-[url('https://i.ibb.co/wJrQk6x/bg-1.jpg')]">
            <div className="hero-content flex-col md:flex-row-reverse   rounded-xl shadow-2xl bg-gray-600 bg-opacity-70 w-[1100px] mx-12 py-8 mt-8 mb-14">
                <div className="text-center md:w-1/2 md:text-left">
                    <img className="pl-16" src={img1} alt=""/>
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100 my-12">
                    <form className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo" className="input input-bordered" />
                        </div>
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
                    </form>
                    <p className="pl-4 pb-3 font-bold text-center text-orange-700"><small>Already Registered? Go to <Link to="/login">Login</Link> </small></p>
                    <p className="pl-2 pb-3 font-normal text-center text-black"><small>or sign up with </small></p>
                </div>
            </div>
        </div>
        </>
    );
};

export default SignUp;