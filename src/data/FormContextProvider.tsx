import React, { useState } from 'react';

import FormContext, { Entry, Checklist } from './FormContext';

const FormContextProvider: React.FC = props => {
  const [entry, setEntry] = useState<Entry>({
    resentful: '',
    selfish: '',
    dishonest: '',
    fearful: '',
    obsessing: '',
    secrets: '',
    harm: '',
    act: '',
  });

  const [checklist, setChecklist] = useState<Checklist>({
    meeting: false,
    meditated: false,
    fellowship: false,
    literature: false,
    pray: false,
    sponsor: false,
    another: false,
    helped: false,
  });

  const saveForm = (name: string, value: string) => {
    setEntry(prevState => ({ ...prevState, [name]: value }));
  };

  const updateChecklist = (name: string, value: boolean) => {
    setChecklist(prevState => ({ ...prevState, [name]: value }));
  };

  const clearForm = () => {};

  return (
    <FormContext.Provider
      value={{ entry, checklist, saveForm, updateChecklist, clearForm }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
