import { connect } from "react-redux";

function SetToday(year, month, date) {
  const today = new Date();
  if (
    today.getFullYear() === year &&
    today.getMonth() + 1 === month &&
    today.getDate() == date
  )
    return "오늘";
  else if (today.getDate() + 1 == date) return "내일";
  else return `${year}.${month}.${date}`;
}

function ChangeAmPm(hour) {
  if (hour >= 12) return `오후`;
  else return `오전`;
}

function SetAmPmHour(time) {
  if (time >= 12) time -= 12;
  return time;
}

function FillZero(time) {
  if (time < 10) return `0${time}`;
  else return time;
}

function fillText(time) {
  return `${SetToday(time[0], time[1] + 1, time[2])} ${ChangeAmPm(
    time[3]
  )} ${FillZero(SetAmPmHour(time[3]))}:${FillZero(time[4])}`;
}

function TimeText({ store, isStart }) {
  let text = "";

  if (isStart) {
    if (store.voteStartTime) text = fillText(store.voteStartTime);
    else text = "시작시간";
  } else {
    if (store.voteEndTime) text = fillText(store.voteEndTime);
    else text = "종료시간";
  }

  return text;
}

function mapStateToProps(state) {
  return { store: state };
}

export default connect(mapStateToProps, null)(TimeText);
