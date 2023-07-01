import React from "react";
import { useNavigate } from "react-router-dom";
import Color from "../HOC/Color";
import longden from "../../assets/images/longden.png";
import "./Home.scss";
import { connect } from "react-redux";
import { ADD_USERS } from "./HomeTypes";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "../../store/reducers/rootReducer.JS";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Hello Việt Nam</h1>
      <br />

      <button onClick={() => navigate("/Home")}>To about</button>
      <button onClick={() => navigate("/todo")}>Go to Report</button>
      <button onClick={() => navigate("/about")}>Go back</button>
      <div>
        <img className="den" src={longden} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    ADD_USERS: () => dispatch(ADD_USERS()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
