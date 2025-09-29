import React from 'react';

export const HomeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
);

export const RouteIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.25 4.5a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5zM5.75 20.5a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5zM18.25 6h-6.5a4.002 4.002 0 00-3.834 2.657l-1.6 4.8A4.002 4.002 0 005.75 17H11v2H5.75a2.5 2.5 0 01-2.434-2.043l1.6-4.8A5.503 5.503 0 0110.25 9h8a1.5 1.5 0 010 3h-5.5v2h5.5a3 3 0 000-6z" />
    </svg>
);

export const UserIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

export const SmsIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 11H6V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z" />
  </svg>
);


export const LocationMarkerIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24" >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5-2.5z" />
    </svg>
);

export const SignalIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 6.253v11.494A2.25 2.25 0 0117.75 20H6.25A2.25 2.25 0 014 17.747V6.253A2.25 2.25 0 016.25 4h11.5A2.25 2.25 0 0120 6.253zM8 16h8" />
  </svg>
);

export const SearchIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

export const BusIcon = ({ className, ...props }: { className?: string, [key: string]: any }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor" {...props}>
        <path d="M18.9 2.1c-1.3-1.3-3.1-2.1-5-2.1H10c-1.9 0-3.7.8-5,2.1C3.7,3.4,3,5.2,3,7.1v10.8c0,1.9.8,3.7,2.1,5C6.4,24.2,8.2,25,10.1,25h3.8c1.9,0,3.7-.8,5-2.1,1.3-1.3,2.1-3.1,2.1-5V7.1c0-1.9-.8-3.7-2.1-5zM9,22c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2S10.1,22,9,22zm6,0c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2S16.1,22,15,22zM19,13H5V7c0-1.1.4-2.1,1.2-2.8.7-.7,1.7-1.2,2.8-1.2h4c1.1,0,2.1.4,2.8,1.2.7.7,1.2,1.7,1.2,2.8v6z" />
    </svg>
);

export const StarIcon = ({ className, filled }: { className?: string, filled: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
);

export const PunjabMapIcon = ({ className, theme }: { className?: string; theme: 'light' | 'dark' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
        {/* Base Map Shape */}
        <path d="M45.6,11.3c-2.7,0-5.3,0.1-8,0.2c-2.1,0.1-4.2,0.1-6.3,0.3c-2.3,0.2-4.5,0.4-6.8,0.7c-2.3,0.3-4.6,0.8-6.9,1.3 c-2.2,0.5-4.4,1.1-6.5,1.9c-1,0.4-2,0.8-3,1.3c-0.6,0.3-1.2,0.6-1.8,1c-0.5,0.3-1,0.7-1.4,1.1c-0.3,0.3-0.5,0.5-0.7,0.8 c-0.1,0.1-0.2,0.3-0.2,0.4c-0.1,0.2-0.2,0.4-0.2,0.6c-0.1,0.4-0.1,0.8-0.1,1.2c0,0.6,0,1.2,0.1,1.8c0.1,0.7,0.1,1.4,0.2,2.1 c0.1,0.7,0.2,1.4,0.4,2.1c0.2,0.7,0.3,1.4,0.5,2.1c0.2,0.7,0.4,1.5,0.7,2.2c0.3,0.8,0.6,1.5,0.9,2.3c0.3,0.8,0.7,1.6,1.1,2.4 c0.2,0.4,0.4,0.8,0.6,1.2c0.2,0.4,0.5,0.9,0.7,1.3c0.3,0.5,0.5,0.9,0.8,1.4c0.1,0.2,0.3,0.5,0.4,0.7c0.1,0.2,0.3,0.5,0.4,0.7 c0.1,0.2,0.3,0.5,0.4,0.7c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.1,0.1,0.2,0.2,0.3 c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.2,0.3,0.3,0.4c0.1,0.1,0.2,0.3,0.3,0.4 c0.1,0.1,0.2,0.3,0.3,0.4c0.2,0.3,0.4,0.6,0.7,0.9c0.3,0.3,0.6,0.7,0.9,1c0.1,0.1,0.2,0.3,0.3,0.4c0.1,0.1,0.2,0.3,0.3,0.4 c0.1,0.1,0.2,0.3,0.3,0.4c0.2,0.3,0.4,0.6,0.7,0.9c0.5,0.6,1.1,1.2,1.7,1.7c0.6,0.5,1.2,1.1,1.9,1.6c0.7,0.5,1.4,1,2.1,1.5 c0.7,0.5,1.4,0.9,2.2,1.4c0.8,0.5,1.5,0.9,2.3,1.3c0.8,0.4,1.6,0.8,2.5,1.1c1.8,0.7,3.6,1.2,5.5,1.7c1.9,0.5,3.9,0.8,5.8,1 c1.9,0.2,3.9,0.3,5.8,0.3c2,0,3.9-0.1,5.9-0.2c2-0.2,4-0.4,5.9-0.7c2-0.3,3.9-0.7,5.8-1.2c1.9-0.5,3.8-1.1,5.7-1.8 c1.8-0.7,3.6-1.5,5.4-2.4c1.8-0.9,3.5-2,5.2-3.2c1.4-1,2.8-2.1,4.1-3.3c0.7-0.6,1.3-1.3,2-2c0.6-0.6,1.2-1.3,1.8-2 c0.6-0.7,1.1-1.4,1.6-2.1c0.5-0.7,1-1.5,1.4-2.3c0.4-0.8,0.8-1.6,1.2-2.4c0.4-0.8,0.7-1.7,1-2.5c0.3-0.8,0.6-1.6,0.8-2.5 c0.2-0.8,0.4-1.7,0.6-2.5c0.2-0.9,0.3-1.7,0.4-2.6c0.1-0.9,0.2-1.8,0.2-2.7c0-0.9,0-1.8-0.1-2.7c-0.1-0.9-0.2-1.8-0.3-2.7 c-0.2-0.9-0.3-1.8-0.5-2.6c-0.2-0.9-0.5-1.8-0.7-2.6c-0.3-0.9-0.5-1.7-0.8-2.6c-0.3-0.8-0.7-1.6-1-2.4c-0.2-0.5-0.4-0.9-0.6-1.4 c-0.2-0.5-0.5-1-0.7-1.4c-0.3-0.5-0.6-1-0.9-1.5c-0.3-0.5-0.7-0.9-1-1.4c-0.4-0.5-0.8-0.9-1.2-1.3c-0.4-0.4-0.9-0.8-1.3-1.2 c-0.5-0.4-0.9-0.8-1.4-1.1c-0.5-0.3-1-0.7-1.6-1c-0.6-0.3-1.2-0.6-1.8-0.8c-0.6-0.2-1.2-0.5-1.8-0.7c-0.7-0.2-1.3-0.4-2-0.6 c-0.7-0.2-1.4-0.4-2.1-0.6c-0.7-0.2-1.5-0.4-2.2-0.5c-0.8-0.1-1.5-0.3-2.3-0.4c-0.8-0.1-1.6-0.2-2.4-0.3 c-0.8-0.1-1.7-0.2-2.5-0.3c-0.8-0.1-1.7-0.1-2.5-0.2c-0.9-0.1-1.7-0.1-2.6-0.1C50,11.3,47.8,11.3,45.6,11.3z" 
            fill={theme === 'dark' ? '#44403c' : '#f5f5f4'}
            stroke={theme === 'dark' ? '#57534e' : '#d6d3d1'}
            strokeWidth="0.5" />
        {/* Rivers */}
        <path d="M 55 45 Q 45 55, 38 60 T 25 78" stroke={theme === 'dark' ? '#0ea5e9' : '#bae6fd'} strokeWidth="0.8" fill="none" />
        <path d="M 82 38 Q 70 35, 55 45 T 40 42" stroke={theme === 'dark' ? '#0ea5e9' : '#bae6fd'} strokeWidth="0.6" fill="none" />
        {/* Major Roads */}
        <path d="M 82 38 L 75 60 L 60 64 L 48 65 L 32 80 L 12 68" stroke={theme === 'dark' ? '#64748b' : '#e7e5e4'} strokeWidth="0.7" fill="none" />
        <path d="M 55 45 L 48 65" stroke={theme === 'dark' ? '#64748b' : '#e7e5e4'} strokeWidth="0.5" fill="none" />
        <path d="M 82 38 L 55 45 L 30 40" stroke={theme === 'dark' ? '#64748b' : '#e7e5e4'} strokeWidth="0.5" fill="none" />
    </svg>
);

export const BellIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

export const MoonIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);


export const GlobeAltIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" />
    </svg>
);

