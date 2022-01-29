import React from 'react';
import styled, { css } from 'styled-components';


// qui tac viet css-in-JS
const StyledCard = styled.div`
    position: relative;

`;

const CardImage = styled.div`
    height: 400px;
    width: 100%;
    border-radius: 8px;
`;

const CardImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover; //dung cho video + anh -> scale cho het cai' box
    border-radius: inherit; 
`;

const CardContent = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%); //== translateX(-50%)
    bottom: 0;
    background-color: white;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
    width: calc(100% - 36px);
`;

const CardTop = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

const CardUser = styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;
`;

const UserAvatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 100rem; //== rounded: full
    object-fit: cover;
    flex-shrink: 0; //dam bao ko bao gio shrink -> chiem nhieu width nhat
`;

const UserName = styled.span`
    font-weight: 300;
    font-size: 16px;
    color: #333;
`;

const CardFooter = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
`;

const CardTitle = styled.h3`
    font-size: 18px;
    font-weight: 500;
    color: black;
`;

const CardAmount = styled.span`

    font-size: ${props => props.fontSize || '18px'};
    font-weight: bold;
    
    background: linear-gradient(86.88deg, #7D6AFF 1.38%, #FFB86C 64.35%, #FC2872 119.91%);
     
    ${ (props) => 
    props.secondary && 
        css`
            background: linear-gradient(
                86.88deg, 
                #20E3B2 1.38%, #2cccff 64.35%, #FC2872 119.91%);
    `};
    //shortcut -> scp, ko cmt phia tren code duoc do loi

    //to mau gradient cho chu
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
`;

export default function card(props) {
  return <StyledCard>
      {/* main img */}
      <CardImage>
            <CardImg 
                src = 'https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1600x1200&vertical=top' 
            />       
      </CardImage>

      {/* info box */}
      <CardContent>
          {/* header info box */}
          <CardTop>
              {/* left head */}
              <CardUser>
                    <UserAvatar
                        src = 'https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1600x1200&vertical=top'
                    />

                    <UserName>@zndrson</UserName>
              </CardUser>

              {/* right head */}
              <div>
                  256
              </div>
          </CardTop>

          {/* footer info box */}
          <CardFooter>
              <CardTitle>Cosmic perspective</CardTitle>
              <CardAmount secondary = {props.secondary} fontSize = {props.fontSize}>12,000 PSL</CardAmount>
          </CardFooter>
      </CardContent>
  </StyledCard>;
}
