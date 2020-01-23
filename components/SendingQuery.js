const SendingQuery = (props) => {
  const ellipse = React.useRef();
  const tick = React.useRef();
  const text = React.useRef();

  React.useEffect(() => {
    setTimeout(() => {
      ellipse.current.classList.add('stopEllipse');
      tick.current.classList.add('showTick');
      text.current.classList.add('showText');
    }, 2000);
  }, [])

  return(
    <div className="sendingQuery">

      <svg ref={ellipse} className="sendingQuery-ellipse" viewBox="0 0 244 244">
        <defs>
          <linearGradient id="sendingGradient" x1="33.68" y1="33.68" x2="206.22" y2="206.22" gradientUnits="userSpaceOnUse">
            <stop offset="0.15" stopColor={props.color} stopOpacity="0"/>
            <stop offset="0.25" stopColor={props.color} stopOpacity="0.22"/>
            <stop offset="0.38" stopColor={props.color} stopOpacity="0.45"/>
            <stop offset="0.51" stopColor={props.color} stopOpacity="0.65"/>
            <stop offset="0.64" stopColor={props.color} stopOpacity="0.8"/>
            <stop offset="0.76" stopColor={props.color} stopOpacity="0.91"/>
            <stop offset="0.88" stopColor={props.color} stopOpacity="0.98"/>
            <stop offset="1" stopColor={props.color}/>
          </linearGradient>
        </defs>
        <path fill="url(#sendingGradient)" d="M122,0A122,122,0,1,0,244,122,122,122,0,0,0,122,0Zm0,236.5A114.5,114.5,0,1,1,236.5,122,114.5,114.5,0,0,1,122,236.5Z"/>
      </svg>

      <svg ref={tick} className="sendingQuery-tick" viewBox="0 0 138.35 99.15">
        <path fill={props.color} d="M.85,42.5c2.41,1.55,4.74,3.17,7,4.84s4.57,3.34,6.79,5.08c4.47,3.45,8.82,7,13.09,10.66s8.45,7.38,12.57,11.18S48.42,82,52.27,86.07h-8.7c7.75-7.25,15.81-14.19,23.5-21.5S82.54,50,90.37,42.87l11.71-10.79,11.76-10.74Q125.62,10.61,137.5,0l.85.85Q127.73,12.73,117,24.51L106.27,36.27,95.48,48C88.31,55.81,81,63.51,73.78,71.28S59.53,87,52.27,94.77l-4.09,4.38-4.61-4.38c-4.06-3.85-8-7.81-11.81-11.93s-7.54-8.29-11.18-12.57S13.37,61.65,9.92,57.18C8.18,55,6.5,52.68,4.84,50.39s-3.29-4.63-4.84-7Z"/>
      </svg>

      <p ref={text} className="sendingQuery-message" >{props.message}</p>

      <style jsx>{`
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .sendingQuery {
          width: 200px;
          position: relative;
        }
        .sendingQuery-ellipse{
          transition: .5s all;
          animation: rotate 1s linear infinite;
        }
        .sendingQuery-tick {
          position: absolute;
          transition: .5s all;
          width: 0;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .sendingQuery-message {
          text-align: center;
          position: absolute;
          text-transform: uppercase;
          letter-spacing: 1.6px;
          left: 0;
          right: 0;
          opacity: 0;
          transition: .5s all;
          bottom: -60%;
        }
        .stopEllipse {
          opacity: 0;
          transition: .5s all;
        }
        .showTick {
          transition: .5s all ease-out;
          width: 100px;
        }
        .showText{
          transition: .5s all;
          opacity: 1;
          bottom: -50%;
        }
      `}</style>

    </div>
  )
}

export default SendingQuery;