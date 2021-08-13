import React, { useEffect } from 'react';
import { Container } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetUsers } from '../../store/user';

export function Dashboard() {
  const { userList } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetUsers());
  }, []);

  useEffect(() => {
    console.info(userList);
  }, [userList]);

  return (
    <div className="page-content">
      <Container fluid>
        {userList?.map((el, i) => (
          <div key={i}>{el.email}</div>
        ))}
      </Container>
    </div>
  );
}
