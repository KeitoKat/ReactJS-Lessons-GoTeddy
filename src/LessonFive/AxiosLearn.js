import React, { useEffect } from "react";
import { Fragment } from "react";
import Axios from "axios";
//we use Axios to connect & contact with the back-end to fetch or send info from/to the database

const AxiosLearn = () => {
  useEffect(() => {
    const fetchData = () => {
      Axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      ).then((response) => console.log(response.data));
    };
    fetchData();
  }, []);

  return <Fragment> hi</Fragment>;
};

export default AxiosLearn;
