import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    // here we can add different state we need on the mailSlice : example the display of the message box (form)
    sendMessageIsOpen: false,
    // here we need the selected mail
    selectedMail: null,
  },
  reducers: {
    openSendMessage: (state) => {
    state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    // Action for the selected mail
    SelectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
  },
});

export const { SelectMail, openSendMessage, closeSendMessage } = mailSlice.actions;


// Don't forget to give variable for Select data
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectOpenMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer;
