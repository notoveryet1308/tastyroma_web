import React from 'react'
import {withRouter} from 'react-router-dom'

import { menudata } from './utils';
import {
  Container,
  ScrollWrapper,
  Label,
  MenuInfo
} from './style';

function Index({history}) {
  return (
    <Container>
      <Label>Menu Category</Label>
      <ScrollWrapper>
        {
          menudata.map((data, _index) => (
            <MenuInfo 
              onClick={()=> history.push(data.link)}
              img={data.image}
              key={_index}
            >
              <h1 className="menuCatTitle">
                {data.type}
              </h1>
            </MenuInfo>
          ))
        }
      </ScrollWrapper>
    </Container>
  )
}

export default withRouter(Index);
