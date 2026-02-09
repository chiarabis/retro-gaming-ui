import type { Preview } from '@storybook/react'
import "../src/theme/global.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Story/>
      </div>
    )
  ],
  parameters: {
    backgrounds: {
      options: {
        light: { name: "Light", value: "#fff" },
        dark: { name: "Dark", value: "#000" },
        pink: { name: "Light Pink", value: "#f0a8de" },
        fuchsia: { name: "Fuchsia", value: "#e60076" },
        yellow: { name: "Yellow", value: "#f8ff2a" },
        cyberBlue: { name: "Cyber Blue", value: "#00ffff" },
        midnightBlue: { name: "Midnight Blue", value: "#0f172b" },
        teal: { name: "Teal", value: "#329685" },
        grey: { name: "Grey", value: "#515969" },
        bordeaux: { name: "Bordeaux", value: "#8b2635" },
        emerald: { name: "Emerald", value: "#12ac38" },
        pastelBlue: { name: "Pastel Blue", value: "#a0d4ff" },
        pastelGreen: { name: "Pastel Green", value: "#b5f5c2" },
        pastelYellow: { name: "Pastel Yellow", value: "#fff09d" },
        pastelViolet: { name: "Pastel Violet", value: "#d8b4fe" },
      },
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
