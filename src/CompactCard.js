import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';

class CompactCard extends Component  {

  // state
  state = {
    theme: 'light'
  }
  lightTheme = () => {
    // Logic
    this.setState({
      theme: 'light'
    })
  }

  darkTheme = () => {
    // Logic
    this.setState({
      theme: 'dark'
    })
  }

  render() {
    return (
      <div  className={`card3 ${this.state.theme}`}>
        <div className="card3-header">
          <p className="title-dark">POS FAILURE RATE</p>
          <div className="card3-icon">
          <Link to={'/full'}>
          <svg  className="icon icon-light" width="15" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.75.300018H1.25c-.331521 0-.649463.131696-.883883.366117C.131696.900555 0 1.2185 0 1.55002V14.05c0 .3315.131696.6495.366117.8839.23442.2344.552362.3661.883883.3661h12.5c.3315 0 .6495-.1317.8839-.3661.2344-.2344.3661-.5524.3661-.8839V1.55002c0-.33152-.1317-.649465-.3661-.883885-.2344-.234421-.5524-.366117-.8839-.366117zm-.3125 6.875002h-8.125c-.08288 0-.16237-.03293-.22097-.09153C5.03292 7.02488 5 6.9454 5 6.86252v-5c0-.08288.03292-.16237.09153-.22097.0586-.05861.13809-.09153.22097-.09153h8.125c.0829 0 .1624.03292.221.09153.0586.0586.0915.13809.0915.22097v5c0 .08288-.0329.16236-.0915.22097-.0586.0586-.1381.09153-.221.09153zm-11.875-5.625h1.875c.08288 0 .16237.03292.22097.09153.05861.0586.09153.13809.09153.22097V13.7375c0 .0829-.03292.1624-.09153.221-.0586.0586-.13809.0915-.22097.0915h-1.875c-.08288 0-.16237-.0329-.22097-.0915-.05861-.0586-.09153-.1381-.09153-.221V1.86252c0-.08288.03292-.16237.09153-.22097.0586-.05861.13809-.09153.22097-.09153zM5 13.7375V8.73752c0-.08288.03292-.16237.09153-.22097.0586-.05861.13809-.09153.22097-.09153h8.125c.0829 0 .1624.03292.221.09153.0586.0586.0915.13809.0915.22097v4.99998c0 .0829-.0329.1624-.0915.221-.0586.0586-.1381.0915-.221.0915h-8.125c-.08288 0-.16237-.0329-.22097-.0915C5.03292 13.8999 5 13.8204 5 13.7375z" fill="#666"/>
          </svg>
          </Link>
          <Link to={'/full'}>
          <svg className="icon icon-dark" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.75 0H1.25C.918479 0 .600537.131696.366117.366117.131696.600537 0 .918479 0 1.25v12.5c0 .3315.131696.6495.366117.8839C.600537 14.8683.918479 15 1.25 15h12.5c.3315 0 .6495-.1317.8839-.3661.2344-.2344.3661-.5524.3661-.8839V1.25c0-.331521-.1317-.649463-.3661-.883883C14.3995.131696 14.0815 0 13.75 0zm-.3125 6.875h-8.125c-.08288 0-.16237-.03292-.22097-.09153C5.03292 6.72487 5 6.64538 5 6.5625v-5c0-.08288.03292-.16237.09153-.22097.0586-.05861.13809-.09153.22097-.09153h8.125c.0829 0 .1624.03292.221.09153.0586.0586.0915.13809.0915.22097v5c0 .08288-.0329.16237-.0915.22097-.0586.05861-.1381.09153-.221.09153zM1.5625 1.25h1.875c.08288 0 .16237.03292.22097.09153.05861.0586.09153.13809.09153.22097v11.875c0 .0829-.03292.1624-.09153.221-.0586.0586-.13809.0915-.22097.0915h-1.875c-.08288 0-.16237-.0329-.22097-.0915-.05861-.0586-.09153-.1381-.09153-.221V1.5625c0-.08288.03292-.16237.09153-.22097.0586-.05861.13809-.09153.22097-.09153zM5 13.4375v-5c0-.08288.03292-.16237.09153-.22097.0586-.05861.13809-.09153.22097-.09153h8.125c.0829 0 .1624.03292.221.09153.0586.0586.0915.13809.0915.22097v5c0 .0829-.0329.1624-.0915.221-.0586.0586-.1381.0915-.221.0915h-8.125c-.08288 0-.16237-.0329-.22097-.0915C5.03292 13.5999 5 13.5204 5 13.4375z" fill="#fff"/>
          </svg>
          </Link>
          <svg onClick={this.darkTheme} className="icon-light" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9262 10.1125c-1.143-.0002-2.27007-.26838-3.29074-.78291-1.02067-.51453-1.90653-1.26111-2.58654-2.17986-.68-.91875-1.1352-1.98409-1.32909-3.11055-.19389-1.12646-.12107-2.28268.21263-3.375911C3.82483 1.17381 2.86255 1.95339 2.1333 2.93099 1.40405 3.90859.931012 5.05312.757279 6.26032.583547 7.46751.714645 8.69899 1.13863 9.84256c.42398 1.14354 1.12738 2.16284 2.04609 2.96504.91872.8021 2.02355 1.3617 3.21384 1.6276 1.19029.2659 2.4282.2297 3.60094-.1052 1.1727-.3349 2.243-.9579 3.1134-1.8124.8703-.8544 1.513-1.913 1.8696-3.07933-.9577.44407-2.0007.67413-3.0563.67423z" fill="#666"/>
          </svg>
          <svg onClick={this.lightTheme} className="icon-dark" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00073 12.375c1.86397 0 3.37497-1.511 3.37497-3.375 0-1.86396-1.511-3.375-3.37497-3.375-1.86396 0-3.375 1.51104-3.375 3.375 0 1.864 1.51104 3.375 3.375 3.375z" fill="#fff"/>
            <path d="M9.00073 1.125v2.25m0 11.25v2.25M16.8757 9h-2.25M3.37573 9h-2.25M14.5688 3.432L12.978 5.02275M5.02276 12.978l-1.59075 1.5907m11.13679 0L12.978 12.978M5.02276 5.02275L3.43201 3.432" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          </div>
        </div>

        <div className="card3-content">
          <div className="card3-content__1">
            <span className="rate1">12%</span>
            <svg className="arrow" width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 8L9.33013 0.5H0.669873L5 8Z" fill="#28B759"/>
            </svg>
            <span className="rate2">14%</span>
          </div>
          <div className="card3-content__2">
            <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="12" width="120" height="4" rx="2" fill="#F2F2F2"/>
            <rect y="12" width="60" height="4" rx="2" fill="#35BB63"/>
            <g filter="url(#filter0_d)">
            <path d="M58 17C59.6569 17 61 15.6569 61 14C61 12.3431 59.6569 11 58 11C56.3431 11 55 12.3431 55 14C55 15.6569 56.3431 17 58 17Z" fill="white"/>
            <path d="M58 18.5C60.4853 18.5 62.5 16.4853 62.5 14C62.5 11.5147 60.4853 9.5 58 9.5C55.5147 9.5 53.5 11.5147 53.5 14C53.5 16.4853 55.5147 18.5 58 18.5Z" stroke="#35BB63" strokeWidth="3"/>
            </g>
            <defs>
            <filter id="filter0_d" x="42" y="0" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.207843 0 0 0 0 0.733333 0 0 0 0 0.388235 0 0 0 0.5 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            </defs>
            </svg>
          </div>
        </div>

        <div className="card3-content__3">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 0C4.01109 0 3.0444 0.293245 2.22215 0.842652C1.3999 1.39206 0.759043 2.17295 0.380605 3.08658C0.00216643 4.00021 -0.0968502 5.00555 0.0960758 5.97545C0.289002 6.94536 0.765206 7.83627 1.46447 8.53553C2.16373 9.23479 3.05464 9.711 4.02455 9.90392C4.99445 10.0969 5.99979 9.99783 6.91342 9.6194C7.82705 9.24096 8.60794 8.60009 9.15735 7.77785C9.70676 6.9556 10 5.9889 10 5C9.99853 3.67437 9.47127 2.40345 8.53391 1.46609C7.59655 0.528727 6.32563 0.00147047 5 0ZM6.15222 7.66222H3.93C3.81949 7.66222 3.71351 7.61832 3.63537 7.54018C3.55723 7.46204 3.51333 7.35606 3.51333 7.24555C3.51333 7.13505 3.55723 7.02907 3.63537 6.95093C3.71351 6.87279 3.81949 6.82889 3.93 6.82889H4.48556C4.52239 6.82889 4.55772 6.81425 4.58377 6.78821C4.60981 6.76216 4.62445 6.72683 4.62445 6.69V4.46778C4.62445 4.43094 4.60981 4.39561 4.58377 4.36957C4.55772 4.34352 4.52239 4.32889 4.48556 4.32889H3.93C3.81949 4.32889 3.71351 4.28499 3.63537 4.20685C3.55723 4.12871 3.51333 4.02273 3.51333 3.91222C3.51333 3.80171 3.55723 3.69573 3.63537 3.61759C3.71351 3.53945 3.81949 3.49555 3.93 3.49555H4.48556C4.74332 3.49585 4.99043 3.59837 5.1727 3.78064C5.35496 3.9629 5.45748 4.21002 5.45778 4.46778V6.69C5.45778 6.72683 5.47241 6.76216 5.49846 6.78821C5.5245 6.81425 5.55983 6.82889 5.59667 6.82889H6.15222C6.26273 6.82889 6.36871 6.87279 6.44685 6.95093C6.52499 7.02907 6.56889 7.13505 6.56889 7.24555C6.56889 7.35606 6.52499 7.46204 6.44685 7.54018C6.36871 7.61832 6.26273 7.66222 6.15222 7.66222ZM5.04111 1.41222C5.17846 1.41222 5.31272 1.45295 5.42692 1.52926C5.54113 1.60556 5.63013 1.71402 5.68269 1.84091C5.73526 1.96781 5.74901 2.10744 5.72221 2.24215C5.69542 2.37685 5.62928 2.50059 5.53216 2.59771C5.43504 2.69483 5.3113 2.76097 5.17659 2.78777C5.04188 2.81456 4.90225 2.80081 4.77536 2.74825C4.64847 2.69569 4.54001 2.60668 4.4637 2.49248C4.3874 2.37828 4.34667 2.24401 4.34667 2.10667C4.34667 1.92249 4.41983 1.74585 4.55007 1.61562C4.6803 1.48539 4.85693 1.41222 5.04111 1.41222Z" fill="#9BA1B5"/>
          </svg>
          <span className="quote">Source <strong>NIBSS</strong></span>
        </div>

      </div>
    )
  }

}


export default CompactCard;
