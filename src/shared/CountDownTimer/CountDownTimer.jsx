import React from "react";
import Countdown from "react-countdown";

export default function CountDownTimer({expieryDate}) {
  return (
    <Countdown
      date={new Date(expieryDate).getTime()}
      zeroPadTime={false}
      renderer={({ days, hours, minutes, seconds }) => (
        <div className="font-bold italic flex gap-2">
          <span>{days}d</span>
          <span>{hours}h</span>
          <span>{minutes}m</span>
          <span>{seconds}s</span>
        </div>
      )}
    />
  );
}
