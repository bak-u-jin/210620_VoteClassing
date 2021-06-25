import axios from "axios";

export default function PostVote(store) {
  if (
    store.voteId &&
    store.isLogin &&
    store.voteStartTime &&
    store.voteEndTime &&
    store[0] &&
    store[1] &&
    store[2]
  ) {
    PostFunc(store);
  } else {
    if (!store.isLogin) {
      alert("로그인을 해주세요");
      return 0;
    }
    if (!store.voteId) {
      alert("투표주제를 입력해주세요");
      return 0;
    }
    if (!store.voteStartTime) {
      alert("투표 시작시간을 설정해주세요");
      return 0;
    }
    if (!store.voteEndTime) {
      alert("투표 종료시간을 설정해주세요");
      return 0;
    }
    if (!(store[0] && store[1] && store[2])) {
      alert("투표 항목을 3개 이상 설정해주세요");
      return 0;
    }
  }
}

async function PostFunc(store) {
  let options = [];

  for (let i = 0; store[i]; i++) options[i] = store[i];

  await axios
    .post(`http://localhost:3000/vote`, {
      id: store.voteId,
      madeby: store.id,
      startTime: store.voteStartTime,
      endTime: store.voteEndTime,
      options: options,
    })
    .then((res) => {
      alert("투표가 완성되었습니다.");
    })
    .catch((err) => {
      if (err.response.status === 500) alert("이미 만들어진 투표주제 입니다.");
      else console.log(err);
    });

  await axios
    .post(`http://localhost:3000/result`, {
      id: store.voteId,
      madeby: store.id,
      options: options,
    })
    .catch((err) => {
      console.log(err);
    });
}
