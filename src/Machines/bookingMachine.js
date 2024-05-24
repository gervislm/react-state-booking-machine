import { createMachine, assign, fromPromise } from "xstate";
import { fetchCountries } from "../Utils/api";

const fillCountries = {
  initial: "loading",
  states: {
    loading: {
      invoke: {
        id: "getCountries",
        src: fromPromise(() => fetchCountries()),
        onDone: {
          target: "success",
          actions: assign({
            countries: ({ event }) => event.output,
          }),
        },
        onError: {
          target: "failure",
          actions: assign({
            error: "Failed request",
          }),
        },
      },
    },
    success: {},
    failure: {
      on: {
        RETRY: { target: "loading" },
      },
    },
  },
};

const bookingMachine = createMachine(
  {
    id: "buy plane tickets",
    initial: "initial",
    context: {
      passengers: [],
      selectedCountry: "",
      countries: [],
      error: "",
    },
    states: {
      initial: {
        on: {
          START: {
            target: "search",
          },
        },
      },

      search: {
        on: {
          CONTINUE: {
            target: "passengers",
            actions: assign({
              selectedCountry: ({ event }) => event.selectedCountry,
            }),
          },
          CANCEL: "initial",
        },
        ...fillCountries,
      },

      passengers: {
        on: {
          DONE: {
            target: "tickets",
            guard: "leastOnePassenger",
          },
          CANCEL: {
            target: "initial",
            actions: "cleanContext",
          },
          ADD: {
            target: "passengers",
            actions: assign(({ context, event }) =>
              context.passengers.push(event.newPassenger)
            ),
          },
        },
      },

      tickets: {
        after: {
          5000: {
            target: "initial",
            actions: "cleanContext",
          },
        },
        on: {
          FINISH: {
            target: "initial",
            actions: "cleanContext",
          },
        },
      },
    },
  },
  {
    actions: {
      cleanContext: assign({
        selectedCountry: ({ context }) => (context.selectedCountry = ""),
        passengers: ({ context }) => (context.passengers = []),
      }),
    },
    guards: {
      leastOnePassenger: ({ context }) => context.passengers.length !== 0,
    },
  }
);

export default bookingMachine;
