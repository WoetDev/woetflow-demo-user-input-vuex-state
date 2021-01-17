import {
  TInput,
  TTextarea,
  TButton,
  TInputGroup,
  TCard
} from "vue-tailwind/dist/components";

export const settings = {
  "t-input": {
    component: TInput,
    props: {
      fixedClasses:
        "w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",
      classes:
        "text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500",
      variants: {
        danger: "border-red-300 bg-red-50 placeholder-red-200 text-red-900",
        success:
          "border-green-300 bg-green-50 placeholder-gray-400 text-green-900"
      }
    }
  },
  "t-textarea": {
    component: TTextarea,
    props: {
      fixedClasses:
        "block w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",
      classes:
        "text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500 ",
      variants: {
        danger: "border-red-300 bg-red-50 placeholder-red-200 text-red-900",
        success:
          "border-green-300 bg-green-50 placeholder-gray-400 text-green-900"
      }
    }
  },
  "t-button": {
    component: TButton,
    props: {
      fixedClasses:
        "block px-4 py-2 transition duration-100 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",
      classes:
        "text-white bg-r-500 border border-transparent shadow-sm rounded hover:bg-blue-600",
      variants: {
        secondary:
          "text-gray-800 bg-white border border-gray-300 shadow-sm hover:text-gray-600",
        error:
          "text-white bg-red-500 border border-transparent rounded shadow-sm hover:bg-red-600",
        success:
          "text-white bg-green-500 border border-transparent rounded shadow-sm hover:bg-green-600",
        link: "text-blue-500 underline hover:text-blue-600"
      }
    }
  },
  "t-input-group": {
    component: TInputGroup,
    props: {
      fixedClasses: {
        wrapper: "text-center block px-5",
        label: "block",
        body: "",
        feedback: " text-sm text-sm",
        description: "text-gray-400 text-sm"
      },
      classes: {
        wrapper: "",
        label: "",
        body: "",
        feedback: "text-gray-400",
        description: "text-gray-400"
      },
      variants: {
        danger: {
          label: "text-red-500",
          feedback: "text-red-500"
        },
        success: {
          label: "text-green-500",
          feedback: "text-green-500"
        }
      }
    }
  },
  "t-card": {
    component: TCard,
    props: {
      fixedClasses: {
        wrapper: "border rounded shadow-md text-center w-2/3 m-auto",
        body: "p-3",
        header: "border-b p-3 rounded-t text-lg	",
        footer: "border-t p-3 rounded-b"
      },
      classes: {
        wrapper: "bg-white border-gray-100",
        body: "",
        header: "border-gray-100",
        footer: "border-gray-100"
      },
      variants: {
        danger: {
          wrapper: "bg-red-50 text-red-700 border-red-200",
          header: "border-red-200 text-red-700",
          footer: "border-red-200 text-red-700"
        }
      }
    }
  }
};
