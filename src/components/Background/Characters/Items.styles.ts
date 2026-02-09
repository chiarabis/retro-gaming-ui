import styled from "styled-components";

//items
type ItemAttrs = {
  firstColorItem: string;
  secondColorItem: string;
  thirdColorItem: string;
  borderItem: string;
};

export const Item1 = styled.div<ItemAttrs>`
  position: absolute;
  top: 0;
  left: -45px;
  height: 4px;
  width: 4px;

  transform: scale(0.85);

  image-rendering: pixelated;
  image-rendering: crisp-edges;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  will-change: transform;

  pointer-events: none;

  box-shadow: 16px 8px 0 0 ${({borderItem}) => borderItem}, 12px 12px 0 0 ${({borderItem}) => borderItem}, 16px 12px 0 0 ${({ firstColorItem }) => firstColorItem}, 20px 12px 0 0 ${({borderItem}) => borderItem}, 
  12px 16px 0 0 rgba(255, 0, 0, 1), 16px 16px 0 0 ${({ firstColorItem }) => firstColorItem}, 20px 16px 0 0 ${({ firstColorItem }) => firstColorItem}, 24px 16px 0 0 ${({borderItem}) => borderItem}, 
  12px 20px 0 0 ${({borderItem}) => borderItem}, 16px 20px 0 0 rgba(255, 0, 0, 1), 20px 20px 0 0 ${({borderItem}) => borderItem}, 24px 20px 0 0 ${({ firstColorItem }) => firstColorItem}, 
  28px 20px 0 0 ${({borderItem}) => borderItem}, 12px 24px 0 0 rgba(255, 0, 0, 1), 16px 24px 0 0 ${({borderItem}) => borderItem}, 20px 24px 0 0 rgba(255, 0, 0, 1), 
  24px 24px 0 0 ${({borderItem}) => borderItem}, 28px 24px 0 0 ${({ firstColorItem }) => firstColorItem}, 32px 24px 0 0 ${({borderItem}) => borderItem}, 12px 28px 0 0 rgba(255, 0, 0, 1), 
  20px 28px 0 0 rgba(255, 0, 0, 1), 24px 28px 0 0 rgba(255, 0, 0, 1), 28px 28px 0 0 ${({ firstColorItem }) => firstColorItem}, 32px 28px 0 0 ${({ firstColorItem }) => firstColorItem}, 
  36px 28px 0 0 ${({borderItem}) => borderItem}, 20px 32px 0 0 rgba(255, 0, 0, 1), 24px 32px 0 0 ${({borderItem}) => borderItem}, 28px 32px 0 0 ${({ firstColorItem }) => firstColorItem}, 
  32px 32px 0 0 ${({borderItem}) => borderItem}, 36px 32px 0 0 ${({ firstColorItem }) => firstColorItem}, 40px 32px 0 0 ${({borderItem}) => borderItem}, 12px 36px 0 0 rgba(255, 0, 0, 1), 
  28px 36px 0 0 ${({borderItem}) => borderItem}, 32px 36px 0 0 ${({ firstColorItem }) => firstColorItem}, 36px 36px 0 0 ${({borderItem}) => borderItem}, 40px 36px 0 0 ${({ firstColorItem }) => firstColorItem}, 
  44px 36px 0 0 ${({borderItem}) => borderItem}, 32px 40px 0 0 ${({borderItem}) => borderItem}, 36px 40px 0 0 ${({ firstColorItem }) => firstColorItem}, 40px 40px 0 0 ${({borderItem}) => borderItem}, 
  44px 40px 0 0 ${({ firstColorItem }) => firstColorItem}, 48px 40px 0 0 ${({borderItem}) => borderItem}, 52px 40px 0 0 ${({borderItem}) => borderItem}, 56px 40px 0 0 ${({borderItem}) => borderItem}, 
  36px 44px 0 0 ${({borderItem}) => borderItem}, 40px 44px 0 0 ${({ firstColorItem }) => firstColorItem}, 44px 44px 0 0 ${({borderItem}) => borderItem}, 48px 44px 0 0 ${({thirdColorItem}) => thirdColorItem}, 
  52px 44px 0 0 ${({thirdColorItem}) => thirdColorItem}, 56px 44px 0 0 ${({borderItem}) => borderItem}, 40px 48px 0 0 ${({borderItem}) => borderItem}, 44px 48px 0 0 ${({thirdColorItem}) => thirdColorItem}, 
  48px 48px 0 0 ${({thirdColorItem}) => thirdColorItem}, 52px 48px 0 0 ${({thirdColorItem}) => thirdColorItem}, 56px 48px 0 0 ${({borderItem}) => borderItem}, 60px 48px 0 0 ${({borderItem}) => borderItem}, 
  40px 52px 0 0 ${({borderItem}) => borderItem}, 44px 52px 0 0 ${({thirdColorItem}) => thirdColorItem}, 48px 52px 0 0 ${({thirdColorItem}) => thirdColorItem}, 52px 52px 0 0 ${({borderItem}) => borderItem}, 
  56px 52px 0 0 ${({secondColorItem}) => secondColorItem}, 60px 52px 0 0 ${({secondColorItem}) => secondColorItem}, 64px 52px 0 0 ${({borderItem}) => borderItem}, 40px 56px 0 0 ${({borderItem}) => borderItem}, 
  44px 56px 0 0 ${({borderItem}) => borderItem}, 48px 56px 0 0 ${({borderItem}) => borderItem}, 52px 56px 0 0 ${({secondColorItem}) => secondColorItem}, 56px 56px 0 0 ${({secondColorItem}) => secondColorItem}, 
  60px 56px 0 0 ${({secondColorItem}) => secondColorItem}, 64px 56px 0 0 ${({secondColorItem}) => secondColorItem}, 68px 56px 0 0 ${({borderItem}) => borderItem}, 48px 60px 0 0 ${({borderItem}) => borderItem}, 
  52px 60px 0 0 ${({secondColorItem}) => secondColorItem}, 56px 60px 0 0 ${({secondColorItem}) => secondColorItem}, 60px 60px 0 0 ${({secondColorItem}) => secondColorItem}, 64px 60px 0 0 ${({secondColorItem}) => secondColorItem}, 
  68px 60px 0 0 ${({secondColorItem}) => secondColorItem}, 72px 60px 0 0 ${({borderItem}) => borderItem}, 52px 64px 0 0 ${({borderItem}) => borderItem}, 56px 64px 0 0 ${({secondColorItem}) => secondColorItem}, 
  60px 64px 0 0 ${({secondColorItem}) => secondColorItem}, 64px 64px 0 0 ${({secondColorItem}) => secondColorItem}, 68px 64px 0 0 ${({secondColorItem}) => secondColorItem}, 72px 64px 0 0 ${({borderItem}) => borderItem}, 
  56px 68px 0 0 ${({borderItem}) => borderItem}, 60px 68px 0 0 ${({secondColorItem}) => secondColorItem}, 64px 68px 0 0 ${({secondColorItem}) => secondColorItem}, 68px 68px 0 0 ${({borderItem}) => borderItem}, 
  60px 72px 0 0 ${({borderItem}) => borderItem}, 64px 72px 0 0 ${({borderItem}) => borderItem};

  
`;


