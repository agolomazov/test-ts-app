import React from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { changeStatus, resetStatus, } from '../statusbar';
import { StatusItem, ActiveStatus, Status } from '../statusbar/types';
import { State } from '../../store/rootReducer';

const Home = (props: RouteComponentProps<any> & StateProps & DispatchProps) => {
  const { stepsList, activeStep, changeStatus, resetStatus } = props;
  const setActive = (step: StatusItem) => {
    changeStatus({
      label: step.label,
      status: Status.InProcess
    });
  }

  return (
    <div>
      Home
    {stepsList.map(step => (
        <div key={step.label}>
          {activeStep && activeStep.label === step.label ? (
            <b><u>{step.title}</u></b>
          ) : (step.title)
          }
        </div>
      ))}
      <div>
        <hr />
        {stepsList.map(step => (
          <React.Fragment key={step.label}>
            <button

              onClick={() => setActive(step)}
              disabled={!!(activeStep && activeStep.label === step.label)}
            >
              {step.title}
            </button>
            {' '}
          </React.Fragment>
        ))}
      </div>
      <button onClick={resetStatus}>Сброс статуса</button>
    </div>
  );
}


interface StateProps {
  stepsList: Array<StatusItem>
  activeStep: ActiveStatus | null
};

interface DispatchProps {
  resetStatus: () => void
  changeStatus: (activeStatus: ActiveStatus) => void
}

const mapStateToProps = (state: State): StateProps => ({
  stepsList: state.statusbar.stepsList,
  activeStep: state.statusbar.activeStatus,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  resetStatus: () => dispatch(resetStatus()),
  changeStatus: (activeStatus: ActiveStatus) => dispatch(changeStatus(activeStatus))
});

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(Home);
