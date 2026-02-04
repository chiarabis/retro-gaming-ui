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
        pink: { name: "Light Pink", value: "#f3d2ebff" },
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
