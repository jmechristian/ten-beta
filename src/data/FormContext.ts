import { createContext } from 'react';

export interface Entry {
  resentful?: string;
  selfish?: string;
  dishonest?: string;
  fearful?: string;
  obsessing?: string;
  secrets?: string;
  harm?: string;
  act?: string;
}

export interface Checklist {
  meeting: boolean;
  meditated: boolean;
  fellowship: boolean;
  literature: boolean;
  pray: boolean;
  sponsor: boolean;
  another: boolean;
  helped: boolean;
}

export interface Context {
  entry: Entry;
  checklist: Checklist;
  saveForm: (name: string, value: string) => void;
  updateChecklist: (switchName: string, value: boolean) => void;
  clearForm: () => void;
  setUsers: (user: any) => void;
  user: object;
}

const FormContext = createContext<Context>({
  entry: {
    resentful: '',
    selfish: '',
    dishonest: '',
    fearful: '',
    obsessing: '',
    secrets: '',
    harm: '',
    act: '',
  },
  checklist: {
    meeting: false,
    meditated: false,
    fellowship: false,
    literature: false,
    pray: false,
    sponsor: false,
    another: false,
    helped: false,
  },
  saveForm: () => {},
  updateChecklist: () => {},
  clearForm: () => {},
  setUsers: () => {},
  user: {},
});

export default FormContext;