export const Item2 = styled.div<ItemAttrs>`
  position: absolute;
  top: 10px;
  left: -45px;
  height: 4px;
  width: 4px;

  transform: scale(0.8);

  image-rendering: pixelated;
  image-rendering: crisp-edges;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  will-change: transform;

  pointer-events: none;

  box-shadow: 28px 16px 0 0 ${({borderItem}) => borderItem}, 32px 16px 0 0 ${({borderItem}) => borderItem}, 36px 16px 0 0 ${({borderItem}) => borderItem}, 40px 16px 0 0 ${({borderItem}) => borderItem}, 
  44px 16px 0 0 ${({borderItem}) => borderItem}, 8px 20px 0 0 ${({borderItem}) => borderItem}, 12px 20px 0 0 ${({borderItem}) => borderItem}, 16px 20px 0 0 ${({borderItem}) => borderItem}, 20px 20px 0 0 ${({borderItem}) => borderItem}, 
  24px 20px 0 0 ${({borderItem}) => borderItem}, 28px 20px 0 0 ${({borderItem}) => borderItem}, 32px 20px 0 0 ${({firstColorItem}) => firstColorItem}, 36px 20px 0 0 ${({firstColorItem}) => firstColorItem}, 
  40px 20px 0 0 ${({firstColorItem}) => firstColorItem}, 44px 20px 0 0 ${({firstColorItem}) => firstColorItem}, 48px 20px 0 0 ${({borderItem}) => borderItem}, 52px 20px 0 0 ${({borderItem}) => borderItem}, 
  56px 20px 0 0 ${({borderItem}) => borderItem}, 60px 20px 0 0 ${({borderItem}) => borderItem}, 64px 20px 0 0 ${({borderItem}) => borderItem}, 68px 20px 0 0 ${({borderItem}) => borderItem}, 
  72px 20px 0 0 ${({borderItem}) => borderItem}, 76px 20px 0 0 ${({borderItem}) => borderItem}, 4px 24px 0 0 ${({borderItem}) => borderItem}, 8px 24px 0 0 ${({firstColorItem}) => firstColorItem}, 
 12px 24px 0 0 ${({firstColorItem}) => firstColorItem}, 16px 24px 0 0 ${({firstColorItem}) => firstColorItem}, 20px 24px 0 0 ${({firstColorItem}) => firstColorItem}, 24px 24px 0 0 ${({firstColorItem}) => firstColorItem}, 
  28px 24px 0 0 ${({firstColorItem}) => firstColorItem}, 32px 24px 0 0 ${({firstColorItem}) => firstColorItem}, 36px 24px 0 0 ${({firstColorItem}) => firstColorItem}, 40px 24px 0 0 ${({firstColorItem}) => firstColorItem}, 
  44px 24px 0 0 ${({firstColorItem}) => firstColorItem}, 48px 24px 0 0 ${({borderItem}) => borderItem}, 52px 24px 0 0 ${({secondColorItem}) => secondColorItem}, 56px 24px 0 0 ${({secondColorItem}) => secondColorItem}, 
  60px 24px 0 0 ${({secondColorItem}) => secondColorItem}, 64px 24px 0 0 ${({secondColorItem}) => secondColorItem}, 68px 24px 0 0 ${({borderItem}) => borderItem}, 76px 24px 0 0 ${({borderItem}) => borderItem}, 
  4px 28px 0 0 ${({borderItem}) => borderItem}, 8px 28px 0 0 ${({firstColorItem}) => firstColorItem}, 12px 28px 0 0 ${({firstColorItem}) => firstColorItem}, 16px 28px 0 0 ${({firstColorItem}) => firstColorItem}, 
  20px 28px 0 0 ${({firstColorItem}) => firstColorItem}, 24px 28px 0 0 ${({firstColorItem}) => firstColorItem}, 28px 28px 0 0 ${({firstColorItem}) => firstColorItem}, 32px 28px 0 0 ${({firstColorItem}) => firstColorItem}, 
  36px 28px 0 0 ${({firstColorItem}) => firstColorItem}, 40px 28px 0 0 ${({borderItem}) => borderItem}, 44px 28px 0 0 ${({borderItem}) => borderItem}, 48px 28px 0 0 ${({borderItem}) => borderItem}, 
  52px 28px 0 0 ${({secondColorItem}) => secondColorItem}, 56px 28px 0 0 ${({secondColorItem}) => secondColorItem}, 60px 28px 0 0 ${({secondColorItem}) => secondColorItem}, 64px 28px 0 0 ${({secondColorItem}) => secondColorItem}, 
  68px 28px 0 0 ${({secondColorItem}) => secondColorItem}, 72px 28px 0 0 ${({borderItem}) => borderItem}, 8px 32px 0 0 ${({borderItem}) => borderItem}, 12px 32px 0 0 ${({borderItem}) => borderItem}, 
  16px 32px 0 0 ${({borderItem}) => borderItem}, 20px 32px 0 0 ${({borderItem}) => borderItem}, 24px 32px 0 0 ${({borderItem}) => borderItem}, 28px 32px 0 0 ${({borderItem}) => borderItem}, 
  32px 32px 0 0 ${({firstColorItem}) => firstColorItem}, 36px 32px 0 0 ${({firstColorItem}) => firstColorItem}, 40px 32px 0 0 ${({firstColorItem}) => firstColorItem}, 44px 32px 0 0 ${({firstColorItem}) => firstColorItem}, 
  48px 32px 0 0 ${({borderItem}) => borderItem}, 52px 32px 0 0 ${({secondColorItem}) => secondColorItem}, 56px 32px 0 0 ${({secondColorItem}) => secondColorItem}, 60px 32px 0 0 ${({secondColorItem}) => secondColorItem}, 
  64px 32px 0 0 ${({secondColorItem}) => secondColorItem}, 68px 32px 0 0 ${({secondColorItem}) => secondColorItem}, 72px 32px 0 0 ${({borderItem}) => borderItem}, 28px 36px 0 0 ${({borderItem}) => borderItem}, 
  32px 36px 0 0 ${({borderItem}) => borderItem}, 36px 36px 0 0 ${({borderItem}) => borderItem}, 40px 36px 0 0 ${({borderItem}) => borderItem}, 44px 36px 0 0 ${({borderItem}) => borderItem}, 
  48px 36px 0 0 ${({borderItem}) => borderItem}, 52px 36px 0 0 ${({secondColorItem}) => secondColorItem}, 56px 36px 0 0 ${({secondColorItem}) => secondColorItem}, 60px 36px 0 0 ${({secondColorItem}) => secondColorItem}, 
  64px 36px 0 0 ${({secondColorItem}) => secondColorItem}, 68px 36px 0 0 ${({secondColorItem}) => secondColorItem}, 72px 36px 0 0 ${({borderItem}) => borderItem}, 36px 40px 0 0 ${({borderItem}) => borderItem}, 
  44px 40px 0 0 ${({borderItem}) => borderItem}, 52px 40px 0 0 ${({borderItem}) => borderItem}, 56px 40px 0 0 ${({secondColorItem}) => secondColorItem}, 60px 40px 0 0 ${({secondColorItem}) => secondColorItem}, 
  64px 40px 0 0 ${({secondColorItem}) => secondColorItem}, 68px 40px 0 0 ${({borderItem}) => borderItem}, 36px 44px 0 0 ${({borderItem}) => borderItem}, 52px 44px 0 0 ${({borderItem}) => borderItem}, 
  56px 44px 0 0 ${({secondColorItem}) => secondColorItem}, 60px 44px 0 0 ${({borderItem}) => borderItem}, 64px 44px 0 0 ${({borderItem}) => borderItem}, 68px 44px 0 0 ${({thirdColorItem}) => thirdColorItem}, 
  72px 44px 0 0 ${({borderItem}) => borderItem}, 40px 48px 0 0 ${({borderItem}) => borderItem}, 44px 48px 0 0 ${({borderItem}) => borderItem}, 52px 48px 0 0 ${({borderItem}) => borderItem}, 
  56px 48px 0 0 ${({borderItem}) => borderItem}, 60px 48px 0 0 ${({thirdColorItem}) => thirdColorItem}, 64px 48px 0 0 ${({thirdColorItem}) => thirdColorItem}, 68px 48px 0 0 ${({thirdColorItem}) => thirdColorItem}, 
  72px 48px 0 0 ${({borderItem}) => borderItem}, 48px 52px 0 0 ${({borderItem}) => borderItem}, 52px 52px 0 0 ${({thirdColorItem}) => thirdColorItem}, 56px 52px 0 0 ${({thirdColorItem}) => thirdColorItem}, 
  60px 52px 0 0 ${({thirdColorItem}) => thirdColorItem}, 64px 52px 0 0 ${({thirdColorItem}) => thirdColorItem}, 68px 52px 0 0 ${({thirdColorItem}) => thirdColorItem}, 72px 52px 0 0 ${({borderItem}) => borderItem}, 
  48px 56px 0 0 ${({borderItem}) => borderItem}, 52px 56px 0 0 ${({thirdColorItem}) => thirdColorItem}, 56px 56px 0 0 ${({thirdColorItem}) => thirdColorItem}, 60px 56px 0 0 ${({thirdColorItem}) => thirdColorItem}, 
  64px 56px 0 0 ${({thirdColorItem}) => thirdColorItem}, 68px 56px 0 0 ${({borderItem}) => borderItem}, 44px 60px 0 0 ${({borderItem}) => borderItem}, 48px 60px 0 0 ${({thirdColorItem}) => thirdColorItem}, 
  52px 60px 0 0 ${({thirdColorItem}) => thirdColorItem}, 56px 60px 0 0 ${({thirdColorItem}) => thirdColorItem}, 60px 60px 0 0 ${({thirdColorItem}) => thirdColorItem}, 64px 60px 0 0 ${({thirdColorItem}) => thirdColorItem}, 
  68px 60px 0 0 ${({borderItem}) => borderItem}, 44px 64px 0 0 ${({borderItem}) => borderItem}, 48px 64px 0 0 ${({thirdColorItem}) => thirdColorItem}, 52px 64px 0 0 ${({thirdColorItem}) => thirdColorItem}, 
  56px 64px 0 0 ${({thirdColorItem}) => thirdColorItem}, 60px 64px 0 0 ${({thirdColorItem}) => thirdColorItem}, 64px 64px 0 0 ${({thirdColorItem}) => thirdColorItem}, 68px 64px 0 0 ${({borderItem}) => borderItem}, 
  40px 68px 0 0 ${({borderItem}) => borderItem}, 44px 68px 0 0 ${({thirdColorItem}) => thirdColorItem}, 48px 68px 0 0 ${({thirdColorItem}) => thirdColorItem}, 52px 68px 0 0 ${({thirdColorItem}) => thirdColorItem}, 
  56px 68px 0 0 ${({thirdColorItem}) => thirdColorItem}, 60px 68px 0 0 ${({thirdColorItem}) => thirdColorItem}, 64px 68px 0 0 ${({thirdColorItem}) => thirdColorItem}, 68px 68px 0 0 ${({borderItem}) => borderItem}, 
  40px 72px 0 0 ${({borderItem}) => borderItem}, 44px 72px 0 0 ${({thirdColorItem}) => thirdColorItem}, 48px 72px 0 0 ${({thirdColorItem}) => thirdColorItem}, 52px 72px 0 0 ${({thirdColorItem}) => thirdColorItem}, 
  56px 72px 0 0 ${({thirdColorItem}) => thirdColorItem}, 60px 72px 0 0 ${({thirdColorItem}) => thirdColorItem}, 64px 72px 0 0 ${({thirdColorItem}) => thirdColorItem}, 68px 72px 0 0 ${({borderItem}) => borderItem}, 
  40px 76px 0 0 ${({borderItem}) => borderItem}, 44px 76px 0 0 ${({thirdColorItem}) => thirdColorItem}, 48px 76px 0 0 ${({thirdColorItem}) => thirdColorItem}, 52px 76px 0 0 ${({thirdColorItem}) => thirdColorItem}, 
  56px 76px 0 0 ${({thirdColorItem}) => thirdColorItem}, 60px 76px 0 0 ${({thirdColorItem}) => thirdColorItem}, 64px 76px 0 0 ${({thirdColorItem}) => thirdColorItem}, 68px 76px 0 0 ${({borderItem}) => borderItem}, 
  44px 80px 0 0 ${({borderItem}) => borderItem}, 48px 80px 0 0 ${({borderItem}) => borderItem}, 52px 80px 0 0 ${({borderItem}) => borderItem}, 56px 80px 0 0 ${({borderItem}) => borderItem}, 
  60px 80px 0 0 ${({borderItem}) => borderItem}, 64px 80px 0 0 ${({borderItem}) => borderItem};


`;



