//Functional Component == Stateless Components
import React from 'react';

const User = (props) => {
  return (
    <div>
      Name: {props.children} |

      | Age: {props.age}
    </div>
  )
}

export default User;
