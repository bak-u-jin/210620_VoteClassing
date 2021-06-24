import React, { useEffect, useState } from "react";
import axios from "axios";

import OptionResult from "./OptionResult";

function VoteResult({ title }) {
  const [result, setResult] = useState(<></>);

  async function GetResult() {
    let arrayResult = [];
    let resultSum = 0;
    let optionName = [];
    let mostOption = 0;

    await axios
      .get(`http://localhost:3000/result/${title}`)
      .then((res) => {
        for (let i = 0; res.data[i]; i++) {
          optionName[i] = res.data.options[i];
          arrayResult[i] = res.data[i].length;
          if (arrayResult[i] > mostOption) {
            mostOption = i;
            mostOption = arrayResult[i];
          }
          resultSum += res.data[i].length;
        }
        setResult(
          arrayResult.map((res, index) => {
            let most;
            if (res === mostOption) most = true;
            return (
              <OptionResult
                key={index}
                res={res}
                name={optionName[index]}
                most={most}
              />
            );
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    GetResult();
  }, []);

  return <>{result}</>;
}

export default VoteResult;
