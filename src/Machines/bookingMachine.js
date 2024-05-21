import { createMachine, assign } from "xstate";

const bookingMachine = createMachine({
  id: "buy plane tickets",
  initial: "initial",
  context: {
    passengers: [],
    selectedCountry: "",
  },
  states: {
    initial: {
      entry: assign({ selectedCountry: "", passengers: [] }),
      on: {
        START: {
          target: "search",
        },
      },
    },
    search: {
      on: {
        CANCEL: "initial",
        CONTINUE: {
          target: "passengers",
          actions: assign({
            selectedCountry: ({ event }) => event.selectedCountry,
          }),
        },
      },
    },
    passengers: {
      on: {
        DONE: "tickets",
        CANCEL: "initial",
        ADD: {
          target: "passengers",
          actions: assign(({ context, event }) =>
            context.passengers.push(event.newPassenger)
          ),
        },
      },
    },
    tickets: {
      on: {
        FINISH: "initial",
      },
    },
  },
});

export default bookingMachine;
