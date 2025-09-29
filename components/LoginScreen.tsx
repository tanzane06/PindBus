
import React from 'react';
import { PindBusLogo, GoogleIcon, FacebookIcon } from './Icons';

interface LoginScreenProps {
  onLogin: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  return (
    <div className="h-screen w-full max-w-md mx-auto flex flex-col font-sans bg-[#e0f7ff] p-8">
      <div className="flex-grow flex flex-col items-center justify-center pt-10">
        <PindBusLogo className="w-48 h-auto" />
      </div>

      <div className="w-full flex-shrink-0 space-y-4 pb-4">
        <input
          type="email"
          placeholder="Email"
          aria-label="Email"
          className="w-full bg-[#004d7a] text-white placeholder-gray-300 py-3 px-4 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-sky-400"
        />
        <input
          type="password"
          placeholder="Password"
          aria-label="Password"
          className="w-full bg-[#004d7a] text-white placeholder-gray-300 py-3 px-4 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-sky-400"
        />
        <div className="text-right -mt-2">
            <a href="#" className="text-sm text-[#004d7a] hover:underline">
                forgot password?
            </a>
        </div>

        <button
          onClick={onLogin}
          className="w-full bg-gradient-to-r from-sky-400 to-blue-500 text-white font-bold py-3 px-4 rounded-full shadow-lg text-lg transform transition-transform hover:scale-105"
        >
          Login
        </button>

        <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-500 text-sm">SIH</span>
            <div className="flex-grow border-t border-gray-400"></div>
        </div>

        <div className="flex justify-center space-x-6">
            <button onClick={onLogin} aria-label="Login with Google" className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center transform transition-transform hover:scale-110 p-2">
                <GoogleIcon className="w-full h-full" />
            </button>
             <button onClick={onLogin} aria-label="Login with Facebook" className="w-14 h-14 bg-[#1877F2] text-white rounded-full shadow-md flex items-center justify-center transform transition-transform hover:scale-110 p-3">
                <FacebookIcon className="w-full h-full" />
            </button>
        </div>
      </div>
    </div>
  );
};