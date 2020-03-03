import React from "react";
import { connect } from "react-redux";
import { switchQTC, switchQTL, switchQTP, falsifyAll } from "../../../__redux/actions/qtriggerAction";
import { TutorBox, TutorButtonCaps, TutorCont } from "./styled";


const QTogg = ({toggleQC, toggleQP, toggleQL, toggleOff, qc, qp, ql}) => {
  const fireToggNext = (e) => {
    const trg = e.target.id;
    switch(trg) {
      case 'ccn':
        toggleQP();
        break;
      case 'pcn':
        toggleQL();
        break;
      case 'lcn':
        toggleOff();
        break;
      default: break;
    }
  }

  const fireToggPrev = (e) => {
    const trg = e.target.id;
    switch(trg) {
      case 'pcp':
        toggleQC();
        break;
      case 'lcp':
        toggleQP();
        break;
      default: break;
    }
  }

  return (
    <React.Fragment>
      {qc ?
        <TutorBox id="cid">
          <TutorCont>
            <h2>Candle chart</h2>
            <br/>
            <p>Illustrates movements in the price between comparable currencies from Forex or Crypto markets.</p>
            <br/>
            <TutorButtonCaps>
              <button disabled>Prev</button>
              <button id="ccn" onClick={fireToggNext}>Next</button>
            </TutorButtonCaps>
          </TutorCont>
        </TutorBox>
        : qp ?
          <TutorBox id="pid">
            <TutorCont>
              <h2>Pie chart</h2>
              <br/>
              <p>Displays historical buy rates for each company.</p>
              <br/>
              <TutorButtonCaps>
                <button id="pcp" onClick={fireToggPrev}>Prev</button>
                <button id="pcn" onClick={fireToggNext}>Next</button>
              </TutorButtonCaps>
            </TutorCont>
          </TutorBox>
        : ql ? 
          <TutorBox id="lid">
            <TutorCont>
              <h2>Earning surprises - Line chart</h2>
              <br/>
              <p>
                Visualizes earnings surprises from as early as 2000. Earning
                surprise in an unexpected difference between a company's actual
                earnings per share and analysts' expected earnings per share.
                A higher earnings surprise generally means that a company did
                better than expected over the last quarter. Many times,
                a positive earning surprise is followed by a jump in the company's
                share price as soon as the market opens following the announcement.
              </p><br/>
              <TutorButtonCaps>
                <button id="lcp" onClick={fireToggPrev}>Prev</button>
                <button id="lcn" onClick={fireToggNext}>OK</button>
              </TutorButtonCaps>
            </TutorCont>
          </TutorBox>
        : null}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    qc: state.qgtrigger.ctrigger,
    qp: state.qgtrigger.ptrigger,
    ql: state.qgtrigger.ltrigger
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleQC: () => dispatch(switchQTC()),
    toggleQP: () => dispatch(switchQTP()),
    toggleQL: () => dispatch(switchQTL()),
    toggleOff: () => dispatch(falsifyAll())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QTogg);
