import PropTypes from "prop-types";
import Countdown from "react-countdown";

export default function CountDownTimer({ expieryDate }) {
  return (
    <Countdown
      date={new Date(expieryDate).getTime()}
      zeroPadTime={false}
      renderer={({ days, hours, minutes, seconds, completed }) =>
        completed ? (
          <div className="font-bold italic">Ended</div>
        ) : (
          <div className="font-bold italic flex gap-2">
            <span>{days}d</span>
            <span>{hours}h</span>
            <span>{minutes}m</span>
            <span>{seconds}s</span>
          </div>
        )
      }
    />
  );
}

CountDownTimer.propTypes = {
  expieryDate: PropTypes.string,
};
