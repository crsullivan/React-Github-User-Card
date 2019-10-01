// const users = 
// [
//     'crsullivan','tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell', 'brandleyj', 'tonyrkovar', 'kmcknight1', 'EvanAntunano', 'umekow', 'dmaack', 'rrrbba'
// ];

// export default Users

import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

function Users(props) {
  // const { users } = props;
  useEffect(() => {
    console.log(props);
  }, []);

  // return (
  //   <>
  //     {users.map(users => (
  //       <div key={users.id} className="users">
  //         <img src={users.img} alt={users.name} />
  //         <div>
  //           <h3>{users.name}</h3>
  //           {users.following} &&
  //             {users.followers}
  //         </div>
  //       </div>
  //     ))}
  //   </>
  // );

  return 'hi';
}

export default Users