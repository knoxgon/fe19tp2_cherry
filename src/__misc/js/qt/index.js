import React from "react";
import { connect } from "react-redux";
import { switchQTC, switchQTL, switchQTP, falsifyAll, HQToggler } from "../../../__redux/actions/qtriggerAction";
import { TutorBox, TutorButtonCaps, TutorCont, TutorClose } from "./styled";
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const QTogg = ({toggleQC, toggleQP, toggleQL, toggleOff, qc, qp, ql, hqSwitch}) => {
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

  const onClickCloser = (e) => {
    hqSwitch()
  }

  return (
    <React.Fragment>
      {qc ?
        <TutorBox id="cid">
          <TutorCont>
            <TutorClose icon={faTimes} onClick={onClickCloser}/>
            <h2>Candle chart</h2>
            <p>This graph illustrates the movement of the realtime exchange rate for any comparable pair of digital currency (e.g., Zcash (ZEC) to BTC (Bitcoin)) and physical currency (e.g., USD/SEK) from chosen broker/platform.</p>
            <TutorButtonCaps>
              <button disabled style={{'visibility': 'hidden'}}>Prev</button>
              <button id="ccn" onClick={fireToggNext}>Next</button>
            </TutorButtonCaps>
          </TutorCont>
        </TutorBox>
        : qp ?
          <TutorBox id="pid">
            <TutorCont>
              <TutorClose icon={faTimes} onClick={onClickCloser}/>
              <h2>Pie chart</h2>
              <p>Displays historical buy/sell/hold rates for the selected company within the selected month period.
                 Buy/sell/hold are the investment analyst’s recommendations. Higher ratings indicates whether the
                 stock should be bought/sold/held during the month.</p>
              <TutorButtonCaps>
                <button id="pcp" onClick={fireToggPrev}>Prev</button>
                <button id="pcn" onClick={fireToggNext}>Next</button>
              </TutorButtonCaps>
            </TutorCont>
          </TutorBox>
        : ql ? 
          <TutorBox id="lid">
            <TutorCont>
              <TutorClose icon={faTimes} onClick={onClickCloser}/>
              <h2>Earning surprises - Line chart</h2>
              <p>
                Visualizes earnings surprises from as early as 2000. Earning
                surprise in an unexpected difference between a company's actual
                earnings per share and analysts' expected earnings per share.
                A higher earnings surprise generally means that a company did
                better than expected over the last quarter. Many times,
                a positive earning surprise is followed by a jump in the company's
                share price as soon as the market opens following the announcement.
              </p>
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
    toggleOff: () => dispatch(falsifyAll()),
    hqSwitch: () => dispatch(HQToggler())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QTogg);
