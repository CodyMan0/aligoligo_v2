import type { Meta, StoryObj } from '@storybook/react';
import { OverlayProvider } from '@toss/use-overlay';

import { Nav } from './Nav';

const meta: Meta<typeof Nav> = {
  title: 'components/sections/Nav',
  component: Nav,
};

export default meta;

type Story = StoryObj<typeof Nav>;

export const Basic: Story = {
  args: {
    user: {
      name: '이주영',
    },
  },
  decorators: [
    (Story) => (
      <OverlayProvider>
        <div className="relative w-[390px] bg-main-primaryHover">
          <Story />
          <div className="absolute top-[70px] left-[20px] text-sm text-gray-30">
            잘 보이기 위해 bg-gradient5 설정한 것이며, 실제로는 없습니다.
          </div>
        </div>
      </OverlayProvider>
    ),
  ],
};

export const LoggedOut: Story = {
  decorators: [
    (Story) => (
      <OverlayProvider>
        <div className="relative w-[390px] bg-main-primaryHover">
          <Story />
          <div className="absolute top-[70px] left-[20px] text-sm text-gray-30">
            잘 보이기 위해 bg-gradient5 설정한 것이며, 실제로는 없습니다.
          </div>
        </div>
      </OverlayProvider>
    ),
  ],
};
