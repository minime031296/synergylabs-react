import { Card, Typography, Button } from "@material-tailwind/react";

const TABLE_HEAD = ["Name", "Username", "Email", ""];

const Users = ({ users }) => {
  
  if (!Array.isArray(users) || users.length === 0) {
    return <p>No users available</p>;
  }

  return (
    <Card className="h-full w-full overflow-scroll p-4">
      
      <Link>
        Create New User
      </Link>

      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map(({ name, username, email }, index) => {
            const isLast = index === users.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-150";

            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {username}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {email}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium text-red-500 hover:text-red-600"
                  >
                    Delete
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default Users;
