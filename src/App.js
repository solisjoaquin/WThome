import React from "react";
import "./style.css";
import Header from "../Components/Header";
import SideContainer from "../Components/SideContainer";
import QuestionContainer from '../Components/QuestionListContainer'

export default function App() {
  return (
    <div>
      <Header />
      <div>
        <SideContainer >
          <QuestionContainer />
        </SideContainer>
        
        <SideContainer />
        <div></div>
      </div>
    </div>
  );
}
