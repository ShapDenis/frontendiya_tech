import React from 'react';
import {UserTypes} from './type.ts';

interface UserProps {
  data: UserTypes;
}

const UserComponent: React.FC<UserProps> = ({data}) => {
  return (
  <div>
    <h2>{data.name}</h2>
    <p>ID: {data.id}</p>
    <p>Location: {data.location}</p>
  </div>
  );
};

export default UserComponent;
