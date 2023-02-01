import React from "react";

type IProps = {
  active: boolean,
  showNext: boolean
}

const SquareWithCircle: React.FC<IProps> = ({active, showNext}) => {
  return (
    <div className="flex flex-col items-center">
    {/* whatisoptinly section Icon */}
      <svg className={` transform ${active ? 'text-primary scale-105': 'text-light'}`} width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_dd_22_275)">
        <path d="M17 17.0019C17 14.2394 19.2394 12 22.0019 12H65.9981C68.7606 12 71 14.2394 71 17.0019V60.9981C71 63.7606 68.7606 66 65.9981 66H22.0019C19.2394 66 17 63.7606 17 60.9981V17.0019Z" fill="#FCFCFF"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M44 54.0057C52.2874 54.0057 59.0057 47.2874 59.0057 39C59.0057 30.7126 52.2874 23.9943 44 23.9943C35.7126 23.9943 28.9943 30.7126 28.9943 39C28.9943 47.2874 35.7126 54.0057 44 54.0057ZM43.9999 49.5039C49.8011 49.5039 54.5039 44.8011 54.5039 38.9999C54.5039 33.1987 49.8011 28.4959 43.9999 28.4959C38.1987 28.4959 33.4959 33.1987 33.4959 38.9999C33.4959 44.8011 38.1987 49.5039 43.9999 49.5039Z" fill="currentColor"/>
        </g>
        <defs>
        <filter id="filter0_dd_22_275" x="0.32696" y="0.328872" width="87.3461" height="87.3461" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.833652"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_275"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="5.00191"/>
        <feGaussianBlur stdDeviation="8.33652"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
        <feBlend mode="normal" in2="effect1_dropShadow_22_275" result="effect2_dropShadow_22_275"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_22_275" result="shape"/>
        </filter>
        </defs>
      </svg>

      {showNext && 
        <svg className={`transform ${active ? 'text-primary scale-105': 'text-light'}`} width="5" height="31" viewBox="0 0 5 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.00952148" y="0.0267944" width="4" height="30" rx="2" fill="currentColor"/>
        </svg>
      }

    </div>
  );
};

export default SquareWithCircle;
