import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import OptionResult from "./OptionResult";

function VoteResult({ title }) {
  const [result, setResult] = useState(<></>);

  async function GetResult() {
    let arrayResult = [];
    let resultSum = 0;
    let optionName = [];

    await axios
      .get(`http://localhost:3000/result/${title}`)
      .then((res) => {
        console.log("value", res.data);
        for (let i = 0; res.data[i]; i++) {
          optionName[i] = res.data.options[i];
          arrayResult[i] = res.data[i].length;
          resultSum += res.data[i].length;
        }
        setResult(
          arrayResult.map((res, index) => {
            console.log("res", res);
            return (
              <OptionResult key={index} res={res} name={optionName[index]} />
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

function mapStateToProps(state) {
  return { store: state };
}

function mapDispatchToProps(dispatch) {
  return {
    ChooseOption: (option) => dispatch(chooseOption(option)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteResult);
