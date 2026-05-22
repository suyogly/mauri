import { styled } from '@linaria/react';


const StyledTableContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  width: 100%;
`;

export const BackgroundMockPage = () => {
  return (
    // mauri: replaced Twenty mock CRM background with Mauri beehive image
    // mauri: background color uses Twenty's light theme background so bees are visible
    // mauri: image positioned right-center so beehive is not cropped on left
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#f1f1f1',
        backgroundImage: 'url(/images/mauri-login-bg.png)',
        backgroundSize: 'contain',
        backgroundPosition: 'left bottom',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
};