export const WifiOffIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m-12.728 0a9 9 0 010-12.728m12.728 0L5.636 18.364M5.636 5.636l12.728 12.728" />
    </svg>
);

export const PindBusLogo = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 170 150" className={className} xmlns="http://www.w3.org/2000/svg">
        <style>
          {`.pindbus-text { font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; fill: #3d80a4; text-anchor: middle; font-weight: bold; }`}
        </style>
        <g transform="translate(5, -5)">
            <path d="M54.5,100.5 C28.8,103.1 12.3,83.5 19.3,59.3 C26.3,35.1 53.8,22.8 80.5,19.9 C76.7,30.3 66.8,47.1 55.2,58.6 C45.2,70.6 48.3,88.5 54.5,100.5Z" fill="#54b7e2" />
            <g transform="translate(15, 0) rotate(-5 100 60)">
                <path d="M63.1,84.1 L132.5,77.7 L132.5,82.7 L63.1,89.1Z" fill="#3c8ab0" />
                <path d="M60,85 L135,78 L148,45 C130,35 90,32 70,42Z" fill="#54b7e2" />
                <path d="M130,50 L146,46 L141,68 L128,70Z" fill="#d1eefc" />
                <path d="M78,50 L122,48 L122,66 L77,68Z" fill="#3c8ab0" />
                <path d="M92,49 L91.5,67" stroke="#54b7e2" strokeWidth="1.5" />
                <path d="M106,48.5 L105.5,66.5" stroke="#54b7e2" strokeWidth="1.5" />
                <circle cx="75" cy="86" r="8" fill="#3c8ab0" />
                <circle cx="76" cy="86" r="3.5" fill="#d1eefc" />
                <circle cx="125" cy="80" r="8" fill="#3c8ab0" />
                <circle cx="126" cy="80" r="3.5" fill="#d1eefc" />
                <path d="M148,68 C145,70 142,70 140,68 L144,64Z" fill="#d1eefc" />
                <path d="M142,75 C137,76.5 132,76.5 128,75" stroke="#3c8ab0" strokeWidth="2" fill="none" strokeLinecap="round" />
            </g>
        </g>
        <text x="85" y="118" className="pindbus-text" fontSize="28">PINDBUS</text>
        <text x="85" y="142" className="pindbus-text" fontSize="22">ਪਿੰਡਬਸ</text>
    </svg>
);


export const GoogleIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
    </svg>
);

export const FacebookIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V21.878A10.003 10.003 0 0022 12z" />
    </svg>
);


export const BusSimpleIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 4H6C3.79 4 2 5.79 2 8v5c0 1.65 1.35 3 3 3h1v3h2v-3h6v3h2v-3h1c1.65 0 3-1.35 3-3V8c0-2.21-1.79-4-4-4zm-2.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM18 7H6V6h12v1z"/>
    </svg>
);

export const SwapVerticalIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"/>
    </svg>
);