export const Item3 = styled.div<ItemAttrs>`
  position: absolute;
  top: 10px;
  left: -45px;
  height: 4px;
  width: 4px;

  transform: scale(0.8);

  image-rendering: pixelated;
  image-rendering: crisp-edges;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  will-change: transform;

  pointer-events: none;

  box-shadow: 32px 4px 0 0 rgba(0, 0, 0, 1), 36px 4px 0 0 rgba(0, 0, 0, 1), 40px 4px 0 0 rgba(0, 0, 0, 1), 44px 4px 0 0 rgba(0, 0, 0, 1), 
  32px 8px 0 0 rgba(0, 0, 0, 1), 36px 8px 0 0 rgba(96, 125, 139, 1), 40px 8px 0 0 rgba(96, 125, 139, 1), 44px 8px 0 0 rgba(96, 125, 139, 1), 
  48px 8px 0 0 rgba(0, 0, 0, 1), 32px 12px 0 0 rgba(0, 0, 0, 1), 36px 12px 0 0 rgba(96, 125, 139, 1), 40px 12px 0 0 rgba(96, 125, 139, 1), 
  44px 12px 0 0 rgba(96, 125, 139, 1), 48px 12px 0 0 rgba(96, 125, 139, 1), 52px 12px 0 0 rgba(0, 0, 0, 1), 16px 16px 0 0 rgba(0, 0, 0, 1), 
  20px 16px 0 0 rgba(0, 0, 0, 1), 32px 16px 0 0 rgba(0, 0, 0, 1), 36px 16px 0 0 rgba(96, 125, 139, 1), 40px 16px 0 0 rgba(96, 125, 139, 1), 
  44px 16px 0 0 rgba(96, 125, 139, 1), 48px 16px 0 0 rgba(96, 125, 139, 1), 52px 16px 0 0 rgba(96, 125, 139, 1), 56px 16px 0 0 rgba(0, 0, 0, 1), 
  16px 20px 0 0 rgba(0, 0, 0, 1), 20px 20px 0 0 rgba(255, 0, 0, 1), 24px 20px 0 0 rgba(0, 0, 0, 1), 32px 20px 0 0 rgba(0, 0, 0, 1), 
  36px 20px 0 0 rgba(96, 125, 139, 1), 40px 20px 0 0 rgba(96, 125, 139, 1), 44px 20px 0 0 rgba(96, 125, 139, 1), 48px 20px 0 0 rgba(96, 125, 139, 1), 
  52px 20px 0 0 rgba(96, 125, 139, 1), 56px 20px 0 0 rgba(96, 125, 139, 1), 60px 20px 0 0 rgba(0, 0, 0, 1), 20px 24px 0 0 rgba(0, 0, 0, 1), 
  24px 24px 0 0 rgba(255, 0, 0, 1), 28px 24px 0 0 rgba(0, 0, 0, 1), 32px 24px 0 0 rgba(0, 0, 0, 1), 36px 24px 0 0 rgba(96, 125, 139, 1), 
  40px 24px 0 0 rgba(96, 125, 139, 1), 44px 24px 0 0 rgba(96, 125, 139, 1), 48px 24px 0 0 rgba(96, 125, 139, 1), 52px 24px 0 0 rgba(96, 125, 139, 1), 
  56px 24px 0 0 rgba(96, 125, 139, 1), 60px 24px 0 0 rgba(0, 0, 0, 1), 24px 28px 0 0 rgba(0, 0, 0, 1), 28px 28px 0 0 rgba(255, 0, 0, 1), 
  32px 28px 0 0 rgba(255, 0, 0, 1), 36px 28px 0 0 rgba(0, 0, 0, 1), 40px 28px 0 0 rgba(0, 0, 0, 1), 44px 28px 0 0 rgba(0, 0, 0, 1), 
  48px 28px 0 0 rgba(0, 0, 0, 1), 52px 28px 0 0 rgba(0, 0, 0, 1), 56px 28px 0 0 rgba(0, 0, 0, 1), 60px 28px 0 0 rgba(0, 0, 0, 1), 
  4px 32px 0 0 rgba(0, 0, 0, 1), 8px 32px 0 0 rgba(0, 0, 0, 1), 12px 32px 0 0 rgba(0, 0, 0, 1), 16px 32px 0 0 rgba(0, 0, 0, 1), 
  20px 32px 0 0 rgba(0, 0, 0, 1), 24px 32px 0 0 rgba(0, 0, 0, 1), 28px 32px 0 0 rgba(255, 0, 0, 1), 32px 32px 0 0 rgba(255, 0, 0, 1), 
  36px 32px 0 0 rgba(0, 0, 0, 1), 4px 36px 0 0 rgba(0, 0, 0, 1), 8px 36px 0 0 rgba(96, 125, 139, 1), 12px 36px 0 0 rgba(96, 125, 139, 1), 
  16px 36px 0 0 rgba(96, 125, 139, 1), 20px 36px 0 0 rgba(96, 125, 139, 1), 24px 36px 0 0 rgba(96, 125, 139, 1), 28px 36px 0 0 rgba(0, 0, 0, 1), 
  32px 36px 0 0 rgba(0, 0, 0, 1), 36px 36px 0 0 rgba(255, 0, 0, 1), 40px 36px 0 0 rgba(0, 0, 0, 1), 4px 40px 0 0 rgba(0, 0, 0, 1), 
  8px 40px 0 0 rgba(96, 125, 139, 1), 12px 40px 0 0 rgba(96, 125, 139, 1), 16px 40px 0 0 rgba(96, 125, 139, 1), 20px 40px 0 0 rgba(96, 125, 139, 1), 
  24px 40px 0 0 rgba(96, 125, 139, 1), 28px 40px 0 0 rgba(0, 0, 0, 1), 36px 40px 0 0 rgba(0, 0, 0, 1), 40px 40px 0 0 rgba(255, 0, 0, 1), 
  44px 40px 0 0 rgba(0, 0, 0, 1), 4px 44px 0 0 rgba(0, 0, 0, 1), 8px 44px 0 0 rgba(96, 125, 139, 1), 12px 44px 0 0 rgba(96, 125, 139, 1), 
  16px 44px 0 0 rgba(96, 125, 139, 1), 20px 44px 0 0 rgba(96, 125, 139, 1), 24px 44px 0 0 rgba(96, 125, 139, 1), 28px 44px 0 0 rgba(0, 0, 0, 1), 
  40px 44px 0 0 rgba(0, 0, 0, 1), 44px 44px 0 0 rgba(255, 0, 0, 1), 48px 44px 0 0 rgba(0, 0, 0, 1), 8px 48px 0 0 rgba(0, 0, 0, 1), 
  12px 48px 0 0 rgba(96, 125, 139, 1), 16px 48px 0 0 rgba(96, 125, 139, 1), 20px 48px 0 0 rgba(96, 125, 139, 1), 24px 48px 0 0 rgba(96, 125, 139, 1), 
  28px 48px 0 0 rgba(0, 0, 0, 1), 44px 48px 0 0 rgba(0, 0, 0, 1), 48px 48px 0 0 rgba(255, 0, 0, 1), 52px 48px 0 0 rgba(0, 0, 0, 1), 
  12px 52px 0 0 rgba(0, 0, 0, 1), 16px 52px 0 0 rgba(96, 125, 139, 1), 20px 52px 0 0 rgba(96, 125, 139, 1), 24px 52px 0 0 rgba(96, 125, 139, 1), 
  28px 52px 0 0 rgba(0, 0, 0, 1), 48px 52px 0 0 rgba(0, 0, 0, 1), 52px 52px 0 0 rgba(255, 0, 0, 1), 56px 52px 0 0 rgba(0, 0, 0, 1), 
  16px 56px 0 0 rgba(0, 0, 0, 1), 20px 56px 0 0 rgba(96, 125, 139, 1), 24px 56px 0 0 rgba(96, 125, 139, 1), 28px 56px 0 0 rgba(0, 0, 0, 1), 
  52px 56px 0 0 rgba(0, 0, 0, 1), 56px 56px 0 0 rgba(255, 0, 0, 1), 60px 56px 0 0 rgba(0, 0, 0, 1), 20px 60px 0 0 rgba(0, 0, 0, 1), 
  24px 60px 0 0 rgba(0, 0, 0, 1), 28px 60px 0 0 rgba(0, 0, 0, 1), 56px 60px 0 0 rgba(0, 0, 0, 1), 60px 60px 0 0 rgba(255, 0, 0, 1), 
  64px 60px 0 0 rgba(0, 0, 0, 1), 68px 60px 0 0 rgba(0, 0, 0, 1), 60px 64px 0 0 rgba(0, 0, 0, 1), 64px 64px 0 0 rgba(0, 0, 0, 1), 
  68px 64px 0 0 rgba(0, 150, 136, 1), 72px 64px 0 0 rgba(0, 0, 0, 1), 60px 68px 0 0 rgba(0, 0, 0, 1), 64px 68px 0 0 rgba(0, 150, 136, 1), 
  68px 68px 0 0 rgba(0, 150, 136, 1), 72px 68px 0 0 rgba(0, 150, 136, 1), 76px 68px 0 0 rgba(0, 0, 0, 1), 64px 72px 0 0 rgba(0, 0, 0, 1), 
  68px 72px 0 0 rgba(0, 150, 136, 1), 72px 72px 0 0 rgba(0, 150, 136, 1), 76px 72px 0 0 rgba(0, 0, 0, 1), 68px 76px 0 0 rgba(0, 0, 0, 1), 
  72px 76px 0 0 rgba(0, 0, 0, 1);

`;