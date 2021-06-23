export default function TimeCompare(startTime, endTime) {
  const now = new Date();
  const startDate = new Date(
    startTime[0],
    startTime[1],
    startTime[2],
    startTime[3],
    startTime[4]
  );
  const endDate = new Date(
    endTime[0],
    endTime[1],
    endTime[2],
    endTime[3],
    endTime[4]
  );

  if (now < startDate) return "yet";
  else if (now > endDate) return "late";
  else return "ok";
}
