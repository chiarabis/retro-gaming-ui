import styled from 'styled-components';


type BarAttrs = {
    barColor: string;
    border: string;
}

export const Bar = styled.div<BarAttrs>`
position: absolute;
height: 4px;
width: 4px;

image-rendering: pixelated;
image-rendering: crisp-edges;

backface-visibility: hidden;
transform-style: preserve-3d;
will-change: transform;
pointer-events: none;

animation: connection 4s infinite;
-webkit-animation: connection 4s infinite;
-moz-animation: connection 4s infinite;
-o-animation: connection 4s infinite;

@keyframes connection {
    0%, 11.1%{
        box-shadow: 8px 4px 0 0 ${({border}) => border}, 12px 4px 0 0 ${({border}) => border}, 16px 4px 0 0 ${({border}) => border}, 20px 4px 0 0 ${({border}) => border}, 
        24px 4px 0 0 ${({border}) => border}, 28px 4px 0 0 ${({border}) => border}, 32px 4px 0 0 ${({border}) => border}, 36px 4px 0 0 ${({border}) => border}, 
        40px 4px 0 0 ${({border}) => border}, 44px 4px 0 0 ${({border}) => border}, 48px 4px 0 0 ${({border}) => border}, 52px 4px 0 0 ${({border}) => border}, 
        56px 4px 0 0 ${({border}) => border}, 60px 4px 0 0 ${({border}) => border}, 64px 4px 0 0 ${({border}) => border}, 68px 4px 0 0 ${({border}) => border}, 
        72px 4px 0 0 ${({border}) => border}, 76px 4px 0 0 ${({border}) => border}, 80px 4px 0 0 ${({border}) => border}, 84px 4px 0 0 ${({border}) => border}, 
        88px 4px 0 0 ${({border}) => border}, 92px 4px 0 0 ${({border}) => border}, 96px 4px 0 0 ${({border}) => border}, 100px 4px 0 0 ${({border}) => border}, 
        104px 4px 0 0 ${({border}) => border}, 4px 8px 0 0 ${({border}) => border}, 108px 8px 0 0 ${({border}) => border}, 4px 12px 0 0 ${({border}) => border}, 
        108px 12px 0 0 ${({border}) => border}, 4px 16px 0 0 ${({border}) => border}, 108px 16px 0 0 ${({border}) => border}, 4px 20px 0 0 ${({border}) => border}, 
        108px 20px 0 0 ${({border}) => border}, 8px 24px 0 0 ${({border}) => border}, 12px 24px 0 0 ${({border}) => border}, 16px 24px 0 0 ${({border}) => border}, 
        20px 24px 0 0 ${({border}) => border}, 24px 24px 0 0 ${({border}) => border}, 28px 24px 0 0 ${({border}) => border}, 32px 24px 0 0 ${({border}) => border}, 
        36px 24px 0 0 ${({border}) => border}, 40px 24px 0 0 ${({border}) => border}, 44px 24px 0 0 ${({border}) => border}, 48px 24px 0 0 ${({border}) => border}, 
        52px 24px 0 0 ${({border}) => border}, 56px 24px 0 0 ${({border}) => border}, 60px 24px 0 0 ${({border}) => border}, 64px 24px 0 0 ${({border}) => border}, 
        68px 24px 0 0 ${({border}) => border}, 72px 24px 0 0 ${({border}) => border}, 76px 24px 0 0 ${({border}) => border}, 80px 24px 0 0 ${({border}) => border}, 
        84px 24px 0 0 ${({border}) => border}, 88px 24px 0 0 ${({border}) => border}, 92px 24px 0 0 ${({border}) => border}, 96px 24px 0 0 ${({border}) => border}, 
        100px 24px 0 0 ${({border}) => border}, 104px 24px 0 0 ${({border}) => border};
    }
    11.11%, 22.2%{
        box-shadow: 8px 4px 0 0 ${({border}) => border}, 12px 4px 0 0 ${({border}) => border}, 16px 4px 0 0 ${({border}) => border}, 20px 4px 0 0 ${({border}) => border}, 
        24px 4px 0 0 ${({border}) => border}, 28px 4px 0 0 ${({border}) => border}, 32px 4px 0 0 ${({border}) => border}, 36px 4px 0 0 ${({border}) => border}, 
        40px 4px 0 0 ${({border}) => border}, 44px 4px 0 0 ${({border}) => border}, 48px 4px 0 0 ${({border}) => border}, 52px 4px 0 0 ${({border}) => border}, 
        56px 4px 0 0 ${({border}) => border}, 60px 4px 0 0 ${({border}) => border}, 64px 4px 0 0 ${({border}) => border}, 68px 4px 0 0 ${({border}) => border}, 
        72px 4px 0 0 ${({border}) => border}, 76px 4px 0 0 ${({border}) => border}, 80px 4px 0 0 ${({border}) => border}, 84px 4px 0 0 ${({border}) => border}, 
        88px 4px 0 0 ${({border}) => border}, 92px 4px 0 0 ${({border}) => border}, 96px 4px 0 0 ${({border}) => border}, 100px 4px 0 0 ${({border}) => border}, 
        104px 4px 0 0 ${({border}) => border}, 4px 8px 0 0 ${({border}) => border}, 108px 8px 0 0 ${({border}) => border}, 4px 12px 0 0 ${({border}) => border}, 
        12px 12px 0 0 ${({barColor}) => barColor}, 16px 12px 0 0 ${({barColor}) => barColor}, 108px 12px 0 0 ${({border}) => border}, 4px 16px 0 0 ${({border}) => border}, 
        12px 16px 0 0 ${({barColor}) => barColor}, 16px 16px 0 0 ${({barColor}) => barColor}, 108px 16px 0 0 ${({border}) => border}, 4px 20px 0 0 ${({border}) => border}, 
        108px 20px 0 0 ${({border}) => border}, 8px 24px 0 0 ${({border}) => border}, 12px 24px 0 0 ${({border}) => border}, 16px 24px 0 0 ${({border}) => border}, 
        20px 24px 0 0 ${({border}) => border}, 24px 24px 0 0 ${({border}) => border}, 28px 24px 0 0 ${({border}) => border}, 32px 24px 0 0 ${({border}) => border}, 
        36px 24px 0 0 ${({border}) => border}, 40px 24px 0 0 ${({border}) => border}, 44px 24px 0 0 ${({border}) => border}, 48px 24px 0 0 ${({border}) => border}, 
        52px 24px 0 0 ${({border}) => border}, 56px 24px 0 0 ${({border}) => border}, 60px 24px 0 0 ${({border}) => border}, 64px 24px 0 0 ${({border}) => border}, 
        68px 24px 0 0 ${({border}) => border}, 72px 24px 0 0 ${({border}) => border}, 76px 24px 0 0 ${({border}) => border}, 80px 24px 0 0 ${({border}) => border}, 
        84px 24px 0 0 ${({border}) => border}, 88px 24px 0 0 ${({border}) => border}, 92px 24px 0 0 ${({border}) => border}, 96px 24px 0 0 ${({border}) => border}, 
        100px 24px 0 0 ${({border}) => border}, 104px 24px 0 0 ${({border}) => border};
    }
    22.21%, 33.3%{
        box-shadow: 8px 4px 0 0 ${({border}) => border}, 12px 4px 0 0 ${({border}) => border}, 16px 4px 0 0 ${({border}) => border}, 20px 4px 0 0 ${({border}) => border}, 
        24px 4px 0 0 ${({border}) => border}, 28px 4px 0 0 ${({border}) => border}, 32px 4px 0 0 ${({border}) => border}, 36px 4px 0 0 ${({border}) => border}, 
        40px 4px 0 0 ${({border}) => border}, 44px 4px 0 0 ${({border}) => border}, 48px 4px 0 0 ${({border}) => border}, 52px 4px 0 0 ${({border}) => border}, 
        56px 4px 0 0 ${({border}) => border}, 60px 4px 0 0 ${({border}) => border}, 64px 4px 0 0 ${({border}) => border}, 68px 4px 0 0 ${({border}) => border}, 
        72px 4px 0 0 ${({border}) => border}, 76px 4px 0 0 ${({border}) => border}, 80px 4px 0 0 ${({border}) => border}, 84px 4px 0 0 ${({border}) => border}, 
        88px 4px 0 0 ${({border}) => border}, 92px 4px 0 0 ${({border}) => border}, 96px 4px 0 0 ${({border}) => border}, 100px 4px 0 0 ${({border}) => border}, 
        104px 4px 0 0 ${({border}) => border}, 4px 8px 0 0 ${({border}) => border}, 108px 8px 0 0 ${({border}) => border}, 4px 12px 0 0 ${({border}) => border}, 
        12px 12px 0 0 ${({barColor}) => barColor}, 16px 12px 0 0 ${({barColor}) => barColor}, 24px 12px 0 0 ${({barColor}) => barColor}, 
        28px 12px 0 0 ${({barColor}) => barColor}, 108px 12px 0 0 ${({border}) => border}, 4px 16px 0 0 ${({border}) => border}, 12px 16px 0 0 ${({barColor}) => barColor}, 
        16px 16px 0 0 ${({barColor}) => barColor}, 24px 16px 0 0 ${({barColor}) => barColor}, 28px 16px 0 0 ${({barColor}) => barColor}, 
        108px 16px 0 0 ${({border}) => border}, 4px 20px 0 0 ${({border}) => border}, 108px 20px 0 0 ${({border}) => border}, 8px 24px 0 0 ${({border}) => border}, 
        12px 24px 0 0 ${({border}) => border}, 16px 24px 0 0 ${({border}) => border}, 20px 24px 0 0 ${({border}) => border}, 24px 24px 0 0 ${({border}) => border}, 
        28px 24px 0 0 ${({border}) => border}, 32px 24px 0 0 ${({border}) => border}, 36px 24px 0 0 ${({border}) => border}, 40px 24px 0 0 ${({border}) => border}, 
        44px 24px 0 0 ${({border}) => border}, 48px 24px 0 0 ${({border}) => border}, 52px 24px 0 0 ${({border}) => border}, 56px 24px 0 0 ${({border}) => border}, 
        60px 24px 0 0 ${({border}) => border}, 64px 24px 0 0 ${({border}) => border}, 68px 24px 0 0 ${({border}) => border}, 72px 24px 0 0 ${({border}) => border}, 
        76px 24px 0 0 ${({border}) => border}, 80px 24px 0 0 ${({border}) => border}, 84px 24px 0 0 ${({border}) => border}, 88px 24px 0 0 ${({border}) => border}, 
        92px 24px 0 0 ${({border}) => border}, 96px 24px 0 0 ${({border}) => border}, 100px 24px 0 0 ${({border}) => border}, 104px 24px 0 0 ${({border}) => border};
    }
    33.309999999999995%, 44.4%{
        box-shadow: 8px 4px 0 0 ${({border}) => border}, 12px 4px 0 0 ${({border}) => border}, 16px 4px 0 0 ${({border}) => border}, 20px 4px 0 0 ${({border}) => border}, 
        24px 4px 0 0 ${({border}) => border}, 28px 4px 0 0 ${({border}) => border}, 32px 4px 0 0 ${({border}) => border}, 36px 4px 0 0 ${({border}) => border}, 
        40px 4px 0 0 ${({border}) => border}, 44px 4px 0 0 ${({border}) => border}, 48px 4px 0 0 ${({border}) => border}, 52px 4px 0 0 ${({border}) => border}, 
        56px 4px 0 0 ${({border}) => border}, 60px 4px 0 0 ${({border}) => border}, 64px 4px 0 0 ${({border}) => border}, 68px 4px 0 0 ${({border}) => border}, 
        72px 4px 0 0 ${({border}) => border}, 76px 4px 0 0 ${({border}) => border}, 80px 4px 0 0 ${({border}) => border}, 84px 4px 0 0 ${({border}) => border}, 
        88px 4px 0 0 ${({border}) => border}, 92px 4px 0 0 ${({border}) => border}, 96px 4px 0 0 ${({border}) => border}, 100px 4px 0 0 ${({border}) => border}, 
        104px 4px 0 0 ${({border}) => border}, 4px 8px 0 0 ${({border}) => border}, 108px 8px 0 0 ${({border}) => border}, 4px 12px 0 0 ${({border}) => border}, 
        12px 12px 0 0 ${({barColor}) => barColor}, 16px 12px 0 0 ${({barColor}) => barColor}, 24px 12px 0 0 ${({barColor}) => barColor}, 
        28px 12px 0 0 ${({barColor}) => barColor}, 36px 12px 0 0 ${({barColor}) => barColor}, 40px 12px 0 0 ${({barColor}) => barColor}, 
        108px 12px 0 0 ${({border}) => border}, 4px 16px 0 0 ${({border}) => border}, 12px 16px 0 0 ${({barColor}) => barColor}, 16px 16px 0 0 ${({barColor}) => barColor}, 
        24px 16px 0 0 ${({barColor}) => barColor}, 28px 16px 0 0 ${({barColor}) => barColor}, 36px 16px 0 0 ${({barColor}) => barColor}, 
        40px 16px 0 0 ${({barColor}) => barColor}, 108px 16px 0 0 ${({border}) => border}, 4px 20px 0 0 ${({border}) => border}, 108px 20px 0 0 ${({border}) => border}, 
        8px 24px 0 0 ${({border}) => border}, 12px 24px 0 0 ${({border}) => border}, 16px 24px 0 0 ${({border}) => border}, 20px 24px 0 0 ${({border}) => border}, 
        24px 24px 0 0 ${({border}) => border}, 28px 24px 0 0 ${({border}) => border}, 32px 24px 0 0 ${({border}) => border}, 36px 24px 0 0 ${({border}) => border}, 
        40px 24px 0 0 ${({border}) => border}, 44px 24px 0 0 ${({border}) => border}, 48px 24px 0 0 ${({border}) => border}, 52px 24px 0 0 ${({border}) => border}, 
        56px 24px 0 0 ${({border}) => border}, 60px 24px 0 0 ${({border}) => border}, 64px 24px 0 0 ${({border}) => border}, 68px 24px 0 0 ${({border}) => border}, 
        72px 24px 0 0 ${({border}) => border}, 76px 24px 0 0 ${({border}) => border}, 80px 24px 0 0 ${({border}) => border}, 84px 24px 0 0 ${({border}) => border}, 
        88px 24px 0 0 ${({border}) => border}, 92px 24px 0 0 ${({border}) => border}, 96px 24px 0 0 ${({border}) => border}, 100px 24px 0 0 ${({border}) => border}, 
        104px 24px 0 0 ${({border}) => border};
    }
    44.41%, 55.6%{
        box-shadow: 8px 4px 0 0 ${({border}) => border}, 12px 4px 0 0 ${({border}) => border}, 16px 4px 0 0 ${({border}) => border}, 20px 4px 0 0 ${({border}) => border}, 
        24px 4px 0 0 ${({border}) => border}, 28px 4px 0 0 ${({border}) => border}, 32px 4px 0 0 ${({border}) => border}, 36px 4px 0 0 ${({border}) => border}, 
        40px 4px 0 0 ${({border}) => border}, 44px 4px 0 0 ${({border}) => border}, 48px 4px 0 0 ${({border}) => border}, 52px 4px 0 0 ${({border}) => border}, 
        56px 4px 0 0 ${({border}) => border}, 60px 4px 0 0 ${({border}) => border}, 64px 4px 0 0 ${({border}) => border}, 68px 4px 0 0 ${({border}) => border}, 
        72px 4px 0 0 ${({border}) => border}, 76px 4px 0 0 ${({border}) => border}, 80px 4px 0 0 ${({border}) => border}, 84px 4px 0 0 ${({border}) => border}, 
        88px 4px 0 0 ${({border}) => border}, 92px 4px 0 0 ${({border}) => border}, 96px 4px 0 0 ${({border}) => border}, 100px 4px 0 0 ${({border}) => border},
         104px 4px 0 0 ${({border}) => border}, 4px 8px 0 0 ${({border}) => border}, 108px 8px 0 0 ${({border}) => border}, 4px 12px 0 0 ${({border}) => border}, 
         12px 12px 0 0 ${({barColor}) => barColor}, 16px 12px 0 0 ${({barColor}) => barColor}, 24px 12px 0 0 ${({barColor}) => barColor}, 
         28px 12px 0 0 ${({barColor}) => barColor}, 36px 12px 0 0 ${({barColor}) => barColor}, 40px 12px 0 0 ${({barColor}) => barColor}, 
         48px 12px 0 0 ${({barColor}) => barColor}, 52px 12px 0 0 ${({barColor}) => barColor}, 108px 12px 0 0 ${({border}) => border}, 
         4px 16px 0 0 ${({border}) => border}, 12px 16px 0 0 ${({barColor}) => barColor}, 16px 16px 0 0 ${({barColor}) => barColor}, 
         24px 16px 0 0 ${({barColor}) => barColor}, 28px 16px 0 0 ${({barColor}) => barColor}, 36px 16px 0 0 ${({barColor}) => barColor}, 
         40px 16px 0 0 ${({barColor}) => barColor}, 48px 16px 0 0 ${({barColor}) => barColor}, 52px 16px 0 0 ${({barColor}) => barColor}, 
         108px 16px 0 0 ${({border}) => border}, 4px 20px 0 0 ${({border}) => border}, 108px 20px 0 0 ${({border}) => border}, 8px 24px 0 0 ${({border}) => border}, 
         12px 24px 0 0 ${({border}) => border}, 16px 24px 0 0 ${({border}) => border}, 20px 24px 0 0 ${({border}) => border}, 24px 24px 0 0 ${({border}) => border}, 
         28px 24px 0 0 ${({border}) => border}, 32px 24px 0 0 ${({border}) => border}, 36px 24px 0 0 ${({border}) => border}, 40px 24px 0 0 ${({border}) => border}, 
         44px 24px 0 0 ${({border}) => border}, 48px 24px 0 0 ${({border}) => border}, 52px 24px 0 0 ${({border}) => border}, 56px 24px 0 0 ${({border}) => border}, 
         60px 24px 0 0 ${({border}) => border}, 64px 24px 0 0 ${({border}) => border}, 68px 24px 0 0 ${({border}) => border}, 72px 24px 0 0 ${({border}) => border}, 
         76px 24px 0 0 ${({border}) => border}, 80px 24px 0 0 ${({border}) => border}, 84px 24px 0 0 ${({border}) => border}, 88px 24px 0 0 ${({border}) => border}, 
         92px 24px 0 0 ${({border}) => border}, 96px 24px 0 0 ${({border}) => border}, 100px 24px 0 0 ${({border}) => border}, 104px 24px 0 0 ${({border}) => border};
    }
    55.61%, 66.7%{
        box-shadow: 8px 4px 0 0 ${({border}) => border}, 12px 4px 0 0 ${({border}) => border}, 16px 4px 0 0 ${({border}) => border}, 20px 4px 0 0 ${({border}) => border}, 
        24px 4px 0 0 ${({border}) => border}, 28px 4px 0 0 ${({border}) => border}, 32px 4px 0 0 ${({border}) => border}, 36px 4px 0 0 ${({border}) => border}, 
        40px 4px 0 0 ${({border}) => border}, 44px 4px 0 0 ${({border}) => border}, 48px 4px 0 0 ${({border}) => border}, 52px 4px 0 0 ${({border}) => border}, 
        56px 4px 0 0 ${({border}) => border}, 60px 4px 0 0 ${({border}) => border}, 64px 4px 0 0 ${({border}) => border}, 68px 4px 0 0 ${({border}) => border}, 
        72px 4px 0 0 ${({border}) => border}, 76px 4px 0 0 ${({border}) => border}, 80px 4px 0 0 ${({border}) => border}, 84px 4px 0 0 ${({border}) => border}, 
        88px 4px 0 0 ${({border}) => border}, 92px 4px 0 0 ${({border}) => border}, 96px 4px 0 0 ${({border}) => border}, 100px 4px 0 0 ${({border}) => border}, 
        104px 4px 0 0 ${({border}) => border}, 4px 8px 0 0 ${({border}) => border}, 108px 8px 0 0 ${({border}) => border}, 4px 12px 0 0 ${({border}) => border}, 
        12px 12px 0 0 ${({barColor}) => barColor}, 16px 12px 0 0 ${({barColor}) => barColor}, 24px 12px 0 0 ${({barColor}) => barColor}, 
        28px 12px 0 0 ${({barColor}) => barColor}, 36px 12px 0 0 ${({barColor}) => barColor}, 40px 12px 0 0 ${({barColor}) => barColor}, 
        48px 12px 0 0 ${({barColor}) => barColor}, 52px 12px 0 0 ${({barColor}) => barColor}, 60px 12px 0 0 ${({barColor}) => barColor}, 
        64px 12px 0 0 ${({barColor}) => barColor}, 108px 12px 0 0 ${({border}) => border}, 4px 16px 0 0 ${({border}) => border}, 12px 16px 0 0 ${({barColor}) => barColor}, 
        16px 16px 0 0 ${({barColor}) => barColor}, 24px 16px 0 0 ${({barColor}) => barColor}, 28px 16px 0 0 ${({barColor}) => barColor}, 
        36px 16px 0 0 ${({barColor}) => barColor}, 40px 16px 0 0 ${({barColor}) => barColor}, 48px 16px 0 0 ${({barColor}) => barColor}, 
        52px 16px 0 0 ${({barColor}) => barColor}, 60px 16px 0 0 ${({barColor}) => barColor}, 64px 16px 0 0 ${({barColor}) => barColor}, 
        108px 16px 0 0 ${({border}) => border}, 4px 20px 0 0 ${({border}) => border}, 108px 20px 0 0 ${({border}) => border}, 8px 24px 0 0 ${({border}) => border}, 
        12px 24px 0 0 ${({border}) => border}, 16px 24px 0 0 ${({border}) => border}, 20px 24px 0 0 ${({border}) => border}, 24px 24px 0 0 ${({border}) => border}, 
        28px 24px 0 0 ${({border}) => border}, 32px 24px 0 0 ${({border}) => border}, 36px 24px 0 0 ${({border}) => border}, 40px 24px 0 0 ${({border}) => border}, 
        44px 24px 0 0 ${({border}) => border}, 48px 24px 0 0 ${({border}) => border}, 52px 24px 0 0 ${({border}) => border}, 56px 24px 0 0 ${({border}) => border}, 
        60px 24px 0 0 ${({border}) => border}, 64px 24px 0 0 ${({border}) => border}, 68px 24px 0 0 ${({border}) => border}, 72px 24px 0 0 ${({border}) => border}, 
        76px 24px 0 0 ${({border}) => border}, 80px 24px 0 0 ${({border}) => border}, 84px 24px 0 0 ${({border}) => border}, 88px 24px 0 0 ${({border}) => border}, 
        92px 24px 0 0 ${({border}) => border}, 96px 24px 0 0 ${({border}) => border}, 100px 24px 0 0 ${({border}) => border}, 104px 24px 0 0 ${({border}) => border};
    }
    66.71000000000001%, 77.8%{
        box-shadow: 8px 4px 0 0 ${({border}) => border}, 12px 4px 0 0 ${({border}) => border}, 16px 4px 0 0 ${({border}) => border}, 20px 4px 0 0 ${({border}) => border}, 
        24px 4px 0 0 ${({border}) => border}, 28px 4px 0 0 ${({border}) => border}, 32px 4px 0 0 ${({border}) => border}, 36px 4px 0 0 ${({border}) => border}, 
        40px 4px 0 0 ${({border}) => border}, 44px 4px 0 0 ${({border}) => border}, 48px 4px 0 0 ${({border}) => border}, 52px 4px 0 0 ${({border}) => border}, 
        56px 4px 0 0 ${({border}) => border}, 60px 4px 0 0 ${({border}) => border}, 64px 4px 0 0 ${({border}) => border}, 68px 4px 0 0 ${({border}) => border}, 
        72px 4px 0 0 ${({border}) => border}, 76px 4px 0 0 ${({border}) => border}, 80px 4px 0 0 ${({border}) => border}, 84px 4px 0 0 ${({border}) => border}, 
        88px 4px 0 0 ${({border}) => border}, 92px 4px 0 0 ${({border}) => border}, 96px 4px 0 0 ${({border}) => border}, 100px 4px 0 0 ${({border}) => border}, 
        104px 4px 0 0 ${({border}) => border}, 4px 8px 0 0 ${({border}) => border}, 108px 8px 0 0 ${({border}) => border}, 4px 12px 0 0 ${({border}) => border}, 
        12px 12px 0 0 ${({barColor}) => barColor}, 16px 12px 0 0 ${({barColor}) => barColor}, 24px 12px 0 0 ${({barColor}) => barColor}, 
        28px 12px 0 0 ${({barColor}) => barColor}, 36px 12px 0 0 ${({barColor}) => barColor}, 40px 12px 0 0 ${({barColor}) => barColor}, 
        48px 12px 0 0 ${({barColor}) => barColor}, 52px 12px 0 0 ${({barColor}) => barColor}, 60px 12px 0 0 ${({barColor}) => barColor}, 
        64px 12px 0 0 ${({barColor}) => barColor}, 72px 12px 0 0 ${({barColor}) => barColor}, 76px 12px 0 0 ${({barColor}) => barColor}, 
        108px 12px 0 0 ${({border}) => border}, 4px 16px 0 0 ${({border}) => border}, 12px 16px 0 0 ${({barColor}) => barColor}, 16px 16px 0 0 ${({barColor}) => barColor}, 
        24px 16px 0 0 ${({barColor}) => barColor}, 28px 16px 0 0 ${({barColor}) => barColor}, 36px 16px 0 0 ${({barColor}) => barColor}, 
        40px 16px 0 0 ${({barColor}) => barColor}, 48px 16px 0 0 ${({barColor}) => barColor}, 52px 16px 0 0 ${({barColor}) => barColor}, 
        60px 16px 0 0 ${({barColor}) => barColor}, 64px 16px 0 0 ${({barColor}) => barColor}, 72px 16px 0 0 ${({barColor}) => barColor}, 
        76px 16px 0 0 ${({barColor}) => barColor}, 108px 16px 0 0 ${({border}) => border}, 4px 20px 0 0 ${({border}) => border}, 108px 20px 0 0 ${({border}) => border}, 
        8px 24px 0 0 ${({border}) => border}, 12px 24px 0 0 ${({border}) => border}, 16px 24px 0 0 ${({border}) => border}, 20px 24px 0 0 ${({border}) => border}, 
        24px 24px 0 0 ${({border}) => border}, 28px 24px 0 0 ${({border}) => border}, 32px 24px 0 0 ${({border}) => border}, 36px 24px 0 0 ${({border}) => border}, 
        40px 24px 0 0 ${({border}) => border}, 44px 24px 0 0 ${({border}) => border}, 48px 24px 0 0 ${({border}) => border}, 52px 24px 0 0 ${({border}) => border}, 
        56px 24px 0 0 ${({border}) => border}, 60px 24px 0 0 ${({border}) => border}, 64px 24px 0 0 ${({border}) => border}, 68px 24px 0 0 ${({border}) => border}, 
        72px 24px 0 0 ${({border}) => border}, 76px 24px 0 0 ${({border}) => border}, 80px 24px 0 0 ${({border}) => border}, 84px 24px 0 0 ${({border}) => border}, 
        88px 24px 0 0 ${({border}) => border}, 92px 24px 0 0 ${({border}) => border}, 96px 24px 0 0 ${({border}) => border}, 100px 24px 0 0 ${({border}) => border}, 
        104px 24px 0 0 ${({border}) => border};
    }
    77.81%, 88.9%{
        box-shadow: 8px 4px 0 0 ${({border}) => border}, 12px 4px 0 0 ${({border}) => border}, 16px 4px 0 0 ${({border}) => border}, 20px 4px 0 0 ${({border}) => border}, 
        24px 4px 0 0 ${({border}) => border}, 28px 4px 0 0 ${({border}) => border}, 32px 4px 0 0 ${({border}) => border}, 36px 4px 0 0 ${({border}) => border}, 
        40px 4px 0 0 ${({border}) => border}, 44px 4px 0 0 ${({border}) => border}, 48px 4px 0 0 ${({border}) => border}, 52px 4px 0 0 ${({border}) => border}, 
        56px 4px 0 0 ${({border}) => border}, 60px 4px 0 0 ${({border}) => border}, 64px 4px 0 0 ${({border}) => border}, 68px 4px 0 0 ${({border}) => border}, 
        72px 4px 0 0 ${({border}) => border}, 76px 4px 0 0 ${({border}) => border}, 80px 4px 0 0 ${({border}) => border}, 84px 4px 0 0 ${({border}) => border}, 
        88px 4px 0 0 ${({border}) => border}, 92px 4px 0 0 ${({border}) => border}, 96px 4px 0 0 ${({border}) => border}, 100px 4px 0 0 ${({border}) => border}, 
        104px 4px 0 0 ${({border}) => border}, 4px 8px 0 0 ${({border}) => border}, 108px 8px 0 0 ${({border}) => border}, 4px 12px 0 0 ${({border}) => border}, 
        12px 12px 0 0 ${({barColor}) => barColor}, 16px 12px 0 0 ${({barColor}) => barColor}, 24px 12px 0 0 ${({barColor}) => barColor}, 
        28px 12px 0 0 ${({barColor}) => barColor}, 36px 12px 0 0 ${({barColor}) => barColor}, 40px 12px 0 0 ${({barColor}) => barColor}, 
        48px 12px 0 0 ${({barColor}) => barColor}, 52px 12px 0 0 ${({barColor}) => barColor}, 60px 12px 0 0 ${({barColor}) => barColor}, 
        64px 12px 0 0 ${({barColor}) => barColor}, 72px 12px 0 0 ${({barColor}) => barColor}, 76px 12px 0 0 ${({barColor}) => barColor}, 
        84px 12px 0 0 ${({barColor}) => barColor}, 88px 12px 0 0 ${({barColor}) => barColor}, 108px 12px 0 0 ${({border}) => border}, 4px 16px 0 0 ${({border}) => border},
        12px 16px 0 0 ${({barColor}) => barColor}, 16px 16px 0 0 ${({barColor}) => barColor}, 24px 16px 0 0 ${({barColor}) => barColor}, 
        28px 16px 0 0 ${({barColor}) => barColor}, 36px 16px 0 0 ${({barColor}) => barColor}, 40px 16px 0 0 ${({barColor}) => barColor}, 
        48px 16px 0 0 ${({barColor}) => barColor}, 52px 16px 0 0 ${({barColor}) => barColor}, 60px 16px 0 0 ${({barColor}) => barColor}, 
        64px 16px 0 0 ${({barColor}) => barColor}, 72px 16px 0 0 ${({barColor}) => barColor}, 76px 16px 0 0 ${({barColor}) => barColor}, 
        84px 16px 0 0 ${({barColor}) => barColor}, 88px 16px 0 0 ${({barColor}) => barColor}, 108px 16px 0 0 ${({border}) => border}, 
        4px 20px 0 0 ${({border}) => border}, 108px 20px 0 0 ${({border}) => border}, 8px 24px 0 0 ${({border}) => border}, 12px 24px 0 0 ${({border}) => border}, 
        16px 24px 0 0 ${({border}) => border}, 20px 24px 0 0 ${({border}) => border}, 24px 24px 0 0 ${({border}) => border}, 28px 24px 0 0 ${({border}) => border}, 
        32px 24px 0 0 ${({border}) => border}, 36px 24px 0 0 ${({border}) => border}, 40px 24px 0 0 ${({border}) => border}, 44px 24px 0 0 ${({border}) => border}, 
        48px 24px 0 0 ${({border}) => border}, 52px 24px 0 0 ${({border}) => border}, 56px 24px 0 0 ${({border}) => border}, 60px 24px 0 0 ${({border}) => border}, 
        64px 24px 0 0 ${({border}) => border}, 68px 24px 0 0 ${({border}) => border}, 72px 24px 0 0 ${({border}) => border}, 76px 24px 0 0 ${({border}) => border}, 
        80px 24px 0 0 ${({border}) => border}, 84px 24px 0 0 ${({border}) => border}, 88px 24px 0 0 ${({border}) => border}, 92px 24px 0 0 ${({border}) => border}, 
        96px 24px 0 0 ${({border}) => border}, 100px 24px 0 0 ${({border}) => border}, 104px 24px 0 0 ${({border}) => border};
    }
    88.91000000000001%, 100%{
        box-shadow: 8px 4px 0 0 ${({border}) => border}, 12px 4px 0 0 ${({border}) => border}, 16px 4px 0 0 ${({border}) => border}, 20px 4px 0 0 ${({border}) => border}, 
        24px 4px 0 0 ${({border}) => border}, 28px 4px 0 0 ${({border}) => border}, 32px 4px 0 0 ${({border}) => border}, 36px 4px 0 0 ${({border}) => border}, 
        40px 4px 0 0 ${({border}) => border}, 44px 4px 0 0 ${({border}) => border}, 48px 4px 0 0 ${({border}) => border}, 52px 4px 0 0 ${({border}) => border}, 
        56px 4px 0 0 ${({border}) => border}, 60px 4px 0 0 ${({border}) => border}, 64px 4px 0 0 ${({border}) => border}, 68px 4px 0 0 ${({border}) => border}, 
        72px 4px 0 0 ${({border}) => border}, 76px 4px 0 0 ${({border}) => border}, 80px 4px 0 0 ${({border}) => border}, 84px 4px 0 0 ${({border}) => border}, 
        88px 4px 0 0 ${({border}) => border}, 92px 4px 0 0 ${({border}) => border}, 96px 4px 0 0 ${({border}) => border}, 100px 4px 0 0 ${({border}) => border}, 
        104px 4px 0 0 ${({border}) => border}, 4px 8px 0 0 ${({border}) => border}, 108px 8px 0 0 ${({border}) => border}, 4px 12px 0 0 ${({border}) => border}, 
        12px 12px 0 0 ${({barColor}) => barColor}, 16px 12px 0 0 ${({barColor}) => barColor}, 24px 12px 0 0 ${({barColor}) => barColor}, 
        28px 12px 0 0 ${({barColor}) => barColor}, 36px 12px 0 0 ${({barColor}) => barColor}, 40px 12px 0 0 ${({barColor}) => barColor}, 
        48px 12px 0 0 ${({barColor}) => barColor}, 52px 12px 0 0 ${({barColor}) => barColor}, 60px 12px 0 0 ${({barColor}) => barColor}, 
        64px 12px 0 0 ${({barColor}) => barColor}, 72px 12px 0 0 ${({barColor}) => barColor}, 76px 12px 0 0 ${({barColor}) => barColor}, 
        84px 12px 0 0 ${({barColor}) => barColor}, 88px 12px 0 0 ${({barColor}) => barColor}, 96px 12px 0 0 ${({barColor}) => barColor}, 
        100px 12px 0 0 ${({barColor}) => barColor}, 108px 12px 0 0 ${({border}) => border}, 4px 16px 0 0 ${({border}) => border}, 12px 16px 0 0 ${({barColor}) => barColor}, 
        16px 16px 0 0 ${({barColor}) => barColor}, 24px 16px 0 0 ${({barColor}) => barColor}, 28px 16px 0 0 ${({barColor}) => barColor}, 
        36px 16px 0 0 ${({barColor}) => barColor}, 40px 16px 0 0 ${({barColor}) => barColor}, 48px 16px 0 0 ${({barColor}) => barColor}, 
        52px 16px 0 0 ${({barColor}) => barColor}, 60px 16px 0 0 ${({barColor}) => barColor}, 64px 16px 0 0 ${({barColor}) => barColor}, 
        72px 16px 0 0 ${({barColor}) => barColor}, 76px 16px 0 0 ${({barColor}) => barColor}, 84px 16px 0 0 ${({barColor}) => barColor}, 
        88px 16px 0 0 ${({barColor}) => barColor}, 96px 16px 0 0 ${({barColor}) => barColor}, 100px 16px 0 0 ${({barColor}) => barColor}, 
        108px 16px 0 0 ${({border}) => border}, 4px 20px 0 0 ${({border}) => border}, 108px 20px 0 0 ${({border}) => border}, 8px 24px 0 0 ${({border}) => border}, 
        12px 24px 0 0 ${({border}) => border}, 16px 24px 0 0 ${({border}) => border}, 20px 24px 0 0 ${({border}) => border}, 24px 24px 0 0 ${({border}) => border}, 
        28px 24px 0 0 ${({border}) => border}, 32px 24px 0 0 ${({border}) => border}, 36px 24px 0 0 ${({border}) => border}, 40px 24px 0 0 ${({border}) => border}, 
        44px 24px 0 0 ${({border}) => border}, 48px 24px 0 0 ${({border}) => border}, 52px 24px 0 0 ${({border}) => border}, 56px 24px 0 0 ${({border}) => border}, 
        60px 24px 0 0 ${({border}) => border}, 64px 24px 0 0 ${({border}) => border}, 68px 24px 0 0 ${({border}) => border}, 72px 24px 0 0 ${({border}) => border}, 
        76px 24px 0 0 ${({border}) => border}, 80px 24px 0 0 ${({border}) => border}, 84px 24px 0 0 ${({border}) => border}, 88px 24px 0 0 ${({border}) => border}, 
        92px 24px 0 0 ${({border}) => border}, 96px 24px 0 0 ${({border}) => border}, 100px 24px 0 0 ${({border}) => border}, 104px 24px 0 0 ${({border}) => border};
    }
}
`