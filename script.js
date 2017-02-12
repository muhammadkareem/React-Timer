////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////Timer////////////////////////////////////////////////
/* timer Component create check id condition to my props timeLeft value
is null/0 return createElement div or h1 element pass value of time left + props timeLeft
plus add id condition my props value is 0 to play audio alert inside add audio src  */
var  Timer = React.createClass(  {

  render: function() {

    
    if (this.props.timeLeft == null || this.props.timeLeft == 0) 
    return React.createElement('div', null);
    return React.createElement(
      'h1',
      { className: 'timeLeft' },
     'Time left: ',
      this.props.timeLeft
    );
    if (this.props.timeLeft == 0) {
      document.getElementById('finish-time').play();
    }
  }
})



///////////////////////////////////////////////////////////////////////////////////////////

/*componet btn obj return  startTimer props set to props.time is a props value
render obj func return createElement button className use bootstrape changes css styling
2 class name add onClick atributes pass func () return => obj{this.props.startimer (props.time)}
value of btn is number of time + seconds exp: (5 seconds) 5 is props time value pass 
*/
var Button = React.createClass( {

  startTimer: function(event) {
    return this.props.startTimer(this.props.time);
  },

  render:function() {
    return React.createElement(
      'button',
      {
        type: 'button',
        className: 'btn-default btn',
        onClick: () => {
          this.props.startTimer(this.props.time);
        } },
      this.props.time,
      ' seconds'
    );
  }
})


////////////////////////////////////////////////////////////////////////////////////////////
/*this a class componet TimerWrapper */
class TimerWrapper extends React.Component {
    /*constructor work as getintialprops initial state is timeLeft:null
    timer value: null you understod same initial props return props 
      */
  constructor(props) {
    super(props);
    this.state = { timeLeft: null, timer: null };
    this.startTimer = this.startTimer.bind(this);
  }
  /*startTimer is modern obj (timeLeft) is a peramenter of func */
  startTimer(timeLeft) {
/*clearInterval is timer value*/
    clearInterval(this.state.timer);
    let timer = setInterval(() => {
    /*' Inside of setInterval var assign timeLeft decreament - 
    if timeLeft is 0 time is invisble or setState update new timeLeft' 1000 (1 sec back)*/
      var timeLeft = this.state.timeLeft - 1;
      if (timeLeft == 0) clearInterval(timer);
      this.setState({ timeLeft: timeLeft });
    }, 1000);

   /* After setInterval update timeLeft value  or timer update new timer value '*/
    return this.setState({ timeLeft: timeLeft, timer: timer });
  }
  /*render cycle use createElement div className pass use css or other
  div value h2 element h2 value "Timer" main heading */
  render() {
    return React.createElement(
      'div',
      { className: 'row-fluid' },
      React.createElement(
        'h2',
        null,
        'Timer'
      ),
      /*create one more div className pass css/bootstrape use 3 button element 
      pass obj to props name or value  startimer (pass.component (setInterval or clearInterval)
      triger   */
      React.createElement(
        'div',
        { className: 'btn-group', role: 'group' },
        React.createElement(Button, { time: '10', startTimer: this.startTimer }),
        React.createElement(Button, { time: '20', startTimer: this.startTimer }),
        React.createElement(Button, { time: '30', startTimer: this.startTimer })
      ),
      /*createElement timer is a 1st Component top props name or value is 
      timeLeft new value to setState*/
      React.createElement(Timer, { timeLeft: this.state.timeLeft }),
      /*audio is element id pass or src audio file add time finish audio alert
      set if cond timer value is 0 alert sound*/
      React.createElement('audio', { id: 'end-of-time', src: 'flute_c_long_01.wav', preload: 'auto' })
    );
  }
}

/*TimerWrapper is main programing component display DOMrender document id path*/
ReactDOM.render(
    React.createElement(TimerWrapper, null),
     document.getElementById('timer'));