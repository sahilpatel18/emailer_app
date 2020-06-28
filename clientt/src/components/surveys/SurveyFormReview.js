import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import * as actions from '../../actions'

const SurveyFormReview = ({ onCancel, formValues, submitSurvey}) => {
  const reviewFields = formFields.map((field) => {
    return (
      <div key={field.name}>
        <label>{field.label}</label>
        <div>{formValues[field.name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button className='orange white-text btn-flat' onClick={onCancel}>
        Back
      </button>
      <button
      onClick={() => submitSurvey(formValues)}
      className='teal white-text btn-flat right'>
        Send Survey
        <i className='material-icons right'>email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values,
  };
}

export default connect(mapStateToProps,actions)(SurveyFormReview);
